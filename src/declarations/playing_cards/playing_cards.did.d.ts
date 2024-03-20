import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Bid { 'amount' : bigint, 'bidder' : Principal }
export type ConstrainedError = { 'Unauthorized' : null };
export type Error = { 'InsufficientPrepaidBalance' : null } |
  { 'NFTNotForSale' : null } |
  { 'BidderAlreadyPlacedBid' : null } |
  { 'BidderHasNotPlacedBid' : null } |
  { 'ZeroAddress' : null } |
  { 'BalanceRetrievalFailed' : null } |
  { 'InsufficientBalance' : null } |
  { 'InvalidTokenId' : null } |
  { 'Unauthorized' : null } |
  { 'Other' : null } |
  { 'TransferFailed' : string } |
  { 'PrepaidBalanceRetrievalFailed' : null };
export interface InitArgs {
  'logo' : [] | [LogoResult],
  'name' : string,
  'custodians' : [] | [Array<Principal>],
  'symbol' : string,
}
export type InterfaceId = { 'Burn' : null } |
  { 'Mint' : null } |
  { 'Approval' : null } |
  { 'TransactionHistory' : null } |
  { 'TransferNotification' : null };
export interface LogoResult { 'data' : string, 'logo_type' : string }
export interface MetadataPart {
  'data' : Uint8Array | number[],
  'key_val_data' : Array<[string, MetadataVal]>,
  'purpose' : MetadataPurpose,
}
export type MetadataPurpose = { 'Preview' : null } |
  { 'Rendered' : null };
export type MetadataVal = { 'Nat64Content' : bigint } |
  { 'Nat32Content' : number } |
  { 'Nat8Content' : number } |
  { 'NatContent' : bigint } |
  { 'Nat16Content' : number } |
  { 'BlobContent' : Uint8Array | number[] } |
  { 'TextContent' : string };
export interface MintResult { 'id' : bigint, 'token_id' : bigint }
export interface Nft {
  'id' : bigint,
  'content' : Uint8Array | number[],
  'owner' : Principal,
  'metadata' : Array<MetadataPart>,
  'approved' : [] | [Principal],
}
export type Result = { 'Ok' : null } |
  { 'Err' : Error };
export type Result_1 = { 'Ok' : bigint } |
  { 'Err' : Error };
export type Result_2 = { 'Ok' : MintResult } |
  { 'Err' : ConstrainedError };
export type Result_3 = { 'Ok' : Principal } |
  { 'Err' : Error };
export interface SaleInfo {
  'bids' : Array<Bid>,
  'seller' : Principal,
  'price' : bigint,
}
export interface _SERVICE {
  '__get_candid_interface_tmp_hack' : ActorMethod<[], string>,
  'acceptBid' : ActorMethod<[bigint, Principal], Result>,
  'approveDip721' : ActorMethod<[Principal, bigint], Result_1>,
  'balanceOfDip721' : ActorMethod<[Principal], bigint>,
  'burnDip721' : ActorMethod<[bigint], Result_1>,
  'buyNFT' : ActorMethod<[bigint], Result>,
  'deposit' : ActorMethod<[bigint], Result>,
  'getBidsByBidder' : ActorMethod<[Principal], Array<[bigint, Bid]>>,
  'getBidsByNFT' : ActorMethod<[bigint], [] | [Array<Bid>]>,
  'getSaleInfo' : ActorMethod<[bigint], [] | [SaleInfo]>,
  'getTokensForSale' : ActorMethod<[], Array<[bigint, SaleInfo]>>,
  'isApprovedForAllDip721' : ActorMethod<[Principal], boolean>,
  'is_custodian' : ActorMethod<[Principal], boolean>,
  'listAllNftsFull' : ActorMethod<[], Array<Nft>>,
  'mintDip721' : ActorMethod<
    [Principal, Array<MetadataPart>, Uint8Array | number[]],
    Result_2
  >,
  'nameDip721' : ActorMethod<[], string>,
  'ownerOfDip721' : ActorMethod<[bigint], Result_3>,
  'placeBid' : ActorMethod<[bigint, bigint], Result>,
  'putForSale' : ActorMethod<[bigint, bigint], Result>,
  'removeBid' : ActorMethod<[bigint, Principal], Result>,
  'removeFromSale' : ActorMethod<[bigint], Result>,
  'safeTransferFromDip721' : ActorMethod<
    [Principal, Principal, bigint],
    Result_1
  >,
  'safeTransferFromNotifyDip721' : ActorMethod<
    [Principal, Principal, bigint, Uint8Array | number[]],
    Result_1
  >,
  'setApprovalForAllDip721' : ActorMethod<[Principal, boolean], Result_1>,
  'set_custodian' : ActorMethod<[Principal, boolean], Result>,
  'set_logo' : ActorMethod<[[] | [LogoResult]], Result>,
  'set_name' : ActorMethod<[string], Result>,
  'set_symbol' : ActorMethod<[string], Result>,
  'supportedInterfacesDip721' : ActorMethod<[], Array<InterfaceId>>,
  'symbolDip721' : ActorMethod<[], string>,
  'totalSupplyDip721' : ActorMethod<[], bigint>,
  'transferFromDip721' : ActorMethod<[Principal, Principal, bigint], Result_1>,
  'transferFromNotifyDip721' : ActorMethod<
    [Principal, Principal, bigint, Uint8Array | number[]],
    Result_1
  >,
  'updateSalePrice' : ActorMethod<[bigint, bigint], Result>,
  'withdraw' : ActorMethod<[bigint], Result>,
  'withdrawBid' : ActorMethod<[bigint], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
