---
name: OpenProject
description: Open source project management software with Gantt charts, work packages, agile boards, time tracking and wikis. Can be self-hosted or used as a cloud service from OpenProject GmbH.
website: https://www.openproject.org
source: https://github.com/opf/openproject
jurisdiction: DE
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/opf/openproject/blob/dev/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://www.openproject.org/legal/privacy/
    note: The website uses cookieless Matomo analytics with anonymized IP addresses. No other third-party trackers are described.
  no_ads:
    answer: yes
    evidence: https://www.openproject.org/pricing/
    note: Funded by Enterprise subscriptions and hosting, with no ads. The privacy policy describes no data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
