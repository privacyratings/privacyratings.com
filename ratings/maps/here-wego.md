---
name: HERE WeGo
description: Free maps and navigation app from HERE Technologies, with driving, transit and walking directions, offline maps and a web version.
website: https://wego.here.com
jurisdiction: NL
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.here.app.maps/latest/
    note: The Exodus report finds Facebook Login and Google Crashlytics, and the privacy supplement describes third-party analytics and advertising cookies and SDKs.
  no_ads:
    answer: no
    evidence: https://www.here.com/en-gb/privacy/here-wego-here-application-or-here-maps-privacy-supplement-updated
    note: The privacy supplement says collected data, including advertiser IDs, is used to serve and measure advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
