---
name: Signal
description: End-to-end encrypted messenger for text, voice and video calls, and groups, built on the Signal Protocol. Run by the non-profit Signal Foundation.
website: https://signal.org
jurisdiction: US
source: https://github.com/signalapp/Signal-Server
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/signalapp/Signal-Server/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.thoughtcrime.securesms/latest/
    note: Exodus finds no trackers in the Android app, and the privacy policy lists no analytics.
  no_ads:
    answer: yes
    evidence: https://signal.org/donate/
    note: Funded by donations to the non-profit Signal Foundation; the terms state it never sells or monetizes personal data.
  independent_audit:
    answer: no
    note: No independent audit is published; only academic analyses of the Signal Protocol exist.
  e2ee_default:
    answer: yes
    evidence: https://signal.org/docs/
    note: All messages and calls, including groups, use the Signal Protocol end to end.
  no_phone_number:
    answer: partial
    evidence: https://support.signal.org/hc/en-us/articles/6712070553754-Phone-Number-Privacy-and-Usernames
    note: A phone number is required to register, but it is hidden by default and contacts can be reached by username.
  metadata_protection:
    answer: yes
    evidence: https://signal.org/blog/sealed-sender/
    note: Sealed sender hides the sender from the server, and contact discovery runs in secure enclaves.
  decentralized:
    answer: no
    note: One central service; the published server code cannot federate with the Signal network.
imported_from: awesome-privacy
---
