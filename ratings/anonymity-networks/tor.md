---
name: Tor
description: Anonymity network that routes traffic through three volunteer-run relays with layered encryption, used through Tor Browser and other apps to hide location, resist tracking and bypass censorship.
website: https://www.torproject.org
source: https://gitlab.torproject.org/tpo/core/tor
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://www.torproject.org/about/history/
    note: BSD-3-Clause. Source releases are published at dist.torproject.org. The Tor GitLab now requires sign-in to view files.
  no_trackers:
    answer: yes
    evidence: https://www.torproject.org/about/privacy_policy/
    note: The privacy policy states the software has no tracking, telemetry or analytics, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://www.torproject.org/about/supporters/
    note: Funded by donations and grants to a non-profit, with no ads or data sales.
  independent_audit:
    answer: yes
    evidence: https://7asecurity.com/reports/pentest-report-tor2-RC1.2.pdf
    note: Full 7ASecurity penetration test report covering Tor core code changes and network tools; Cure53 also published a full report on Tor Browser apps and tools.
jurisdiction: US
---
