---
name: YaCy
description: Free search engine software that users run themselves, either as a personal or intranet search portal with its own crawler, or as a peer in a decentralized network that shares a web index.
website: https://yacy.net
source: https://github.com/yacy/yacy_search_server
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/yacy/yacy_search_server/blob/master/COPYRIGHT
    note: GPL-2.0-or-later, with some library code under LGPL.
  no_trackers:
    answer: yes
    evidence: https://yacy.net/
    note: The software collects no personal data and does not phone home.
  no_ads:
    answer: yes
    evidence: https://yacy.net/
    note: Free software funded by donations and community support, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_search_logs:
    answer: yes
    evidence: https://yacy.net/
    note: Searches run on the user's own server, and the peer-to-peer network does not store search requests.
  no_personalized_ads:
    answer: yes
    evidence: https://yacy.net/
    note: No ads are shown.
  no_account_needed:
    answer: yes
    evidence: https://github.com/yacy/yacy_search_server
    note: Self-hosted software that needs no account.
---
