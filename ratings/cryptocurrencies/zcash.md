---
name: Zcash
description: Cryptocurrency that uses zero-knowledge proofs to offer shielded transactions, which hide the sender, receiver and amount. Transparent transactions are also supported, so privacy depends on using shielded addresses.
website: https://z.cash
source: https://github.com/ZcashFoundation/zebra
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ZcashFoundation/zebra/blob/main/LICENSE-APACHE
    note: MIT and Apache-2.0. Zebra is the main node implementation after zcashd reached end of life.
  no_trackers:
    answer: no
    evidence: https://z.cash/privacy-policy/
    note: The z.cash cookie settings list Google Analytics and Google Tag Manager as essential cookies that cannot be switched off.
  no_ads:
    answer: yes
    evidence: https://z.cash/privacy-policy/
    note: The privacy policy states personal data is not sold or used for targeted advertising. Development is funded by a protocol development fund and donations.
  independent_audit:
    answer: yes
    evidence: https://leastauthority.com/wp-content/uploads/2025/11/ZCG-Zebra-NU6.1-Network-Upgrade-Final-Audit-Report.pdf
    note: Least Authority published a full audit of the Zebra node's NU6.1 network upgrade changes.
jurisdiction: US
imported_name: ZCash
---
