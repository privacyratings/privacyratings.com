---
name: Aurora Store
description: Open source Android client for the Google Play Store that downloads apps from Google's servers without Google Play Services. It can use a personal Google account or shared anonymous accounts.
website: https://auroraoss.com
source: https://gitlab.com/AuroraOSS/AuroraStore
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/AuroraOSS/AuroraStore/-/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://auroraoss.com/
    note: The app has no known trackers, but the website loads Google Analytics and Google AdSense.
  no_ads:
    answer: no
    evidence: https://auroraoss.com/
    note: The app has no ads, but the website loads Google AdSense.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: yes
    evidence: https://gitlab.com/AuroraOSS/AuroraStore/-/blob/master/README.md
    note: Apps can be installed with a shared anonymous account instead of a personal Google account.
  tracker_info:
    answer: yes
    evidence: https://gitlab.com/AuroraOSS/AuroraStore/-/blob/master/README.md
    note: App pages show the trackers found by Exodus Privacy.
---
