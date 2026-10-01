---
name: uBlock Origin
description: >-
  Free, open-source content blocker for ads, trackers and malware sites. Efficient, with no "acceptable ads" program.
website: https://github.com/gorhill/uBlock
source: https://github.com/gorhill/uBlock
license: GPL-3.0
platforms: [firefox, chromium]
pick: 1
pick_reason: >-
  The most effective blocker available, with no data collection, no home server, no acceptable-ads deals and not even a donation page. Install it through the links on its GitHub page to avoid look-alike extensions.
caveat: >-
  Browsers built on Chromium are removing support for Manifest V2 extensions. Where uBlock Origin no longer runs, use uBlock Origin Lite from the same developer.
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/gorhill/uBlock/blob/master/LICENSE.txt
  no_trackers:
    answer: yes
    evidence: https://github.com/gorhill/uBlock/wiki/Privacy-policy
  no_ads:
    answer: yes
    evidence: https://github.com/gorhill/uBlock/wiki/Privacy-policy
    note: No ads, no acceptable-ads program, and donations are not accepted.
  blocks_by_default:
    answer: yes
    evidence: https://github.com/gorhill/uBlock#readme
  no_data_collection:
    answer: yes
    evidence: https://github.com/gorhill/uBlock/wiki/Privacy-policy
    note: No data of any kind is collected. The only connections are filter list updates.
  custom_filters:
    answer: yes
    evidence: https://github.com/gorhill/uBlock/wiki/Dashboard:-My-filters
  independent_audit:
    answer: no
    note: No independent audit is published.
---
