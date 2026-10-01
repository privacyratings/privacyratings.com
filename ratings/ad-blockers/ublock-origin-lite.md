---
name: uBlock Origin Lite
description: Manifest V3 content blocker from the uBlock Origin developer that filters ads and trackers through declarative browser rules, with no background process.
website: https://github.com/uBlockOrigin/uBOL-home
source: https://github.com/uBlockOrigin/uBOL-home
platforms:
  - windows
  - macos
  - linux
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/uBlockOrigin/uBOL-home/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/uBlockOrigin/uBOL-home/wiki/Privacy-policy
    note: No analytics or telemetry in the code and no home server.
  no_ads:
    answer: yes
    evidence: https://github.com/uBlockOrigin/uBOL-home/wiki/Privacy-policy
    note: No ads, and donations are not accepted.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: yes
    evidence: https://github.com/uBlockOrigin/uBOL-home
    note: The default rulesets include uBlock Origin's filters, EasyList, EasyPrivacy and Peter Lowe's list.
  no_data_collection:
    answer: yes
    evidence: https://github.com/uBlockOrigin/uBOL-home/wiki/Privacy-policy
    note: No data of any kind is collected. The only remote requests are for filter lists the user subscribes to.
  custom_filters:
    answer: yes
    evidence: https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-(FAQ)
    note: Custom filters and subscriptions to external filter lists are supported.
pick: 2
pick_reason: "For browsers that only allow Manifest V3 extensions, such as Chrome and Edge: uBlock Origin's filter lists with no data collection and no background process."
---
