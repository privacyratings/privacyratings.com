---
name: Clean Browsing
description: DNS filtering service with free family, adult and security filters and paid custom filtering, supporting DoH, DoT and DNSCrypt.
website: https://cleanbrowsing.org
domain: cleanbrowsing.org
imported_from: awesome-privacy
jurisdiction: US
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: yes
    evidence: https://cleanbrowsing.org/privacy
    note: Funded by paid filtering plans. The policy states personal data is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published. The privacy policy only says data may be shared to comply with legal process.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://cleanbrowsing.org/filters/
    note: DoH and DoT endpoints are listed for each free filter.
  no_query_logs:
    answer: partial
    evidence: https://cleanbrowsing.org/privacy
    note: The policy states free DNS queries are not logged with IP addresses, while anonymized aggregate data is kept. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://cleanbrowsing.org/learn/what-is-dnssec
    note: The resolvers validate DNSSEC on all queries.
---
