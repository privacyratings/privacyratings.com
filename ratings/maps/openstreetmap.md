---
name: OpenStreetMap
description: Collaborative world map built by volunteers and published as open data under the ODbL. The website offers map browsing, search, directions and editing, and the data powers many other map apps.
website: https://www.openstreetmap.org
source: https://github.com/openstreetmap/openstreetmap-website
jurisdiction: GB
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/openstreetmap/openstreetmap-website/blob/master/LICENSE
    note: GPL-2.0 for the website software. Map data is under the ODbL.
  no_trackers:
    answer: partial
    evidence: https://osmfoundation.org/wiki/Privacy_Policy
    note: No third-party trackers, but the website runs self-hosted Matomo analytics with shortened IP addresses.
  no_ads:
    answer: yes
    evidence: https://supporting.openstreetmap.org/
    note: Run by the non-profit OpenStreetMap Foundation, funded by donations and membership, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
