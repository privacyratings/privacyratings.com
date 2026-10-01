---
name: µTorrent
description: Proprietary BitTorrent client from BitTorrent, offered as a desktop client (Classic), a browser-based client (Web) and an Android app. The free versions show ads and paid plans remove them.
website: https://www.utorrent.com
aliases:
  - uTorrent
mainstream: true
platforms:
  - windows
  - macos
  - linux
  - android
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.bittorrent.com/legal/privacy-policy/
    note: The website loads Google Analytics and Google Tag Manager (automated test), and the privacy policy describes advertising cookies and third-party SDKs. The Android app contains 28 trackers per Exodus Privacy.
  no_ads:
    answer: no
    evidence: https://www.utorrent.com/desktop/compare/
    note: The free versions are ad-supported, and the privacy policy describes interest-based advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
