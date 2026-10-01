---
name: NetNewsWire
description: Free, open source RSS and Atom feed reader for Mac, iPhone and iPad, with sync through iCloud or services such as Feedbin, Feedly and FreshRSS.
website: https://netnewswire.com
source: https://github.com/Ranchero-Software/NetNewsWire
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Ranchero-Software/NetNewsWire/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://netnewswire.com/privacypolicy.html
    note: Crash logs are sent only when users opt in, and the website uses only its own server logs.
  no_ads:
    answer: yes
    evidence: https://github.com/Ranchero-Software/NetNewsWire/blob/main/Technotes/HowToSupportNetNewsWire.markdown
    note: Free volunteer project with no ads, paid tiers or donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
