---
name: Firefox
description: Mozilla's open-source browser, built on its own Gecko engine rather than Chromium. Supports a wide range of extensions and extensive customization.
website: https://www.firefox.com
family: mozilla
source: https://github.com/mozilla-firefox/firefox
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mozilla-firefox/firefox/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: no
    evidence: https://www.mozilla.org/en-US/privacy/firefox/
    note: The home page loads Google Tag Manager (automated test), and the browser sends technical and interaction telemetry by default.
  no_ads:
    answer: no
    evidence: https://www.mozilla.org/en-US/privacy/firefox/
    note: Shows sponsored content on the New Tab page by default and shares de-identified data with advertising partners. Mainly funded by search engine deals.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
    note: Blocks social media trackers, cross-site tracking cookies, cryptominers and known fingerprinters by default, but tracking content only in private windows or Strict mode.
  fingerprinting_protection:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting
    note: Known fingerprinters are blocked by default, but fingerprinting data is only altered in private windows or Strict mode.
  no_google_services:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
    note: Google Safe Browsing lists are downloaded by default. The feature can be turned off.
  security_updates:
    answer: yes
    evidence: https://www.mozilla.org/en-US/security/advisories/
    note: Mozilla publishes security fixes with each release, and Firefox installs updates automatically.
imported_from: awesome-privacy
jurisdiction: US
---
