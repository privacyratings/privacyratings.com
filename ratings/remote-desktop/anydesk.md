---
name: AnyDesk
description: Proprietary remote desktop software that connects to computers and mobile devices through AnyDesk's servers using its DeskRT codec, free for personal use and paid for commercial use.
website: https://anydesk.com
mainstream: true
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://anydesk.com/en/privacy
    note: The website uses Google Analytics, Mixpanel, HubSpot, Meta Pixel and LinkedIn tracking, and the client sends usage and device data.
  no_ads:
    answer: partial
    evidence: https://anydesk.com/en/privacy
    note: Funded by paid licenses with no ads in the software; the privacy policy states personal data is not sold for money, though website cookie data is shared with ad partners.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
