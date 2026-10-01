---
name: AdGuard
description: Ad and tracker blocker from AdGuard, available as a free browser extension and Safari content blocker and as paid system-wide apps for Windows, macOS, Android and iOS.
website: https://adguard.com
family: adguard
source: https://github.com/AdguardTeam/AdguardBrowserExtension
jurisdiction: CY
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/AdguardTeam/AdguardBrowserExtension/blob/master/LICENSE
    note: The browser extension is GPL-3.0, but the Windows, Mac and Android apps are closed source.
  no_trackers:
    answer: partial
    evidence: https://adguard.com/en/website-privacy.html
    note: The website uses first-party analytics with no third-party trackers. App telemetry is off by default.
  no_ads:
    answer: yes
    evidence: https://adguard.com/en/license.html
    note: Funded by paid licenses. The privacy policy says personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: yes
    evidence: https://adguard.com/kb/general/ad-filtering/search-ads/
    note: Blocks ads and trackers by default in the free extension. There is no paid allowlist; an optional filter can show search ads and self-promotion.
  no_data_collection:
    answer: partial
    evidence: https://adguard.com/en/privacy/browser-extension.html
    note: Filtering happens on the device. Phishing and malware protection sends hash prefixes of visited sites and can be turned off, and usage statistics are off by default.
  custom_filters:
    answer: yes
    evidence: https://adguard.com/kb/general/ad-filtering/create-own-filters/
    note: Supports custom filter lists and user rules.
---
