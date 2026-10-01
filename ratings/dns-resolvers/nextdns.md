---
name: NextDNS
description: Configurable DNS resolver that blocks ads, trackers and malicious domains, with optional parental controls and per-user query logs.
website: https://nextdns.io
jurisdiction: US
source: https://github.com/nextdns/nextdns
domain: nextdns.io
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/nextdns/nextdns/blob/master/LICENSE
    note: Only the client is open source. The resolver service is not.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.nextdns.NextDNS/latest/
    note: The Android app has no known trackers on Exodus, and the policy states user data is never shared.
  no_ads:
    answer: yes
    evidence: https://nextdns.io/privacy
    note: Funded by paid plans. The policy states data is never sold or shared.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://nextdns.io/
    note: DoH and DoT are supported.
  no_query_logs:
    answer: partial
    evidence: https://nextdns.io/privacy
    note: Queries are discarded unless the user turns on logging, with retention chosen by the user. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://nextdns.io/
    note: DNS answers are validated with DNSSEC automatically.
---
