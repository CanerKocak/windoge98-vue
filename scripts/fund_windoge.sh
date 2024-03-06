#!/bin/bash

# Check if a receiving principal ID is passed as an argument
if [ $# -eq 0 ]; then
    echo "Error: No receiving principal ID provided."
    echo "Usage: $0 <receiving_principal_id>"
    exit 1
fi

# The first argument is the receiving principal ID
RECEIVING_PRINCIPAL="$1"

# Get the current principal
CURRENT_PRINCIPAL=$(dfx identity get-principal)
echo "Current Principal: $CURRENT_PRINCIPAL"

# Display the balance before the transfer
echo "Checking balance..."
dfx canister call windoge icrc1_balance_of "(record {owner = principal \"dgrgz-snxwk-qyair-vkgeu-kphha-kib2a-nzs3u-zvko4-2s3jj-cmax6-fqe\"; subaccount=null;})"

# Execute the transfer
echo "Transferring 100,000,000,000 tokens to: $RECEIVING_PRINCIPAL"
dfx canister call windoge icrc1_transfer "(record{
                    to= record {owner = principal \"$RECEIVING_PRINCIPAL\"; subaccount=null;};
                    amount = 100_000_000_000_000;
                })"

echo "Transfer complete."
