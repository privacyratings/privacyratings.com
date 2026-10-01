---
name: SearXNG
description: Free, open-source metasearch engine that combines results from many search services without storing information about its users. It can be self-hosted or used through public instances.
website: https://docs.searxng.org
imported_from: awesome-privacy
source: https://github.com/searxng/searxng
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/searxng/searxng/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://docs.searxng.org/own-instance.html
    note: The software serves no ads or tracking content; public instances depend on their operator.
  no_ads:
    answer: yes
    evidence: https://docs.searxng.org/own-instance.html
    note: Free software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_search_logs:
    answer: yes
    evidence: https://docs.searxng.org/user/about.html
    note: The software does not store search data; operators of public instances control their own logging.
  no_personalized_ads:
    answer: yes
    evidence: https://docs.searxng.org/own-instance.html
    note: No ads are served.
  no_account_needed:
    answer: yes
    evidence: https://docs.searxng.org/user/about.html
    note: No accounts exist.
---
