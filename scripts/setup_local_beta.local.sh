#!/bin/bash
# make sure latest dfx is installed, otherwise they legit drop features or something lmao
# dfxvm update, script is compatible with dfx 0.18.0 (7th march 2024)

# when it doesnt manage to deploy everything, u gotta remove rust /target in dip721-nft-container and all the .dfx/ folders in the root folder
# dfx --clean is not enough for some reason or it is and my machine is just acting up. run this script within scripts/ directory otherwise dfx & the scripts
# will be funny and start looking at paths from called pwd instead of scripts/ and not work properly

# Check if DFX is running and stop it to ensure a clean start
if dfx ping; then
  echo "Stopping running DFX network..."
  dfx stop
fi

echo "Starting DFX network in the background..."
dfx start --background --clean

# sometimes this causes issues, espescially with an already cached version being different hash or something
# if that occurs i just removed the .cache/dfinity/pulled/rdmx6-jaaaa-aaaaa-aaadq-cai/canister.wasm.gz
# so when sign in doesnt work i think removing it and redownloading it from deps pull should work
echo "Pulling and deploying dependencies..."
dfx deps pull
dfx deps init --argument '(null)' internet_identity
dfx deps deploy internet_identity
# dfx deps deploy

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


# since this deploy command for deploying it, Actually uses the "dfx create & dfx build" it should generate args file
# if not u should be able to generate it by running the scripts/canister_build_scripts/playing_cards/build.sh
dfx deploy playing_cards --argument-file ../src/nft_collections/playing_cards/playing_cards_args.did

# TODO ASSET CANISTER & LOGO's for the nft collections

# final deploy
# dfx deploy
