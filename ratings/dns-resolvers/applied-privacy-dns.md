---
name: Applied Privacy DNS
description: Public DNS over HTTPS and DNS over TLS resolver run by the Foundation for Applied Privacy, a non-profit association in Vienna. It validates DNSSEC and uses QNAME minimisation.
website: https://applied-privacy.net/services/dns/
jurisdiction: AT
domain: applied-privacy.net
criteria:
  open_source:
    answer: no
    note: Closed source. The resolver configuration is not published.
  no_trackers:
    answer: yes
    evidence: https://applied-privacy.net/privacy-policy/
    note: The website logs requests without IP addresses and uses no third-party analytics. Only the external donation providers are outside its control.
  no_ads:
    answer: yes
    evidence: https://applied-privacy.net/donate/
    note: Non-profit funded by donations and sponsors. No ads.
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
    evidence: https://applied-privacy.net/services/dns/
    note: DoH and DoT endpoints are both documented.
  no_query_logs:
    answer: partial
    evidence: https://applied-privacy.net/privacy-policy/
    note: The policy states IP addresses and queries are not logged, only aggregated statistics. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://applied-privacy.net/services/dns/
    note: The documentation states the resolvers perform DNSSEC validation.
---
