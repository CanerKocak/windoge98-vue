#![allow(clippy::collapsible_else_if)]

#[macro_use]
extern crate ic_cdk_macros;
#[macro_use]
extern crate serde;

use std::borrow::Cow;
use std::cell::RefCell;
use std::collections::{HashMap, HashSet};
use std::convert::TryFrom;
use std::iter::FromIterator;
use std::mem;
use std::num::TryFromIntError;
use std::result::Result as StdResult;

use candid::{CandidType, Encode, Principal};
use ic_cdk::{
    api::{self, call},
    export::candid,
    storage,
};
use ic_certified_map::Hash;
use include_base64::include_base64;

mod http;

const MGMT: Principal = Principal::from_slice(&[]);

thread_local! {
    static STATE: RefCell<State> = RefCell::default();
}

#[derive(CandidType, Deserialize)]
struct StableState {
    state: State,
    hashes: Vec<(String, Hash)>,
}

#[pre_upgrade]
fn pre_upgrade() {
    let state = STATE.with(|state| mem::take(&mut *state.borrow_mut()));
    let hashes = http::HASHES.with(|hashes| mem::take(&mut *hashes.borrow_mut()));
    let hashes = hashes.iter().map(|(k, v)| (k.clone(), *v)).collect();
    let stable_state = StableState { state, hashes };
    storage::stable_save((stable_state,)).unwrap();
}
#[post_upgrade]
fn post_upgrade() {
    let (StableState { state, hashes },) = storage::stable_restore().unwrap();
    STATE.with(|state0| *state0.borrow_mut() = state);
    let hashes = hashes.into_iter().collect();
    http::HASHES.with(|hashes0| *hashes0.borrow_mut() = hashes);
}

#[derive(CandidType, Deserialize)]
struct InitArgs {
    custodians: Option<HashSet<Principal>>,
    logo: Option<LogoResult>,
    name: String,
    symbol: String,
}

#[init]
fn init(args: InitArgs) {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        state.custodians = args
            .custodians
            .unwrap_or_else(|| HashSet::from_iter([api::caller()]));
        state.name = args.name;
        state.symbol = args.symbol;
        state.logo = args.logo;
    });
}

#[derive(CandidType, Deserialize)]
enum Error {
    Unauthorized,
    InvalidTokenId,
    ZeroAddress,
    Other,
}

impl From<TryFromIntError> for Error {
    fn from(_: TryFromIntError) -> Self {
        Self::InvalidTokenId
    }
}

type Result<T = u128, E = Error> = StdResult<T, E>;

// --------------
// base interface
// --------------

#[query(name = "balanceOfDip721")]
fn balance_of(user: Principal) -> u64 {
    STATE.with(|state| {
        state
            .borrow()
            .nfts
            .iter()
            .filter(|n| n.owner == user)
            .count() as u64
    })
}

#[query(name = "ownerOfDip721")]
fn owner_of(token_id: u64) -> Result<Principal> {
    STATE.with(|state| {
        let owner = state
            .borrow()
            .nfts
            .get(usize::try_from(token_id)?)
            .ok_or(Error::InvalidTokenId)?
            .owner;
        Ok(owner)
    })
}

#[update(name = "transferFromDip721")]
fn transfer_from(from: Principal, to: Principal, token_id: u64) -> Result {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        let state = &mut *state;
        let nft = state
            .nfts
            .get_mut(usize::try_from(token_id)?)
            .ok_or(Error::InvalidTokenId)?;
        let caller = api::caller();
        if nft.owner != caller
            && nft.approved != Some(caller)
            && !state
                .operators
                .get(&from)
                .map(|s| s.contains(&caller))
                .unwrap_or(false)
            && !state.custodians.contains(&caller)
        {
            Err(Error::Unauthorized)
        } else if nft.owner != from {
            Err(Error::Other)
        } else {
            nft.approved = None;
            nft.owner = to;
            Ok(state.next_txid())
        }
    })
}

#[update(name = "safeTransferFromDip721")]
fn safe_transfer_from(from: Principal, to: Principal, token_id: u64) -> Result {
    if to == MGMT {
        Err(Error::ZeroAddress)
    } else {
        transfer_from(from, to, token_id)
    }
}

