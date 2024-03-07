#!/bin/bash
cd src/nft_collections/playing_cards || exit
cargo build --target wasm32-unknown-unknown --release

CURRENT_PRINCIPAL=$(dfx identity get-principal)

# Prepare the base64 encoded logo data
LOGO_DATA=$(base64 -w 0 logo.png)

# Generate the deployment arguments in Candid format (will be used by to deploy)
cat > playing_cards_args.did <<EOF
(record {
    "name" = "Playing Cards";
    "symbol" = "CARDS98";
    "logo" = (opt record {
        "data" = "$LOGO_DATA";
        "logo_type" = "image/png"
    });
    "custodians" = (opt vec { principal "$CURRENT_PRINCIPAL" });
    "maxLimit" = 52;
})
EOF
