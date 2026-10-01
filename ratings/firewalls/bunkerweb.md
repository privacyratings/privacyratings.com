---
name: BunkerWeb
description: Open-source web application firewall (WAF) built on NGINX that sits in front of web services as a reverse proxy and blocks common attacks, with secure defaults.
website: https://www.bunkerweb.io
source: https://github.com/bunkerity/bunkerweb
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/bunkerity/bunkerweb/blob/master/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://docs.bunkerweb.io/latest/features/
    note: The website loads the Brevo marketing SDK and Google reCAPTCHA, and the software sends anonymous usage reports by default.
  no_ads:
    answer: yes
    evidence: https://www.bunkerweb.io/pricing-plan/
    note: Funded by paid PRO and Enterprise plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: FR
---
