---
name: Ghostery
description: Browser extension from Ghostery that blocks ads, trackers and cookie pop-ups and shows which trackers each site uses.
website: https://www.ghostery.com
source: https://github.com/ghostery/ghostery-extension
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ghostery/ghostery-extension/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://www.ghostery.com/privacy/policy
    note: The extension sends a daily non-personal installation ping by default. No third-party trackers.
  no_ads:
    answer: partial
    evidence: https://www.ghostery.com/ghostery-manifesto
    note: Funded by donations plus non-targeted sponsored links and search engine revenue sharing in Ghostery Private Search.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: yes
    evidence: https://www.ghostery.com/ghostery-ad-blocker
    note: Blocks ads, trackers and cookie pop-ups by default, for free.
  no_data_collection:
    answer: partial
    evidence: https://www.ghostery.com/privacy/policy
    note: Filtering happens on the device, but a daily installation ping and anonymous tracker observations for WhoTracks.me are sent by default.
  custom_filters:
    answer: yes
    evidence: https://github.com/ghostery/ghostery-extension/tree/main/src/background/custom-filters
    note: Supports custom filter rules in the settings.
---