#[query(name = "supportedInterfacesDip721")]
fn supported_interfaces() -> &'static [InterfaceId] {
    &[
        InterfaceId::TransferNotification,
        // InterfaceId::Approval, // Psychedelic/DIP721#5
        InterfaceId::Burn,
        InterfaceId::Mint,
    ]
}

#[derive(CandidType, Deserialize, Clone)]
struct LogoResult {
    logo_type: Cow<'static, str>,
    data: Cow<'static, str>,
}

#[export_name = "canister_query logoDip721"]
fn logo() /* -> &'static LogoResult */
{
    ic_cdk::setup();
    STATE.with(|state| call::reply((state.borrow().logo.as_ref().unwrap_or(&DEFAULT_LOGO),)))
}

#[query(name = "nameDip721")]
fn name() -> String {
    STATE.with(|state| state.borrow().name.clone())
}

#[query(name = "symbolDip721")]
fn symbol() -> String {
    STATE.with(|state| state.borrow().symbol.clone())
}

const DEFAULT_LOGO: LogoResult = LogoResult {
    data: Cow::Borrowed(include_base64!("logo.png")),
    logo_type: Cow::Borrowed("image/png"),
};

#[query(name = "totalSupplyDip721")]
fn total_supply() -> u64 {
    STATE.with(|state| state.borrow().nfts.len() as u64)
}

#[export_name = "canister_query getMetadataDip721"]
fn get_metadata(/* token_id: u64 */) /* -> Result<&'static MetadataDesc> */
{
    ic_cdk::setup();
    let token_id = call::arg_data::<(u64,)>().0;
    let res: Result<()> = STATE.with(|state| {
        let state = state.borrow();
        let metadata = &state
            .nfts
            .get(usize::try_from(token_id)?)
            .ok_or(Error::InvalidTokenId)?
            .metadata;
        call::reply((Ok::<_, Error>(metadata),));
        Ok(())
    });
    if let Err(e) = res {
        call::reply((Err::<MetadataDesc, _>(e),));
    }
}

#[derive(CandidType)]
struct ExtendedMetadataResult<'a> {
    metadata_desc: MetadataDescRef<'a>,
    token_id: u64,
}

#[export_name = "canister_update getMetadataForUserDip721"]
fn get_metadata_for_user(/* user: Principal */) /* -> Vec<ExtendedMetadataResult> */
{
    ic_cdk::setup();
    let user = call::arg_data::<(Principal,)>().0;
    STATE.with(|state| {
        let state = state.borrow();
        let metadata: Vec<_> = state
            .nfts
            .iter()
            .filter(|n| n.owner == user)
            .map(|n| ExtendedMetadataResult {
                metadata_desc: &n.metadata,
                token_id: n.id,
            })
            .collect();
        call::reply((metadata,));
    });
}

// ----------------------
// notification interface
// ----------------------

#[update(name = "transferFromNotifyDip721")]
fn transfer_from_notify(from: Principal, to: Principal, token_id: u64, data: Vec<u8>) -> Result {
    let res = transfer_from(from, to, token_id)?;
    if let Ok(arg) = Encode!(&api::caller(), &from, &token_id, &data) {
        // Using call_raw ensures we don't need to await the future for the call to be executed.
        // Calling an arbitrary function like this means that a malicious recipient could call 
        // transferFromNotifyDip721 in their onDIP721Received function, resulting in an infinite loop.
        // This will trap eventually, but the transfer will have already been completed and the state-change persisted.
        // That means the original transfer must reply before that happens, or the caller will be
        // convinced that the transfer failed when it actually succeeded. So we don't await the call,
        // so that we'll reply immediately regardless of how long the notification call takes.
        let _ = api::call::call_raw(to, "onDIP721Received", arg, 0);
    }
    Ok(res)
}

#[update(name = "safeTransferFromNotifyDip721")]
fn safe_transfer_from_notify(
    from: Principal,
    to: Principal,
    token_id: u64,
    data: Vec<u8>,
) -> Result {
    if to == MGMT {
        Err(Error::ZeroAddress)
    } else {
        transfer_from_notify(from, to, token_id, data)
    }
}

// ------------------
// approval interface
// ------------------

#[update(name = "approveDip721")]
fn approve(user: Principal, token_id: u64) -> Result {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        let state = &mut *state;
        let caller = api::caller();
        let nft = state
            .nfts
            .get_mut(usize::try_from(token_id)?)
            .ok_or(Error::InvalidTokenId)?;
        if nft.owner != caller
            && nft.approved != Some(caller)
            && !state
                .operators
                .get(&user)
                .map(|s| s.contains(&caller))
                .unwrap_or(false)
            && !state.custodians.contains(&caller)
        {
            Err(Error::Unauthorized)
        } else {
            nft.approved = Some(user);
            Ok(state.next_txid())
        }
    })
}

