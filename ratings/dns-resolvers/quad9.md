---
name: Quad9
description: >-
  Public DNS resolver run by the Swiss non-profit Quad9 Foundation that blocks known malicious domains and validates DNSSEC.
website: https://quad9.net
jurisdiction: CH
domain: quad9.net
criteria:
  open_source:
    answer: no
    note: Closed source. The resolver configuration and threat-blocking system are not published.
  no_trackers:
    answer: yes
    evidence: https://quad9.net/privacy/website-policy/
    note: The website policy states no cookies, web beacons or tracking pixels are used.
  no_ads:
    answer: yes
    evidence: https://quad9.net/privacy/policy/
    note: Non-profit funded by donations and sponsors. The policy states identifying data is not shared or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://quad9.net/about/transparency-report/
    note: Yearly summaries of law enforcement requests, updated quarterly.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://quad9.net/service/service-addresses-and-features/
    note: DoH and DoT endpoints are listed for each service.
  no_query_logs:
    answer: partial
    evidence: https://quad9.net/privacy/policy/
    note: The policy states user IP addresses are not stored with queries. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://quad9.net/service/service-addresses-and-features/
    note: DNSSEC validation is enabled on the recommended resolver addresses.
---
