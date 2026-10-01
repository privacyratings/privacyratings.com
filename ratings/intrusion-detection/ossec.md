---
name: OSSEC
description: An open source host-based intrusion detection system that performs log analysis, file integrity checking, rootkit detection, real-time alerting and active response.
website: https://www.ossec.net
source: https://github.com/ossec/ossec-hids
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ossec/ossec-hids/blob/main/LICENSE
    note: GPL-2.0 and BSD-3-Clause.
  no_trackers:
    answer: no
    note: The website loads Google Analytics and Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://www.ossec.net/products/
    note: Development is funded by Atomicorp's commercial OSSEC products and support, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
