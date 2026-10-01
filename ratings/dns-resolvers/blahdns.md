---
name: BlahDNS
description: Hobby ad-blocking DNS resolver run by one person, with servers in Singapore and Germany and support for DoH, DoT, DoQ and DNSCrypt.
website: https://blahdns.com
domain: blahdns.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: The service setup is not published as source. It runs on open-source Knot Resolver and dnsdist.
  no_trackers:
    answer: partial
    evidence: https://blahdns.com/
    note: The website loads Cloudflare Web Analytics, a cookieless analytics service. No advertising trackers.
  no_ads:
    answer: yes
    evidence: https://blahdns.com/
    note: Funded by donations. No ads.
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
    evidence: https://blahdns.com/
    note: DoH, DoT, DoQ and DNSCrypt are supported.
  no_query_logs:
    answer: partial
    evidence: https://blahdns.com/
    note: The site states no logs are kept. There is no privacy policy or audit.
  dnssec_validation:
    answer: yes
    evidence: https://blahdns.com/
    note: The site lists DNSSEC support, and the resolver runs Knot Resolver, which validates DNSSEC by default.
---
