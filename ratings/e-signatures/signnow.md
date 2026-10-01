---
name: SignNow
description: Electronic signature service from airSlate, Inc. in the United States, for sending, signing and tracking documents, with an API for other apps.
website: https://www.signnow.com
domain: app.signnow.com
jurisdiction: US
platforms:
  - web
  - android
  - ios
aliases:
  - airSlate SignNow
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://legal.signnow.com/privacy-notice
    note: The privacy notice describes sharing personal information with advertising partners for cross-context behavioral advertising, and the website loads Google Tag Manager and Intercom.
  no_ads:
    answer: partial
    evidence: https://legal.signnow.com/privacy-notice
    note: Funded by subscriptions, and personal information is not sold, but it is shared with third-party advertising partners to target advertising, with an opt-out.
  independent_audit:
    answer: partial
    evidence: https://www.signnow.com/security
    note: SignNow has a SOC 2 Type II report, available on request.
  transparency_report:
    answer: no
    evidence: https://legal.signnow.com/privacy-notice
    note: No transparency report is published. The privacy notice only says information may be shared to respond to court orders, subpoenas or search warrants.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
