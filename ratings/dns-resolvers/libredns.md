---
name: LibreDNS
description: Public encrypted DNS resolver run by the volunteer LibreOps collective, with DoH and DoT endpoints and an optional ad-blocking endpoint.
website: https://libredns.gr
jurisdiction: GR
domain: libredns.gr
source: https://gitlab.com/libreops/libredns/libredns-cfg
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/libreops/libredns/libredns-cfg/-/blob/main/LICENSE
    note: The server deployment scripts are published under AGPL-3.0 and run open-source DNS software.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/libreops/libredns/libredns.gr
    note: The website source is public and loads no analytics or third-party scripts.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/libreops
    note: Run by volunteers and funded by donations through Open Collective. No ads.
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
    evidence: https://libredns.gr/
    note: DoH and DoT endpoints are both documented.
  no_query_logs:
    answer: partial
    evidence: https://libredns.gr/
    note: The site states logging is disabled for the DNS daemon. Not audited.
  dnssec_validation:
    answer: no
    evidence: https://doh.libredns.gr/dns-query?dns=AAABAAABAAAAAAABDWRuc3NlYy1mYWlsZWQDb3JnAAABAAEAACkQAAAAgAAAAA
    note: A test query for the deliberately broken dnssec-failed.org resolves normally, so DNSSEC is not validated.
---
