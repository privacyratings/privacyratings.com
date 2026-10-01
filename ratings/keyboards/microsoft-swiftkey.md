---
name: Microsoft SwiftKey
description: Microsoft's keyboard app for Android and iOS, with learned word predictions, swipe typing, cloud backup through a Microsoft account, and built-in Copilot and Bing features.
website: https://www.microsoft.com/en-us/swiftkey
family: microsoft
aliases:
  - SwiftKey
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.touchtype.swiftkey/latest/
    note: Exodus found Adjust, Google Analytics, Google Crashlytics and Google Tag Manager in the Android app.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: The app bundles the Adjust ad attribution SDK, and Microsoft's privacy statement covers using data for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Has network access for built-in cloud features such as Copilot, Bing, GIF search and backup, and can send typing snippets to Microsoft when opted in.
---
