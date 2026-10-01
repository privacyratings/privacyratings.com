---
name: GOG Galaxy
description: GOG's optional desktop client for installing and updating DRM-free games bought on GOG.com, with cloud saves, achievements and integrations that combine game libraries from other platforms.
website: https://www.gog.com/galaxy
jurisdiction: PL
platforms:
  - windows
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source. Only the platform integrations API is published.
  no_trackers:
    answer: no
    evidence: https://support.gog.com/hc/en-us/articles/212632109-Privacy-Policy
    note: The website loads Google Tag Manager (automated test), and the privacy policy lists third-party analytics and error tracking providers. GOG GALAXY collects activity and play time data.
  no_ads:
    answer: no
    evidence: https://support.gog.com/hc/en-us/articles/212632109-Privacy-Policy
    note: Funded by game sales, but the privacy policy lists advertising and advertising measurement partners among the third parties that receive user data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
