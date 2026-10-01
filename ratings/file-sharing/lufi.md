---
name: Lufi
description: Self-hosted web app for uploading and sharing files with end-to-end encryption in the browser, with expiring download links. Written in Perl.
website: https://framagit.org/fiat-tux/hat-softwares/lufi
source: https://framagit.org/fiat-tux/hat-softwares/lufi
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://framagit.org/fiat-tux/hat-softwares/lufi/-/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://framagit.org/fiat-tux/hat-softwares/lufi/-/blob/master/lufi.conf.template
    note: No telemetry in the source code. A Matomo image tracker is available only if the operator enables it, and is off by default.
  no_ads:
    answer: yes
    evidence: https://framagit.org/fiat-tux/hat-softwares/lufi
    note: Free software supported by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
