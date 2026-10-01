---
name: Lantern
description: Censorship circumvention app and VPN that routes traffic through Lantern's proxy network with obfuscated protocols, offering a free tier and paid Pro plans.
website: https://lantern.io
source: https://github.com/getlantern/lantern
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
    evidence: https://github.com/getlantern/lantern/blob/main/LICENSE
    note: The apps are GPL-3.0, but store builds bundle proprietary advertising and crash reporting SDKs.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.getlantern.lantern/latest/
    note: The Android app contains Google AdMob and Sentry.
  no_ads:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.getlantern.lantern/latest/
    note: The Android app bundles the Google AdMob advertising SDK, though the privacy policy states data is not sold or shared with advertisers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
