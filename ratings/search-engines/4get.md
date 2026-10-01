---
name: 4get
description: Open-source metasearch engine and proxy that fetches results from other search engines and strips tracking, usable at 4get.ca or other public instances or self-hosted.
website: https://4get.ca
source: https://git.lolcat.ca/lolcat/4get
criteria:
  open_source:
    answer: yes
    evidence: https://git.lolcat.ca/lolcat/4get/src/branch/master/license.txt
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://4get.ca/about
    note: No ads, third-party scripts or trackers, and no user profiling.
  no_ads:
    answer: yes
    evidence: https://4get.ca/donate
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_search_logs:
    answer: yes
    evidence: https://4get.ca/about
    note: IP addresses and user agents are not logged; encrypted pagination data is kept in memory for at most 15 minutes.
  no_personalized_ads:
    answer: yes
    evidence: https://4get.ca/about
    note: No ads are shown.
  no_account_needed:
    answer: yes
    evidence: https://4get.ca/about
    note: Search needs no account.
---
