---
name: Google Chrome
description: >-
  Google's browser, built on the open-source Chromium project.
website: https://www.google.com/chrome/
mainstream: true
jurisdiction: US
source: https://chromium.googlesource.com/chromium/src
criteria:
  open_source:
    answer: partial
    evidence: https://chromium.googlesource.com/chromium/src
    note: Built on open-source Chromium, but Chrome adds closed-source components.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Made by an advertising company. Browsing data supports Google's ad business.
  no_google_services:
    answer: no
    note: Signs in to and syncs with Google services, and sends usage data to Google by default.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    note: Third-party trackers are not blocked by default.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection.
  security_updates:
    answer: yes
    evidence: https://chromereleases.googleblog.com/
    note: Security fixes ship in frequent stable updates that install automatically.
---
