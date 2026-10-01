---
name: Firefox Focus
description: Private browser from Mozilla for Android and iOS that blocks trackers by default and erases history, cookies and passwords with one tap. Sold as Firefox Klar in some countries.
website: https://www.firefox.com/en-US/mobile/focus/
family: mozilla
source: https://github.com/mozilla-firefox/firefox/tree/main/mobile/android/focus-android
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mozilla-firefox/firefox/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.mozilla.focus/latest/
    note: Exodus finds Mozilla Telemetry and Sentry crash reporting in the Android app, and a daily usage ping is sent by default unless turned off.
  no_ads:
    answer: partial
    evidence: https://www.mozilla.org/en-US/privacy/firefox-focus/
    note: The app shows no ads, but Mozilla earns revenue from the default search engines, whose results pages carry ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://www.firefox.com/en-US/mobile/focus/
    note: Blocks a wide range of trackers by default, including advertising, analytics and social trackers.
  fingerprinting_protection:
    answer: no
    note: Blocks known fingerprinting scripts, but no randomization or standardization of fingerprinting data is documented.
  no_google_services:
    answer: partial
    evidence: https://www.mozilla.org/en-US/privacy/firefox-focus/
    note: Uses Google Safe Browsing, and Google is the default search engine, which can be changed.
  security_updates:
    answer: yes
    evidence: https://www.mozilla.org/en-US/security/advisories/
    note: Releases follow Firefox security releases and install automatically through the app stores.
---
