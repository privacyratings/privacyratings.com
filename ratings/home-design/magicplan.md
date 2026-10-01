---
name: magicplan
description: Mobile floor plan app that creates plans by scanning rooms with a phone or tablet camera or LiDAR, with estimates, reports and photos for contractors, and a cloud web app for office work.
website: https://magicplan.app
domain: cloud.magicplan.app
jurisdiction: CA
platforms:
  - ios
  - android
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.sensopia.magicplan/latest/
    note: The Android app contains Google Firebase Analytics, Segment and Sentry, and the website uses Google Analytics, HubSpot and Facebook Custom Audiences.
  no_ads:
    answer: partial
    evidence: https://help.magicplan.app/privacy-web
    note: Funded by subscriptions with no ads in the app, but the website uses Facebook Custom Audiences and Google Tag Manager for ad targeting of its own product.
  independent_audit:
    answer: partial
    evidence: https://help.magicplan.app/data-privacy-information-security
    note: magicplan cites SOC 2 and ISO/IEC 27001 controls and external audits, but reports are only available through its trust center.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
