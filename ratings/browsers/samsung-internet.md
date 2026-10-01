---
name: Samsung Browser
description: Chromium-based browser from Samsung, formerly called Samsung Internet, preinstalled on Galaxy phones and tablets and also available for Windows. Includes Smart anti-tracking, Secret mode and ad-blocker add-ons.
website: https://browser.samsung.com
mainstream: true
aliases:
  - Samsung Internet
jurisdiction: KR
platforms:
  - android
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.samsung.com/us/account/privacy-policy/
    note: The Samsung privacy policy lists Google Analytics, Firebase Analytics and Adobe Analytics, and the product site loads Google Tag Manager.
  no_ads:
    answer: no
    evidence: https://www.samsung.com/us/account/privacy-policy/
    note: Samsung uses personal information for personalized advertising and shares it for targeted advertising, which the policy says may count as a sale.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: partial
    evidence: https://developer.samsung.com/browser/release-note.html
    note: Smart anti-tracking is on by default and limits third-party cookie access for known trackers. Ad blocking needs an add-on.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection is documented.
  no_google_services:
    answer: no
    note: Samsung does not document which Google services the browser contacts or how to turn them off.
  security_updates:
    answer: no
    evidence: https://developer.samsung.com/browser/release-note.html
    note: Releases are built on Chromium versions several releases behind Chrome, and the release notes do not list security fixes.
---
