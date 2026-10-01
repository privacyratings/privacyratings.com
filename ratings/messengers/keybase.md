---
name: Keybase
description: End-to-end encrypted chat, group chat and file sharing tied to public-key identity proofs. Owned by Zoom since its acquisition, with little ongoing development.
website: https://keybase.io
imported_from: awesome-privacy
source: https://github.com/keybase/client
jurisdiction: US
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/keybase/client/blob/master/LICENSE
    note: Client apps are BSD-3-Clause; the server is closed source.
  no_trackers:
    answer: partial
    evidence: https://keybase.io/docs/privacypolicy
    note: No third-party analytics are listed, but the service collects device and operating system analytics data with no documented opt-out.
  no_ads:
    answer: yes
    evidence: https://keybase.io/docs/privacypolicy
    note: The privacy policy states Keybase will never run ads or sell user data.
  independent_audit:
    answer: partial
    evidence: https://keybase.io/docs-assets/blog/NCC_Group_Keybase_KB2018_Public_Report_2019-02-27_v1.3.pdf
    note: A full NCC Group report is public but is older than three years.
  e2ee_default:
    answer: yes
    evidence: https://book.keybase.io/docs/chat/crypto
    note: All chats and team chats are end-to-end encrypted with per-device keys.
  no_phone_number:
    answer: yes
    evidence: https://keybase.io/docs/privacypolicy
    note: The privacy policy states Keybase never requires a phone number or an email address.
  metadata_protection:
    answer: no
    note: The central server sees which accounts and teams exchange messages.
  decentralized:
    answer: no
    note: One central service run by Keybase; the server is not published for self-hosting.
imported_name: KeyBase
---
