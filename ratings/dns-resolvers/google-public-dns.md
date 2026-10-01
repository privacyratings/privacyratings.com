---
name: Google Public DNS
description: Free public DNS resolver run by Google at 8.8.8.8 and 8.8.4.4 that validates DNSSEC and supports DNS over HTTPS and DNS over TLS.
website: https://developers.google.com/speed/public-dns
mainstream: true
jurisdiction: US
domain: dns.google
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://developers.google.com/speed/public-dns
    note: The documentation website loads Google Analytics.
  no_ads:
    answer: no
    evidence: https://developers.google.com/speed/public-dns/privacy
    note: Free service funded by Google's advertising business. The privacy page states DNS logs are not combined with other Google data for ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes counts of government requests for user data twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google states it notifies users before disclosing their information unless prohibited by law or in emergencies.
  encrypted_dns:
    answer: yes
    evidence: https://developers.google.com/speed/public-dns/docs/secure-transports
    note: DNS over HTTPS and DNS over TLS are both supported.
  no_query_logs:
    answer: partial
    evidence: https://developers.google.com/speed/public-dns/privacy
    note: Temporary logs with full IP addresses are kept for 24 to 48 hours. Sampled permanent logs keep only city or region. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://developers.google.com/speed/public-dns/faq
    note: Google Public DNS is a validating resolver for all DNSSEC-signed zones.
---
