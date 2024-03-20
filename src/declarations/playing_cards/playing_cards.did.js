export const idlFactory = ({ IDL }) => {
  const LogoResult = IDL.Record({ 'data' : IDL.Text, 'logo_type' : IDL.Text });
  const InitArgs = IDL.Record({
    'logo' : IDL.Opt(LogoResult),
    'name' : IDL.Text,
    'custodians' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'symbol' : IDL.Text,
  });
  const Error = IDL.Variant({
    'InsufficientPrepaidBalance' : IDL.Null,
    'NFTNotForSale' : IDL.Null,
    'BidderAlreadyPlacedBid' : IDL.Null,
    'BidderHasNotPlacedBid' : IDL.Null,
    'ZeroAddress' : IDL.Null,
    'BalanceRetrievalFailed' : IDL.Null,
    'InsufficientBalance' : IDL.Null,
    'InvalidTokenId' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Null,
    'TransferFailed' : IDL.Text,
    'PrepaidBalanceRetrievalFailed' : IDL.Null,
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : Error });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : Error });
  const Bid = IDL.Record({ 'amount' : IDL.Nat64, 'bidder' : IDL.Principal });
  const SaleInfo = IDL.Record({
    'bids' : IDL.Vec(Bid),
    'seller' : IDL.Principal,
    'price' : IDL.Nat64,
  });
  const MetadataVal = IDL.Variant({
    'Nat64Content' : IDL.Nat64,
    'Nat32Content' : IDL.Nat32,
    'Nat8Content' : IDL.Nat8,
    'NatContent' : IDL.Nat,
    'Nat16Content' : IDL.Nat16,
    'BlobContent' : IDL.Vec(IDL.Nat8),
    'TextContent' : IDL.Text,
  });
  const MetadataPurpose = IDL.Variant({
    'Preview' : IDL.Null,
    'Rendered' : IDL.Null,
  });
  const MetadataPart = IDL.Record({
    'data' : IDL.Vec(IDL.Nat8),
    'key_val_data' : IDL.Vec(IDL.Tuple(IDL.Text, MetadataVal)),
    'purpose' : MetadataPurpose,
  });
  const Nft = IDL.Record({
    'id' : IDL.Nat64,
    'content' : IDL.Vec(IDL.Nat8),
    'owner' : IDL.Principal,
    'metadata' : IDL.Vec(MetadataPart),
    'approved' : IDL.Opt(IDL.Principal),
  });
  const MintResult = IDL.Record({ 'id' : IDL.Nat, 'token_id' : IDL.Nat64 });
  const ConstrainedError = IDL.Variant({ 'Unauthorized' : IDL.Null });
  const Result_2 = IDL.Variant({ 'Ok' : MintResult, 'Err' : ConstrainedError });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : Error });
  const InterfaceId = IDL.Variant({
    'Burn' : IDL.Null,
    'Mint' : IDL.Null,
    'Approval' : IDL.Null,
    'TransactionHistory' : IDL.Null,
    'TransferNotification' : IDL.Null,
  });
  return IDL.Service({
    '__get_candid_interface_tmp_hack' : IDL.Func([], [IDL.Text], ['query']),
    'acceptBid' : IDL.Func([IDL.Nat64, IDL.Principal], [Result], []),
    'approveDip721' : IDL.Func([IDL.Principal, IDL.Nat64], [Result_1], []),
    'balanceOfDip721' : IDL.Func([IDL.Principal], [IDL.Nat64], ['query']),
    'burnDip721' : IDL.Func([IDL.Nat64], [Result_1], []),
    'buyNFT' : IDL.Func([IDL.Nat64], [Result], []),
    'deposit' : IDL.Func([IDL.Nat64], [Result], []),
    'getBidsByBidder' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Tuple(IDL.Nat64, Bid))],
        ['query'],
      ),
    'getBidsByNFT' : IDL.Func([IDL.Nat64], [IDL.Opt(IDL.Vec(Bid))], ['query']),
    'getSaleInfo' : IDL.Func([IDL.Nat64], [IDL.Opt(SaleInfo)], ['query']),
    'getTokensForSale' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat64, SaleInfo))],
        ['query'],
      ),
    'isApprovedForAllDip721' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'is_custodian' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'listAllNftsFull' : IDL.Func([], [IDL.Vec(Nft)], ['query']),
    'mintDip721' : IDL.Func(
        [IDL.Principal, IDL.Vec(MetadataPart), IDL.Vec(IDL.Nat8)],
        [Result_2],
        [],
      ),
    'nameDip721' : IDL.Func([], [IDL.Text], ['query']),
    'ownerOfDip721' : IDL.Func([IDL.Nat64], [Result_3], ['query']),
    'placeBid' : IDL.Func([IDL.Nat64, IDL.Nat64], [Result], []),
    'putForSale' : IDL.Func([IDL.Nat64, IDL.Nat64], [Result], []),
    'removeBid' : IDL.Func([IDL.Nat64, IDL.Principal], [Result], []),
    'removeFromSale' : IDL.Func([IDL.Nat64], [Result], []),
    'safeTransferFromDip721' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat64],
        [Result_1],
        [],
      ),
    'safeTransferFromNotifyDip721' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat64, IDL.Vec(IDL.Nat8)],
        [Result_1],
        [],
      ),
    'setApprovalForAllDip721' : IDL.Func(
        [IDL.Principal, IDL.Bool],
        [Result_1],
        [],
      ),
    'set_custodian' : IDL.Func([IDL.Principal, IDL.Bool], [Result], []),
    'set_logo' : IDL.Func([IDL.Opt(LogoResult)], [Result], []),
    'set_name' : IDL.Func([IDL.Text], [Result], []),
    'set_symbol' : IDL.Func([IDL.Text], [Result], []),
    'supportedInterfacesDip721' : IDL.Func(
        [],
        [IDL.Vec(InterfaceId)],
        ['query'],
      ),
    'symbolDip721' : IDL.Func([], [IDL.Text], ['query']),
    'totalSupplyDip721' : IDL.Func([], [IDL.Nat64], ['query']),
    'transferFromDip721' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat64],
        [Result_1],
        [],
      ),
    'transferFromNotifyDip721' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat64, IDL.Vec(IDL.Nat8)],
        [Result_1],
        [],
      ),
    'updateSalePrice' : IDL.Func([IDL.Nat64, IDL.Nat64], [Result], []),
    'withdraw' : IDL.Func([IDL.Nat64], [Result], []),
    'withdrawBid' : IDL.Func([IDL.Nat64], [Result], []),
  });
};
export const init = ({ IDL }) => {
  const LogoResult = IDL.Record({ 'data' : IDL.Text, 'logo_type' : IDL.Text });
  const InitArgs = IDL.Record({
    'logo' : IDL.Opt(LogoResult),
    'name' : IDL.Text,
    'custodians' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'symbol' : IDL.Text,
  });
  return [InitArgs];
};
