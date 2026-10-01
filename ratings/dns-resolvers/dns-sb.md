---
name: DNS.SB
description: Free public DNS resolver operated by xTom GmbH in Germany on an anycast network. It supports DoH and DoT, validates DNSSEC and does not send EDNS Client Subnet.
website: https://dns.sb
jurisdiction: DE
domain: dns.sb
criteria:
  open_source:
    answer: no
    note: Closed source. The resolver software stack is not disclosed.
  no_trackers:
    answer: partial
    evidence: https://dns.sb/privacy/
    note: The website uses self-hosted Plausible analytics. No third-party trackers are used.
  no_ads:
    answer: yes
    evidence: https://dns.sb/sponsors/
    note: Funded by xTom and sponsors. The privacy policy rules out selling personal information.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://dns.sb/report/
    note: Yearly reports with counts of government and law enforcement requests.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://dns.sb/faq/
    note: DoH and DoT are both supported.
  no_query_logs:
    answer: partial
    evidence: https://dns.sb/privacy/
    note: The policy states queries, IP addresses and timestamps are not logged. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://dns.sb/faq/
    note: The FAQ states DNS.SB is a DNSSEC-validating resolver.
---
