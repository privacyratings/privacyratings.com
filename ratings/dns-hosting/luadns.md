---
name: LuaDNS
description: Anycast DNS hosting from Romania with DNSSEC, a REST API and git integration that builds zones from BIND or Lua files, with a free plan and paid plans.
website: https://www.luadns.com
jurisdiction: RO
domain: app.luadns.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://www.luadns.com/privacy.html
    note: The privacy policy says cookies are used only for authentication and authorization.
  no_ads:
    answer: yes
    evidence: https://www.luadns.com/pricing.html
    note: Funded by paid plans. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  dnssec:
    answer: yes
    evidence: https://www.luadns.com/help.html
    note: Enabled from the zone settings page with automatic key generation and CDS/CDNSKEY records. The DS record is added at the registrar.
  api_access:
    answer: yes
    evidence: https://www.luadns.com/pricing.html
    note: The REST API is included in every package, including the free plan.
  two_factor:
    answer: no
    evidence: https://app.luadns.com/login
    note: No two-factor login is documented; the login form asks only for an email and password.
---