#[update(name = "setApprovalForAllDip721")]
fn set_approval_for_all(operator: Principal, is_approved: bool) -> Result {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        let caller = api::caller();
        if operator != caller {
            let operators = state.operators.entry(caller).or_default();
            if operator == MGMT {
                if !is_approved {
                    operators.clear();
                } else {
                    // cannot enable everyone as an operator
                }
            } else {
                if is_approved {
                    operators.insert(operator);
                } else {
                    operators.remove(&operator);
                }
            }
        }
        Ok(state.next_txid())
    })
}

// #[query(name = "getApprovedDip721")] // Psychedelic/DIP721#5
fn _get_approved(token_id: u64) -> Result<Principal> {
    STATE.with(|state| {
        let approved = state
            .borrow()
            .nfts
            .get(usize::try_from(token_id)?)
            .ok_or(Error::InvalidTokenId)?
            .approved
            .unwrap_or_else(api::caller);
        Ok(approved)
    })
}

#[query(name = "isApprovedForAllDip721")]
fn is_approved_for_all(operator: Principal) -> bool {
    STATE.with(|state| {
        state
            .borrow()
            .operators
            .get(&api::caller())
            .map(|s| s.contains(&operator))
            .unwrap_or(false)
    })
}

// --------------
// mint interface
// --------------

#[update(name = "mintDip721")]
fn mint(
    to: Principal,
    metadata: MetadataDesc,
    blob_content: Vec<u8>,
) -> Result<MintResult, ConstrainedError> {
    let (txid, tkid) = STATE.with(|state| {
        let mut state = state.borrow_mut();
        if !state.custodians.contains(&api::caller()) {
            return Err(ConstrainedError::Unauthorized);
        }
        let new_id = state.nfts.len() as u64;
        let nft = Nft {
            owner: to,
            approved: None,
            id: new_id,
            metadata,
            content: blob_content,
        };
        state.nfts.push(nft);
        Ok((state.next_txid(), new_id))
    })?;
    http::add_hash(tkid);
    Ok(MintResult {
        id: txid,
        token_id: tkid,
    })
}

// --------------
// burn interface
// --------------

#[update(name = "burnDip721")]
fn burn(token_id: u64) -> Result {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        let nft = state
            .nfts
            .get_mut(usize::try_from(token_id)?)
            .ok_or(Error::InvalidTokenId)?;
        if nft.owner != api::caller() {
            Err(Error::Unauthorized)
        } else {
            nft.owner = MGMT;
            Ok(state.next_txid())
        }
    })
}

#[derive(CandidType, Deserialize, Default)]
struct State {
    nfts: Vec<Nft>,
    custodians: HashSet<Principal>,
    operators: HashMap<Principal, HashSet<Principal>>, // owner to operators
    logo: Option<LogoResult>,
    name: String,
    symbol: String,
    txid: u128,
}

#[derive(CandidType, Deserialize)]
struct Nft {
    owner: Principal,
    approved: Option<Principal>,
    id: u64,
    metadata: MetadataDesc,
    content: Vec<u8>,
}

type MetadataDesc = Vec<MetadataPart>;
type MetadataDescRef<'a> = &'a [MetadataPart];

#[derive(CandidType, Deserialize)]
struct MetadataPart {
    purpose: MetadataPurpose,
    key_val_data: HashMap<String, MetadataVal>,
    data: Vec<u8>,
}

#[derive(CandidType, Deserialize, PartialEq)]
enum MetadataPurpose {
    Preview,
    Rendered,
}

#[derive(CandidType, Deserialize)]
struct MintResult {
    token_id: u64,
    id: u128,
}

#[allow(clippy::enum_variant_names)]
#[derive(CandidType, Deserialize)]
enum MetadataVal {
    TextContent(String),
    BlobContent(Vec<u8>),
    NatContent(u128),
    Nat8Content(u8),
    Nat16Content(u16),
    Nat32Content(u32),
    Nat64Content(u64),
}

impl State {
    fn next_txid(&mut self) -> u128 {
        let txid = self.txid;
        self.txid += 1;
        txid
    }
}

