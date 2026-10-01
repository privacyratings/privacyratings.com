---
name: hBlock
description: POSIX shell script for Unix-like systems that builds a hosts file blocking domains that serve ads, tracking scripts and malware, using several public blocklists.
website: https://hblock.molinero.dev
source: https://github.com/hectorm/hblock
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/hectorm/hblock/blob/master/LICENSE.md
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/hectorm/hblock
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/hectorm/hblock#readme
    note: Free, open-source script with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: yes
    evidence: https://github.com/hectorm/hblock/blob/master/SOURCES.md
    note: Uses a default set of ad, tracking and malware blocklists.
  no_data_collection:
    answer: yes
    evidence: https://github.com/hectorm/hblock
    note: Runs locally and only downloads blocklists. No data is sent to the developer.
  custom_filters:
    answer: yes
    evidence: https://github.com/hectorm/hblock/blob/master/hblock
    note: Supports custom sources, an allowlist and a denylist.
---
