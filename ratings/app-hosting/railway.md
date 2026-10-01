---
name: Railway
description: Cloud platform for deploying apps, databases and services from Git repositories or Docker images, with usage-based billing.
website: https://railway.com
jurisdiction: US
domain: railway.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source. The Railway CLI and the Railpack builder are open source, but the platform is not.
  no_trackers:
    answer: no
    evidence: https://railway.com/legal/privacy
    note: The privacy policy describes third-party analytics providers, advertising measurement cookies and session replay.
  no_ads:
    answer: yes
    evidence: https://railway.com/legal/privacy
    note: Funded by paid usage, and the privacy policy says personal data is not sold, shared or used for targeted advertising.
  independent_audit:
    answer: partial
    evidence: https://docs.railway.com/enterprise/compliance
    note: Only the SOC 3 summary is public; the SOC 2 Type II report is available on request.
  transparency_report:
    answer: partial
    evidence: https://railway.com/legal/dpa
    note: The data processing addendum describes how government requests are handled, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://railway.com/legal/dpa
    note: The data processing addendum promises reasonable notice to customers of compelled disclosure unless legally prohibited.
---