#[derive(CandidType, Deserialize)]
enum InterfaceId {
    Approval,
    TransactionHistory,
    Mint,
    Burn,
    TransferNotification,
}

#[derive(CandidType, Deserialize)]
enum ConstrainedError {
    Unauthorized,
}

#[update]
fn set_name(name: String) -> Result<()> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.custodians.contains(&api::caller()) {
            state.name = name;
            Ok(())
        } else {
            Err(Error::Unauthorized)
        }
    })
}

#[update]
fn set_symbol(sym: String) -> Result<()> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.custodians.contains(&api::caller()) {
            state.symbol = sym;
            Ok(())
        } else {
            Err(Error::Unauthorized)
        }
    })
}

#[update]
fn set_logo(logo: Option<LogoResult>) -> Result<()> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.custodians.contains(&api::caller()) {
            state.logo = logo;
            Ok(())
        } else {
            Err(Error::Unauthorized)
        }
    })
}

#[update]
fn set_custodian(user: Principal, custodian: bool) -> Result<()> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.custodians.contains(&api::caller()) {
            if custodian {
                state.custodians.insert(user);
            } else {
                state.custodians.remove(&user);
            }
            Ok(())
        } else {
            Err(Error::Unauthorized)
        }
    })
}


#[query]
fn is_custodian(principal: Principal) -> bool {
    STATE.with(|state| state.borrow().custodians.contains(&principal))
}
/// This makes this Candid service self-describing, so that for example Candid UI, but also other
/// tools, can seamlessly integrate with it. The concrete interface (method name etc.) is
/// provisional, but works.
/// 
/// without this I couldn't open the web interface of the canister to test it quickly
#[query]
fn __get_candid_interface_tmp_hack() -> String {
    include_str!("../playing_cards.did").to_string()
}

// ----------------------
// retrieve all NFTs
// ----------------------
/// #[query(name = "listAllNftIdsAndOwners")]
#[query(name = "listAllNftsFull")]
fn list_all_nfts_full() -> Vec<Nft> {
    STATE.with(|state| {
        state.borrow().nfts.clone()
    })
}

// ----------------------
// Thread-local Storage for NFT Sales Information
// ----------------------

// This utilizes Rust's thread-local storage capabilities to safely store and manage sales information
// for each NFT, ensuring thread safety and avoiding the use of unsafe code patterns.
thread_local! {
    static SALES: RefCell<HashMap<u64, SaleInfo>> = RefCell::new(HashMap::new());
}

// ----------------------
// Struct Definitions for NFT Sales and Bids
// ----------------------

// SaleInfo struct holds details about an NFT sale, including the price, the seller, and any bids made.
#[derive(Clone, Debug, CandidType, Deserialize)]
struct SaleInfo {
    price: u64,
    seller: Principal,
    bids: Vec<Bid>,
}

// Bid struct captures information about a bid on an NFT, including the bidder and the amount bid.
#[derive(Clone, Debug, CandidType, Deserialize)]
struct Bid {
    bidder: Principal,
    amount: u64,
}

// ----------------------
// NFT Sale Management Functions
// ----------------------

// Put an NFT up for sale with a specified price.
// Validates the ownership before allowing the sale.
#[update(name = "putForSale")]
fn put_for_sale(token_id: u64, price: u64) -> Result<(), SaleError> {
    let caller = api::caller();
    match owner_of(token_id) {
        Ok(owner) if owner == caller => {
            SALES.with(|sales| {
                sales.borrow_mut().insert(token_id, SaleInfo {
                    price,
                    seller: caller,
                    bids: Vec::new(),
                });
            });
            Ok(())
        },
        Ok(_) => Err(SaleError::Unauthorized),
        Err(e) => Err(SaleError::InvalidTokenId),
    }
}

// Remove an NFT from sale, ensuring that only the owner can perform this action.
#[update(name = "removeFromSale")]
fn remove_from_sale(token_id: u64) -> Result<(), String> {
    let caller = api::caller();
    match owner_of(token_id) {
        Ok(owner) if owner == caller => {
            SALES.with(|sales| {
                sales.borrow_mut().remove(&token_id);
            });
            Ok(())
        },
        Ok(_) => Err("Caller is not the owner".to_string()),
        Err(_) => Err("Invalid token ID or owner lookup failed".to_string()),
    }
}

