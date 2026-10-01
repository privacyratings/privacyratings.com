---
name: Vanadium
description: Hardened Chromium-based browser and system WebView from GrapheneOS, with JIT disabled by default, built-in content filtering and remote services removed. Only available on GrapheneOS.
website: https://grapheneos.org/features#vanadium
source: https://github.com/GrapheneOS/Vanadium
jurisdiction: CA
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GrapheneOS/Vanadium/blob/main/LICENSE
    note: Patches are GPL-2.0, on top of the BSD-licensed Chromium code.
  no_trackers:
    answer: yes
    evidence: https://grapheneos.org/features#vanadium
    note: Nearly all remote services are disabled or removed, and the browser only connects to GrapheneOS servers by default.
  no_ads:
    answer: yes
    evidence: https://grapheneos.org/donate
    note: Funded by donations to the non-profit GrapheneOS Foundation. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://grapheneos.org/features#vanadium
    note: Content filtering with EasyList and EasyPrivacy is on by default, and third-party cookies are blocked.
  fingerprinting_protection:
    answer: yes
    evidence: https://grapheneos.org/features#vanadium
    note: Standardizes the user agent, client hints and battery status by default, and aims for identical configuration across users.
  no_google_services:
    answer: yes
    evidence: https://grapheneos.org/features#vanadium
    note: Only connects to GrapheneOS servers by default, for component updates and optional DNS-over-HTTPS checks.
  security_updates:
    answer: yes
    evidence: https://github.com/GrapheneOS/Vanadium/tags
    note: New Chromium releases are usually tagged the same day or within a few days, and the GrapheneOS app repository installs updates automatically.
---
