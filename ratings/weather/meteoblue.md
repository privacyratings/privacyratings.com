---
name: meteoblue
description: Swiss weather service with forecasts, meteograms, multi-model comparisons and weather maps on its website and apps.
website: https://www.meteoblue.com
jurisdiction: CH
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://content.meteoblue.com/en/about-us/legal/privacy
    note: The privacy policy lists Google Analytics, Crashlytics and Microsoft Clarity, and the Exodus report finds Google AdMob, Crashlytics and Firebase Analytics in the Android app.
  no_ads:
    answer: no
    evidence: https://content.meteoblue.com/en/about-us/legal/ad-providers
    note: The free website and apps show ads through Google Ad Manager and many third-party ad providers. An ad-free subscription is offered.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
