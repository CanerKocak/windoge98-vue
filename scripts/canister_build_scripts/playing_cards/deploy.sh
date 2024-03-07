# #!/bin/bash
# CURRENT_PRINCIPAL=$(dfx identity get-principal)
# echo "Current working directory: $(pwd)"
# cd ../src/nft_collections/playing_cards || exit

# # Generate the deployment arguments in Candid format
# cat > playing_cards_args.did <<EOF
# (record {
#     "name" = "Playing Cards";
#     "symbol" = "CARDS98";
#     "logo" = (opt record {
#         "data" = "$(base64 -w 0 logo.png)";
#         "logo_type" = "image/png"
#     });
#     "custodians" = (opt vec { principal "$CURRENT_PRINCIPAL" });
#     "maxLimit" = 52;
# })
# EOF

# dfx deploy playing_cards --argument-file=playing_cards_args.did
