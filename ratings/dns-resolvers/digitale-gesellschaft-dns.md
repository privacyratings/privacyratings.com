---
name: Digitale Gesellschaft DNS
description: Public DoH and DoT resolver run by Digitale Gesellschaft, a Swiss non-profit digital rights association. It validates DNSSEC, uses no blocklists and publishes its live configuration.
website: https://www.digitale-gesellschaft.ch/dns/
jurisdiction: CH
domain: www.digitale-gesellschaft.ch
source: https://github.com/DigitaleGesellschaft/DNS-Resolver
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/DigitaleGesellschaft/DNS-Resolver
    note: The live resolver configuration is published, but the repository has no license file.
  no_trackers:
    answer: yes
    evidence: https://res4.digitale-gesellschaft.ch/
    note: The resolver privacy notice rules out logging IP addresses or domain names, and the website loads only first-party scripts.
  no_ads:
    answer: yes
    evidence: https://www.digitale-gesellschaft.ch/uber-uns/mitgliedschaft-und-spenden/
    note: Non-profit association funded by memberships and donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.digitale-gesellschaft.ch/dns/dot-and-doh-transparency-report-2025/
    note: Yearly report with counts of law enforcement requests and blocked domains.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  encrypted_dns:
    answer: yes
    evidence: https://www.digitale-gesellschaft.ch/dns/
    note: DoH and DoT endpoints are both documented.
  no_query_logs:
    answer: partial
    evidence: https://res4.digitale-gesellschaft.ch/
    note: The privacy notice states IP addresses and domain names are not logged, only query statistics. Not audited.
  dnssec_validation:
    answer: yes
    evidence: https://www.digitale-gesellschaft.ch/dns/
    note: The service page states DNSSEC is validated.
---
