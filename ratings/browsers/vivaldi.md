---
name: Vivaldi
description: Chromium-based browser from Vivaldi Technologies with a customizable interface, built-in mail, calendar and feed reader, and optional tracker and ad blocking.
website: https://vivaldi.com
jurisdiction: NO
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://help.vivaldi.com/desktop/privacy/is-vivaldi-open-source/
    note: Changes to Chromium are published under a BSD license, but the user interface code is not under an open-source license.
  no_trackers:
    answer: no
    evidence: https://vivaldi.com/privacy/browser/
    note: The browser sends a daily message with a unique installation ID, version and screen resolution to count users, and no setting to turn it off is documented. The website uses Umami analytics.
  no_ads:
    answer: partial
    evidence: https://vivaldi.com/privacy/browser/
    note: Default bookmarks and search engines include revenue-sharing partners, which can be removed. No data is sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    evidence: https://vivaldi.com/features/ad-blocker/
    note: The ad blocker is off by default. Tracker blocking is a setting that the user chooses.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: no
    evidence: https://vivaldi.com/privacy/browser/
    note: Google Safe Browsing is used on desktop and Android and can only be turned off on desktop.
  security_updates:
    answer: yes
    evidence: https://vivaldi.com/blog/desktop/minor-update-six-8-2/
    note: Minor updates bring Chromium security fixes within days and install automatically on Windows and macOS.
---
