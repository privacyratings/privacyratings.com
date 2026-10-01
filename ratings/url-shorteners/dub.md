---
name: Dub
description: Open source link management platform for short links, QR codes, conversion tracking and affiliate programs. Available as a hosted service or for self-hosting.
website: https://dub.co
source: https://github.com/dubinc/dub
domain: dub.co
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/dubinc/dub/blob/main/LICENSE.md
    note: AGPL-3.0, except code in the ee directories, which is under a separate commercial license.
  no_trackers:
    answer: partial
    evidence: https://dub.co/legal/privacy
    note: The website uses proxied Plausible analytics and Dub's own analytics, and the privacy policy states no third-party cookies are used.
  no_ads:
    answer: yes
    evidence: https://dub.co/legal/privacy
    note: Funded by subscriptions. The privacy policy states personal information is not sold or rented.
  independent_audit:
    answer: partial
    evidence: https://dub.co/security
    note: Dub states it is SOC 2 Type II certified, but the report is not public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
