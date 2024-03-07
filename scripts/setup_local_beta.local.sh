#!/bin/bash
# make sure latest dfx is installed, otherwise they legit drop features or something lmao
# dfxvm update, script is compatible with dfx 0.18.0 (7th march 2024)

# when it doesnt manage to deploy everything, u gotta remove rust /target in dip721-nft-container and all the .dfx/ folders in the root folder
# dfx --clean is not enough for some reason or it is and my machine is just acting up. run this script within scripts/ directory otherwise dfx & the scripts
# will be funny and start looking at paths from root and not work properly

# Check if DFX is running and stop it to ensure a clean start
if dfx ping; then
  echo "Stopping running DFX network..."
  dfx stop
fi

echo "Starting DFX network in the background..."
dfx start --background --clean

echo "Pulling and deploying dependencies..."
dfx deps pull
dfx deps init --argument '(null)' internet_identity
dfx deps deploy internet_identity
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

# echo "Current directory: $(pwd)"
# if [ ! -f "../src/nft_collections/playing_cards/playing_cards_args.did" ]; then
#   echo "File not found!"
#   echo "Creating playing_cards_args.did..."
#   cd ../src/nft_collections/playing_cards || exit
#   cargo build --target wasm32-unknown-unknown --release
#   LOGO_DATA=$(base64 -w 0 logo.png)
#   cat > playing_cards_args.did <<EOF
# (record {
#     "name" = "Playing Cards";
#     "symbol" = "CARDS98";
#     "logo" = (opt record {
#         "data" = "$LOGO_DATA";
#         "logo_type" = "image/png"
#     });
#     "custodians" = (opt vec { principal "$CURRENT_PRINCIPAL" });
#     "maxLimit" = 52;
# })
# EOF
#   echo "File created!"
# else
#   echo "File found!"
# fi

dfx deploy playing_cards --argument-file ../src/nft_collections/playing_cards/playing_cards_args.did

# final deploy
dfx deploy

# TODO ASSET CANISTER & LOGO's for the nft collections