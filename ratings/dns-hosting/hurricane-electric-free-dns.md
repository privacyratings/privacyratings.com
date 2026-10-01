---
name: Hurricane Electric Free DNS
description: Free authoritative DNS hosting from the US network operator Hurricane Electric, with forward and reverse zones, secondary DNS and dynamic DNS updates.
website: https://dns.he.net
jurisdiction: US
domain: dns.he.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://he.net/privacy.html
    note: No third-party trackers were found, but a first-party cookie records where visitors come from.
  no_ads:
    answer: yes
    evidence: https://he.net/privacy.html
    note: Free service from a network operator funded by paid transit and hosting. The privacy policy says personal data is not disclosed to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://he.net/privacy.html
    note: The privacy policy says user information is disclosed only to comply with law or valid legal process. No request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  dnssec:
    answer: no
    evidence: https://dns.he.net
    note: DNSSEC signing is not offered or listed among the service's features.
  api_access:
    answer: no
    evidence: https://dns.he.net
    note: No API for managing zones. Only a dynamic DNS update endpoint for records marked as dynamic.
  two_factor:
    answer: no
    evidence: https://dns.he.net
    note: No two-factor login is documented; the login form asks only for a username and password.
---
