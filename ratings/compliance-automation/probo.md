---
name: Probo
description: Open-source governance, risk and compliance platform for SOC 2, ISO 27001 and similar programs, covering risks, controls, vendors, access reviews and documents. It can be self-hosted, used as Probo Cloud, or paired with a managed compliance officer service.
website: https://www.probo.com
source: https://github.com/getprobo/probo
domain: us.probo.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/getprobo/probo/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://www.probo.com/cookie-policy
    note: The website uses PostHog Cloud analytics with a one-year cookie.
  no_ads:
    answer: yes
    evidence: https://www.probo.com/privacy
    note: Funded by paid plans and services. The privacy policy says personal data is not sold or shared for cross-context behavioral advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    evidence: https://www.probo.com/privacy
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
