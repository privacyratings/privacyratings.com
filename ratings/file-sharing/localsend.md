---
name: LocalSend
description: Open source app for sending files and messages between nearby devices over the local network, without an internet connection or account.
website: https://localsend.org
source: https://github.com/localsend/localsend
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/localsend/localsend/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://localsend.org/privacy
    note: The privacy policy states the app does not collect any personal or non-personal data.
  no_ads:
    answer: yes
    evidence: https://localsend.org/donate
    note: Free software funded by donations through GitHub Sponsors and in-app donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
