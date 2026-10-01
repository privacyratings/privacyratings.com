---
name: AdGuard
description: Public DNS resolver from AdGuard that blocks ads, trackers and malicious domains, with open-source server software and DoH, DoT, DoQ and DNSCrypt support.
website: https://adguard-dns.io
family: adguard
source: https://github.com/AdguardTeam/AdGuardDNS
domain: adguard-dns.io
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardDNS/blob/master/COPYING
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://adguard-dns.io/en/privacy.html
    note: The policy states processed data is not shared with third parties, and the website loads no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://adguard-dns.io/en/privacy.html
    note: Funded by paid private DNS plans. The policy states personal data is not sold or shared.
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
    evidence: https://adguard-dns.io/kb/public-dns/overview/
    note: DoH, DoT, DoQ and DNSCrypt are supported.
  no_query_logs:
    answer: partial
    evidence: https://adguard-dns.io/en/privacy.html
    note: The policy states no personal data is processed for public DNS and only an anonymous domain list is kept for 24 hours. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://dns.adguard-dns.com/resolve?name=dnssec-failed.org&type=A
    note: A lookup of the deliberately broken dnssec-failed.org domain is rejected as DNSSEC bogus.
jurisdiction: CY
---
