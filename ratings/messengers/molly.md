---
name: Molly
description: Independent fork of the Signal Android app that connects to the Signal network and adds database encryption with a passphrase, UnifiedPush notifications and a Molly-FOSS build without proprietary Google components.
website: https://molly.im
source: https://github.com/mollyim/mollyim-android
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mollyim/mollyim-android/blob/main/LICENSE
    note: AGPL-3.0, and it uses the open-source Signal server.
  no_trackers:
    answer: yes
    evidence: https://github.com/mollyim/mollyim-android
    note: No trackers or analytics; the Molly-FOSS build also removes proprietary Google components such as FCM and Google Maps.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/mollyim
    note: Free software with no ads, funded by donations through Open Collective.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_default:
    answer: yes
    evidence: https://signal.org/docs/
    note: All messages and calls, including groups, use the Signal Protocol end to end.
  no_phone_number:
    answer: partial
    evidence: https://support.signal.org/hc/en-us/articles/6712070553754-Phone-Number-Privacy-and-Usernames
    note: A phone number is required to register a Signal account, but it is hidden by default and contacts can be reached by username.
  metadata_protection:
    answer: yes
    evidence: https://signal.org/blog/sealed-sender/
    note: Uses the Signal network, where sealed sender hides the sender from the server.
  decentralized:
    answer: no
    note: Connects to the central Signal service.
---
