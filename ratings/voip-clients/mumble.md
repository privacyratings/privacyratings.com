---
name: Mumble
description: Open source, low-latency voice chat client and server (Murmur) for groups, with encrypted connections and self-hosted servers.
website: https://www.mumble.info
source: https://github.com/mumble-voip/mumble
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mumble-voip/mumble/blob/master/LICENSE
    note: BSD-3-Clause.
  no_trackers:
    answer: partial
    evidence: https://github.com/mumble-voip/mumble/blob/master/src/mumble/Usage.cpp
    note: No third-party trackers; the client sends first-party usage statistics, which are on by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.mumble.info/about/
    note: Volunteer-run open source project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
