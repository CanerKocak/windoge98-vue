#!/bin/bash

# Check if DFX is running and stop it to ensure a clean start
if dfx ping; then
  echo "Stopping running DFX network..."
  dfx stop
fi

echo "Starting DFX network in the background..."
dfx start --background

echo "Pulling and deploying dependencies..."
dfx deps pull && dfx deps init --argument '(null)' internet_identity
dfx deps deploy

# Fetch the current user's principal
CURRENT_PRINCIPAL=$(dfx identity get-principal)
echo "Current Principal: $CURRENT_PRINCIPAL"

dfx deploy windoge --argument "(variant {Init = 
  record {
       token_symbol = \"gdf\";
       token_name = \"ghjhghj\";
       minting_account = record { owner = principal \"$CURRENT_PRINCIPAL\" };
       transfer_fee = 10_000;
       metadata = vec {};
       feature_flags = opt record{icrc2 = true};
       initial_balances = vec { record { record { owner = principal \"$CURRENT_PRINCIPAL\"; }; 100_000_000_000; }; };
       archive_options = record {
           num_blocks_to_archive = 1000;
           trigger_threshold = 2000;
           controller_id = principal \"$CURRENT_PRINCIPAL\";
           cycles_for_archive_creation = opt 10_000_000_000_000;
       };
   }
  })" --specified-id rh2pm-ryaaa-aaaan-qeniq-cai # this is the id of the canister in production

dfx deploy

echo "Local development environment setup completed successfully."
echo "Deploying NFT canisters..."
echo "Current directory: $(pwd)"

cd ..
cd src
cd dip721-nft-container
echo "Current directory: $(pwd)"

dfx deploy playing_cards_nft --argument="(record {
    name = \"Playing Cards\";
    symbol = \"CARDS98\";
    logo = opt record {
        data = \"$(base64 -i ./logo.png)\";
        logo_type = \"image/png\";
    };
    custodians = opt vec { principal \"$CURRENT_PRINCIPAL\" };
    maxLimit = 52;
})"

dfx canister call playing_cards_nft mintDip721 \
    "(principal\"$CURRENT_PRINCIPAL\",vec{record{
        purpose=variant{Rendered};
        data=blob\"FIRSTCARD\";
        key_val_data=vec{
            record{
                \"contentType\";
                variant{TextContent=\"text/plain\"};
            };
            record{
                \"locationType\";
                variant{Nat8Content=4:nat8}
            };
        }
    }},blob\"hello\")"

dfx deploy dogesweeper_nft --argument="(record {
    name = \"DogeSweeper\";
    symbol = \"SWEEPER98\";
    logo = opt record {
        data = \"$(base64 -i ./logo.png)\";
        logo_type = \"image/png\";
    };
    custodians = opt vec { principal \"$CURRENT_PRINCIPAL\" };
    maxLimit = 256;
})"

# TODO ASSET CANISTER

echo "NFT canister deployed successfully."