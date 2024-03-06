dfx deploy windoge --argument "(variant {Init = 
  record {
       token_symbol = \"gdf\";
       token_name = \"ghjhghj\";
       minting_account = record { owner = principal \"wkyux-oqo66-xewxc-5a6nd-uivqg-bhc3i-u65p7-c2dnz-bylmg-iwc4r-pqe\" };
       transfer_fee = 10_000;
       metadata = vec {};
       feature_flags = opt record{icrc2 = true};
       initial_balances = vec { record { record { owner = principal \"wkyux-oqo66-xewxc-5a6nd-uivqg-bhc3i-u65p7-c2dnz-bylmg-iwc4r-pqe\"; }; 100_000_000_000; }; };
       archive_options = record {
           num_blocks_to_archive = 1000;
           trigger_threshold = 2000;
           controller_id = principal \"wkyux-oqo66-xewxc-5a6nd-uivqg-bhc3i-u65p7-c2dnz-bylmg-iwc4r-pqe\";
           cycles_for_archive_creation = opt 10_000_000_000_000;
       };
   }
  })" --specified-id rh2pm-ryaaa-aaaan-qeniq-cai
