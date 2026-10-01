---
name: AdBlock
description: Ad blocker for browsers and mobile, owned by eyeo, which shows ads approved under the Acceptable Ads program by default on desktop.
website: https://getadblock.com
source: https://gitlab.com/eyeo/browser-extensions-and-premium/extensions/extensions
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://gitlab.com/eyeo/browser-extensions-and-premium/extensions/extensions/-/blob/main/COPYING
    note: The browser extension is GPL-3.0, but the mobile apps are closed source.
  no_trackers:
    answer: no
    evidence: https://getadblock.com/en/privacy/
    note: The website loads Google Tag Manager, Google Analytics is used for the website, extensions and apps outside the EU, and the mobile apps use Firebase analytics.
  no_ads:
    answer: no
    evidence: https://helpcenter.getadblock.com/adblock-help-center/introduction-to-filter-lists
    note: Shows Acceptable Ads by default on desktop, a program in which large platforms pay eyeo a licensing fee.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: no
    evidence: https://helpcenter.getadblock.com/adblock-help-center/introduction-to-filter-lists
    note: Acceptable Ads are enabled by default in the Chrome, Edge and Firefox extensions.
  no_data_collection:
    answer: partial
    evidence: https://getadblock.com/en/privacy/
    note: Filtering happens on the device, but the extension sends anonymous usage information with a unique installation ID, such as counts of blocked ads.
  custom_filters:
    answer: yes
    evidence: https://helpcenter.getadblock.com/adblock-help-center/how-to-use-custom-filters
    note: Supports custom filters and additional filter lists.
---
