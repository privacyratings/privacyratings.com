---
name: Floorp
description: Firefox-based browser from Japan with workspaces, split view, web panels, mouse gestures and a customizable interface. Mozilla telemetry is off by default.
website: https://floorp.app
source: https://github.com/Floorp-Projects/Floorp
jurisdiction: JP
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Floorp-Projects/Floorp/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: no
    evidence: https://floorp.app/privacy
    note: The website and blog use Google AdSense, which sets advertising cookies. Mozilla telemetry is off in the browser.
  no_ads:
    answer: no
    evidence: https://floorp.app/privacy
    note: The website and blog carry Google AdSense ads, including personalized ads, and the new tab page can show sponsored links.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
    note: Uses Firefox Enhanced Tracking Protection in Standard mode, which blocks social trackers and cross-site cookies but not all tracking content.
  fingerprinting_protection:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting
    note: Known fingerprinters are blocked, but fingerprinting data is only altered in Strict mode or private windows.
  no_google_services:
    answer: partial
    evidence: https://floorp.app/privacy
    note: Missing shortcut and web panel icons are fetched from Google's favicon service, and Firefox's Google Safe Browsing lists are downloaded by default.
  security_updates:
    answer: yes
    evidence: https://blog.floorp.app/categories/release/
    note: Releases move to each new Firefox version within days, and the browser updates itself.
---
