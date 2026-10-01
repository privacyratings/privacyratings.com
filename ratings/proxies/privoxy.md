---
name: Privoxy
description: Non-caching web proxy that filters web pages and HTTP headers to remove ads and trackers, with configurable access control and support for chaining to Tor.
website: https://www.privoxy.org
source: https://www.privoxy.org/gitweb/?p=privoxy.git;a=summary
criteria:
  open_source:
    answer: yes
    evidence: https://www.privoxy.org/user-manual/copyright.html
    note: GPL-2.0 or later.
  no_trackers:
    answer: yes
    evidence: https://www.privoxy.org/sf-download-mirror/Sources/
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://www.privoxy.org/faq/general.html#DONATE
    note: Funded by donations, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
