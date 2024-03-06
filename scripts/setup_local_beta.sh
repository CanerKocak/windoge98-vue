#!/bin/bash

# this needs to be cleaned up but it works for now, kinda creates double since it deploys after it does create and deploy already builds/creates
# but its good its there since gives overview of what is being created and deployed sort of, and the deploy is like fail safe so everything is deployed

# script halts on the first error
set -e

# Check if DFX is running and stop it to ensure a clean start
if dfx ping; then
  echo "Stopping running DFX network..."
  dfx stop
fi

echo "Starting DFX network in the background..."
dfx start --background --clean

echo "Pulling and deploying dependencies..."
# Correctly handling pull dependencies
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

dfx canister create --all
dfx canister create dogvertiser
dfx canister create windoge_staging

dfx deps deploy
dfx deploy

# dynamic canister id generation so we can use it in the frontend by just digging in the json file
echo "Generating 'canister_ids.json'..."
echo "{" > canister_ids.json
echo "\"dogvertiser\": { \"ic\": \"$(dfx canister id dogvertiser)\" }," >> canister_ids.json
echo "\"windoge_staging\": { \"ic\": \"$(dfx canister id windoge_staging)\" }," >> canister_ids.json
echo "\"windoge\": { \"ic\": \"$(dfx canister id windoge)\" }" >> canister_ids.json

echo "}" >> canister_ids.json

echo "Local development environment setup completed successfully."