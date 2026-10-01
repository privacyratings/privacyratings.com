---
name: Umami
description: Open source web analytics that tracks page views, referrers and events without cookies. Available as the hosted Umami Cloud or for self-hosting.
website: https://umami.is
source: https://github.com/umami-software/umami
domain: umami.is
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/umami-software/umami/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    note: The website loads Google Ads conversion tracking (gtag).
  no_ads:
    answer: yes
    evidence: https://umami.is/privacy
    note: Funded by Umami Cloud subscriptions. The privacy policy states personal information is not sold or shared.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: yes
    evidence: https://docs.umami.is/docs/faq
    note: The tracking code uses no cookies.
  no_personal_data:
    answer: yes
    evidence: https://docs.umami.is/docs/faq
    note: No personally identifiable information is stored and collected data is anonymized.
  self_hostable:
    answer: yes
    evidence: https://docs.umami.is/docs/install
    note: Official instructions for installing from source or with Docker.
---
