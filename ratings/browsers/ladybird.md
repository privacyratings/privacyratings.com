---
name: Ladybird
description: Independent web browser with a new engine written from scratch, developed by a US non-profit. Still in development with no stable release; it can be built from source on Linux and macOS.
website: https://ladybird.org
source: https://github.com/LadybirdBrowser/ladybird
jurisdiction: US
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/LadybirdBrowser/ladybird/blob/master/LICENSE
    note: BSD-2-Clause.
  no_trackers:
    answer: yes
    evidence: https://ladybird.org/
    note: No data collection, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://ladybird.org/
    note: Funded by donations and sponsorships, with no search deals, data collection or ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    evidence: https://github.com/LadybirdBrowser/ladybird/blob/master/Libraries/LibWebView/Settings.cpp
    note: Content blocking with EasyList and EasyPrivacy is built in but the lists are off by default.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: yes
    evidence: https://ladybird.org/
    note: An independent engine with no Google, Microsoft or Apple services built in.
  security_updates:
    answer: n/a
    note: No releases are published yet. The browser is only available by building it from source.
---
