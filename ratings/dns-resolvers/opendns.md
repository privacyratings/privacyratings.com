---
name: OpenDNS
description: Public DNS resolver from Cisco at 208.67.222.222 and 208.67.220.220, with optional content filtering and a free home account for managing filters.
website: https://www.opendns.com
mainstream: true
jurisdiction: US
domain: www.opendns.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.opendns.com/privacy-policy/
    note: The Cisco privacy statement used by the site allows third-party advertising and analytics cookies.
  no_ads:
    answer: yes
    evidence: https://www.opendns.com/privacy-policy/
    note: The free service is backed by Cisco's paid security products. Cisco states it does not sell personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.cisco.com/c/en/us/about/trust-center/transparency.html
    note: Cisco publishes counts of law enforcement and national security requests twice a year.
  user_notice:
    answer: yes
    evidence: https://www.cisco.com/c/dam/en_us/about/doing_business/trust-center/docs/cisco-principled-approach-to-government-requests-for-data.pdf
    note: Cisco states it notifies customers before producing data to a government unless the law prohibits it.
  encrypted_dns:
    answer: partial
    evidence: https://doh.opendns.com/dns-query?dns=AAABAAABAAAAAAAAB2V4YW1wbGUDY29tAAABAAE
    note: DNS over HTTPS answers at doh.opendns.com. No current documentation for DNS over TLS is published.
  no_query_logs:
    answer: no
    evidence: https://www.opendns.com/privacy-policy/
    note: No policy states that queries are kept without IP addresses. The Cisco privacy statement allows retention as long as business needs require.
  dnssec_validation:
    answer: yes
    evidence: https://doh.opendns.com/dns-query?dns=AAABAAABAAAAAAAACGRuc3NlYy1mYWlsZWQDb3JnAAABAAE
    note: A test query for the deliberately broken dnssec-failed.org returns SERVFAIL, showing validation.
---
