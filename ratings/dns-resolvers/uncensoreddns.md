---
name: UncensoredDNS
description: Free public DNS resolver in Denmark, run by an individual, that does not apply censorship filters. It offers anycast and unicast servers over plain DNS, DoT and DoH.
website: https://blog.uncensoreddns.org
jurisdiction: DK
domain: blog.uncensoreddns.org
criteria:
  open_source:
    answer: no
    note: Closed source. The server configuration is not published.
  no_trackers:
    answer: yes
    evidence: https://blog.uncensoreddns.org/faq/
    note: The FAQ states nothing about users is logged, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://blog.uncensoreddns.org/faq/
    note: Paid for by the operator, with sponsored hosting for anycast nodes. The FAQ states data is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://blog.uncensoreddns.org/faq/
    note: The FAQ states the operator has never been contacted by authorities, and that this will change if it happens. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://blog.uncensoreddns.org/dns-servers/
    note: Both servers listen for DoT on port 853 and DoH on port 443.
  no_query_logs:
    answer: partial
    evidence: https://blog.uncensoreddns.org/faq/
    note: The FAQ states nothing is logged except total query counts. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://anycast.uncensoreddns.org/dns-query?dns=AAABAAABAAAAAAABDWRuc3NlYy1mYWlsZWQDb3JnAAABAAEAACkQAAAAgAAAAA
    note: A test query for the deliberately broken dnssec-failed.org returns SERVFAIL, showing validation.
---
