---
name: Wazuh
description: Security platform for threat detection, integrity monitoring, log analysis, vulnerability detection and compliance, using agents on endpoints that report to a central server and dashboard.
website: https://wazuh.com
source: https://github.com/wazuh/wazuh
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wazuh/wazuh/blob/main/LICENSE
    note: GPL-2.0 for the agent and server; the indexer and dashboard are Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://wazuh.com/privacy-policy/
    note: The website loads Google Tag Manager, and the privacy policy names Google Analytics.
  no_ads:
    answer: yes
    evidence: https://wazuh.com/services/professional-support/
    note: Funded by paid support, professional services and the hosted Wazuh Cloud, with no ads; the privacy policy says personal data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
