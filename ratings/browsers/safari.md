---
name: Safari
description: >-
  Apple's browser for macOS and iOS, built on the open-source WebKit engine.
website: https://www.apple.com/safari/
family: apple
mainstream: true
jurisdiction: US
source: https://github.com/WebKit/WebKit
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/WebKit/WebKit
    note: The WebKit engine is open source. Safari itself is not.
  tracker_blocking:
    answer: partial
    evidence: https://webkit.org/tracking-prevention/
    note: Intelligent Tracking Prevention limits cross-site tracking by default but does not block tracker requests.
  no_trackers:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/device-analytics/
    note: No third-party trackers in the app, and sharing device analytics with Apple is opt-in. Apple web pages load Apple's own analytics (ac-analytics, sent to metrics.apple.com) by default.
  no_ads:
    answer: yes
    evidence: https://www.apple.com/legal/privacy/en-ww/
    note: No ads in the browser. Apple states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  fingerprinting_protection:
    answer: yes
    evidence: https://webkit.org/tracking-prevention/
    note: Standardizes fingerprinting data by default, such as limiting fonts to system and web fonts and freezing the user agent string.
  no_google_services:
    answer: partial
    evidence: https://www.apple.com/legal/privacy/data/en/safari/
    note: Fraudulent Website Warning sends data to Google Safe Browsing and Apple, and can be turned off. Safari is built into Apple's operating systems and services.
  security_updates:
    answer: yes
    evidence: https://support.apple.com/en-us/100100
    note: Security fixes ship in Apple software updates, which can install automatically.
---
