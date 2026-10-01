---
name: Adblock Plus
description: Ad blocker from eyeo for browsers and mobile, which shows ads approved under the Acceptable Ads program by default.
website: https://adblockplus.org
mainstream: true
source: https://gitlab.com/eyeo/browser-extensions-and-premium/extensions/extensions
jurisdiction: DE
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
    note: The browser extension is GPL-3.0, but some versions such as the iOS Safari app are proprietary.
  no_trackers:
    answer: no
    evidence: https://adblockplus.org/privacy
    note: The website uses Google Analytics and Google Tag Manager for visitors outside the EU, and the mobile apps use crash reporting and event tracking.
  no_ads:
    answer: no
    evidence: https://adblockplus.org/about
    note: Shows Acceptable Ads by default, and large platforms pay a licensing fee to take part.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: no
    evidence: https://adblockplus.org/acceptable-ads
    note: Acceptable Ads are allowed by default, including ads from companies that pay a licensing fee.
  no_data_collection:
    answer: partial
    evidence: https://adblockplus.org/privacy
    note: Filtering happens on the device, but filter list downloads send the extension version, browser, operating system and active lists. Mobile event tracking can be turned off.
  custom_filters:
    answer: yes
    evidence: https://help.adblockplus.org/adblock-plus-help-center/how-to-write-filters
    note: Supports custom filter lists and user filters.
---
