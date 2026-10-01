---
name: DuckDuckGo Browser
description: Browser from DuckDuckGo that uses the system web engine, blocks third-party trackers, and includes a one-tap Fire Button for clearing data, email protection and DuckDuckGo search by default.
website: https://duckduckgo.com/app
source: https://github.com/duckduckgo/Android
jurisdiction: US
platforms:
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/duckduckgo/Android/blob/develop/LICENSE
    note: The Android, iOS and macOS apps are Apache-2.0. The Windows app is closed source.
  no_trackers:
    answer: partial
    evidence: https://duckduckgo.com/duckduckgo-help-pages/privacy/atb
    note: The Android app has 0 trackers in Exodus. The apps send anonymous usage pixels without identifiers by default.
  no_ads:
    answer: partial
    evidence: https://duckduckgo.com/privacy
    note: The browser has no ads, but the default DuckDuckGo search shows ads based on the search query, not the user. No data is sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections
    note: Third-party tracker scripts on its block list are blocked by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://duckduckgo.com/duckduckgo-help-pages/privacy/web-tracking-protections
    note: Fingerprinting scripts are blocked and browser APIs used for fingerprinting are overridden by default.
  no_google_services:
    answer: yes
    evidence: https://duckduckgo.com/duckduckgo-help-pages/threat-protection/scam-blocker
    note: Uses its own malicious-site list instead of Google Safe Browsing, with no data sent to third parties.
  security_updates:
    answer: yes
    evidence: https://github.com/duckduckgo/apple-browsers
    note: Uses the operating system's web engine (WebKit, WebView2 or Android System WebView), which receives security fixes through automatic system updates.
---
