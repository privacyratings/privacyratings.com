---
name: Amazon Alexa
description: Amazon's voice assistant and smart home platform for Echo speakers and displays, controlled through the Alexa app. Voice requests are sent to Amazon's cloud for processing.
website: https://www.amazon.com/alexa
aliases:
  - Echo
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
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.amazon.dee.app/latest/
    note: The Android app includes Amazon Analytics, Bugsnag and Google AdMob.
  no_ads:
    answer: no
    evidence: https://www.amazon.com/gp/help/customer/display.html?nodeId=GLVB9XDF9M8MU7UZ
    note: Amazon uses interactions with its services to show interest-based ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
