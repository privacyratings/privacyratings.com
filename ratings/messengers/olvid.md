---
name: Olvid
description: End-to-end encrypted messenger from France that needs no phone number, email or other personal data; contacts are added by exchanging keys. Certified under the French ANSSI CSPN scheme.
website: https://www.olvid.io
jurisdiction: FR
source: https://github.com/olvid-io
platforms:
  - android
  - ios
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://olvid.io/faq/is-olvid-open-source/
    note: The apps and the message distribution server are AGPL-3.0; server code for paid enterprise features is left out.
  no_trackers:
    answer: yes
    evidence: https://www.olvid.io/privacy/en/
    note: The privacy policy states Olvid collects no personal data; Exodus only detects the OpenCensus library bundled with Google's API client, and Firebase Analytics is excluded from the build.
  no_ads:
    answer: yes
    evidence: https://www.olvid.io/pricing/en/
    note: Free for personal use and funded by paid licences, with no ads.
  independent_audit:
    answer: partial
    evidence: https://www.olvid.io/assets/documents/Synacktiv-Olvid-CSPN_Olvid-0.9.2-RTE-v1.2.pdf
    note: Synacktiv's full CSPN evaluation reports are public, but they are older than three years.
  e2ee_default:
    answer: yes
    evidence: https://www.olvid.io/technology/en/
    note: All messages, group discussions, calls and metadata are end-to-end encrypted.
  no_phone_number:
    answer: yes
    evidence: https://www.olvid.io/privacy/en/
    note: No phone number, email or other personal data is needed to create a profile.
  metadata_protection:
    answer: yes
    evidence: https://www.olvid.io/technology/en/
    note: Metadata is encrypted end to end and there is no user directory, so the server cannot identify who is talking.
  decentralized:
    answer: no
    note: One central service run by Olvid; the published server code does not federate.
---
