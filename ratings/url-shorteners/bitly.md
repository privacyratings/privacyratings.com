---
name: Bitly
description: Link management platform for creating short links, QR codes and landing pages, with click analytics and branded domains.
website: https://bitly.com
mainstream: true
domain: bitly.com
jurisdiction: US
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
    evidence: https://bitly.com/pages/privacy
    note: The website loads Google Tag Manager and Optimizely, and the privacy policy describes tracking pixels and third-party analytics providers.
  no_ads:
    answer: no
    evidence: https://bitly.com/pages/privacy
    note: Link destination previews may include third-party advertising, and mobile advertising identifiers are collected.
  independent_audit:
    answer: partial
    evidence: https://bitly.com/pages/trust
    note: Bitly states it is SOC 2 Type 2 compliant, but the report is not public.
  transparency_report:
    answer: yes
    evidence: https://bitly.com/pages/transparency-report
    note: Publishes a yearly report with counts of court orders, subpoenas and foreign government requests and how many were answered.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
