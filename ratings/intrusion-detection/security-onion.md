---
name: Security Onion
description: Linux distribution for threat hunting, network security monitoring and log management that bundles tools such as Suricata, Zeek and Elasticsearch with its own web console.
website: https://securityonionsolutions.com
source: https://github.com/Security-Onion-Solutions/securityonion
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/Security-Onion-Solutions/securityonion/blob/3/main/LICENSE
    note: All code is public under the source-available Elastic License 2.0, which is not OSI-approved.
  no_trackers:
    answer: no
    evidence: https://docs.securityonion.net/en/3/main/telemetry/
    note: Console telemetry, chosen during setup, sends feature usage data to Google Analytics.
  no_ads:
    answer: yes
    evidence: https://securityonionsolutions.com/pro/
    note: Funded by Security Onion Pro licenses, hardware appliances, training and support, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
