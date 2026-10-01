---
name: Zen Browser
description: Firefox-based desktop browser with vertical tabs, workspaces, split view and a compact interface. Mozilla telemetry is removed.
website: https://zen-browser.app
source: https://github.com/zen-browser/desktop
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/zen-browser/desktop/blob/dev/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://zen-browser.app/privacy-policy/
    note: Telemetry and crash reporting from Firefox are removed, and no third-party trackers are used.
  no_ads:
    answer: yes
    evidence: https://zen-browser.app/donate/
    note: Funded by donations. The privacy policy says data is not sold.
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
    evidence: https://zen-browser.app/privacy-policy/
    note: Firefox background connections, including Google Safe Browsing lists, remain and can be turned off in about:config.
  security_updates:
    answer: yes
    evidence: https://zen-browser.app/release-notes/
    note: Releases follow each Firefox release within days, and the browser updates itself.
---
