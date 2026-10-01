---
name: Microsoft Edge
description: >-
  Microsoft's browser, built on Chromium and bundled with Windows.
website: https://www.microsoft.com/edge
family: microsoft
mainstream: true
jurisdiction: US
criteria:
  open_source:
    answer: partial
    evidence: https://chromium.googlesource.com/chromium/src
    note: Built on open-source Chromium, but Edge itself is closed source.
  tracker_blocking:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention
    note: Tracking prevention is on in Balanced mode by default, which blocks some trackers.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/legal/microsoft-edge/privacy
    note: Required diagnostic data is sent to Microsoft and cannot be turned off.
  no_ads:
    answer: no
    evidence: https://learn.microsoft.com/en-us/legal/microsoft-edge/privacy
    note: Shows ads and sponsored content on the New Tab page, and browsing activity can be used to personalize Microsoft ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  fingerprinting_protection:
    answer: no
    evidence: https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention
    note: Tracking prevention blocks some known fingerprinting scripts by list, but fingerprinting data is not randomized or standardized.
  no_google_services:
    answer: no
    evidence: https://learn.microsoft.com/en-us/legal/microsoft-edge/privacy
    note: Required diagnostic data and other Microsoft services are built in and cannot be fully turned off.
  security_updates:
    answer: yes
    evidence: https://learn.microsoft.com/en-us/deployedge/microsoft-edge-relnotes-security
    note: Chromium security fixes ship within days and install automatically.
---
