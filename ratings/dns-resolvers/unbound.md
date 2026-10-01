---
name: Unbound
description: Validating, recursive and caching DNS resolver from NLnet Labs for running your own resolver, with DNS over TLS and DNS over HTTPS support.
website: https://nlnetlabs.nl/projects/unbound/about/
imported_from: awesome-privacy
source: https://github.com/NLnetLabs/unbound
jurisdiction: NL
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/NLnetLabs/unbound/blob/master/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://github.com/NLnetLabs/unbound
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://nlnetlabs.nl/about/
    note: Developed by a non-profit foundation funded by donations and support contracts. No ads.
  independent_audit:
    answer: partial
    evidence: https://ostif.org/wp-content/uploads/2019/12/X41-Unbound-Security-Audit-2019-Final-Report.pdf
    note: The full X41 D-Sec audit report is older than three years.
  encrypted_dns:
    answer: yes
    evidence: https://nlnetlabs.nl/projects/unbound/about/
    note: DNS over TLS and DNS over HTTPS are supported.
  no_query_logs:
    answer: partial
    evidence: https://unbound.docs.nlnetlabs.nl/en/latest/manpages/unbound.conf.html
    note: Query logging is off by default and controlled by whoever runs the resolver. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://nlnetlabs.nl/projects/unbound/about/
    note: Unbound is a validating resolver.
---