// Allow a user to buy an NFT if it is for sale and they have enough balance.
// Handles balance transfer between buyer and seller.
#[update(name = "buyNFT")]
fn buy_nft(token_id: u64) -> Result<(), String> {
    let caller = api::caller();
    SALES.with(|sales| {
        // Check if the NFT is for sale
        if let Some(sale_info) = sales.borrow_mut().get_mut(&token_id) {
            // Check if the buyer has enough balance to make the purchase
            if let Some(balance) = balance_of_exe(caller) {
                // If the buyer has enough balance, transfer the NFT to the buyer and the sale amount to the seller
                if balance >= sale_info.price {
                    // Transfer the NFT to the buyer if match result is Ok
                    let transfer_result = safe_transfer_from(sale_info.seller, caller, token_id);
                    match transfer_result {
                        Ok(_) => {
                            deduct_balance_exe(caller, sale_info.price);
                            add_balance_exe(sale_info.seller, sale_info.price);
                            sales.borrow_mut().remove(&token_id);
                            Ok(())
                        },
                        Err(e) => Err(format!("Transfer failed: {}", e)),
                    }
                } else {
                    Err("Insufficient balance".to_string())
                }
            } else {
                Err("Failed to retrieve buyer's balance".to_string())
            }
        } else {
            Err("NFT not for sale".to_string())
        }
    })
}

// Enable users to place bids on NFTs that are for sale.
// Also makes sure that the bidder has enough balance to place the bid.
// Also checks if he didn't place a bid already, if he did, returns an error stating: "Bidder has already placed a bid"
#[update(name = "placeBid")]
fn place_bid(token_id: u64, bid_amount: u64) -> Result<(), String> {
    let caller = api::caller();
    SALES.with(|sales| {
        // Check if the NFT is for sale
        if let Some(sale_info) = sales.borrow_mut().get_mut(&token_id) {
            // Check if the bidder has enough balance to make the bid
            if let Some(balance) = balance_of_exe(caller) {
                // If the bidder has enough balance, place the bid
                if balance >= bid_amount {
                    // Check if the bidder has already placed a bid
                    if sale_info.bids.iter().any(|bid| bid.bidder == caller) {
                        return Err("Bidder has already placed a bid".to_string());
                    }
                    // If the bidder has not placed a bid, place the bid
                    sale_info.bids.push(Bid { bidder: caller, amount: bid_amount });
                    Ok(())
                } else {
                    Err("Insufficient balance".to_string())
                }
            } else {
                Err("Failed to retrieve bidder's balance".to_string())
            }
        } else {
            Err("NFT not for sale".to_string())
        }
    })
}


// Allow users to remove their bids on NFTs that are for sale
// to make this safer it is possible to remove the Ok within the if let
// since then it would remove all bids (that match user auth ofc), if user some how manages to place more than one bid (naughty user)
// but I don't see that as possible, may a bug arises that causes that scenario, entertain the idea of removing the Ok within the if let
// and just check each bid if it matches the user and remove it
#[update(name = "removeBid")]
fn remove_bid(token_id: u64) -> Result<(), String> {
    let caller = api::caller();
    SALES.with(|sales| {
        // Check if the NFT is for sale
        if let Some(sale_info) = sales.borrow_mut().get_mut(&token_id) {
            // Check if the bidder has placed a bid
            if let Some(bid_index) = sale_info.bids.iter().position(|bid| bid.bidder == caller) {
                // If the bidder has placed a bid, remove it
                sale_info.bids.remove(bid_index);
                Ok(())
            } else {
                Err("Bidder has not placed a bid".to_string())
            }
        } else {
            Err("NFT not for sale".to_string())
        }
    })
}

// Retrieve a list of all NFTs currently for sale along with their sale information.
#[query(name = "getTokensForSale")]
fn get_tokens_for_sale() -> Vec<(u64, SaleInfo)> {
    SALES.with(|sales| {
        sales.borrow().iter().map(|(token_id, sale_info)| (*token_id, sale_info.clone())).collect()
    })
}

// functions for interacting with EXE token

fn balance_of_exe(user: Principal) -> Option<u64> {
    // TODO
    unimplemented!()
}

fn deduct_balance_exe(user: Principal, amount: u64) {
    // TODO
    unimplemented!()
}

fn add_balance_exe(user: Principal, amount: u64) {
    // TODO
    unimplemented!()
}