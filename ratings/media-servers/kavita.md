---
name: Kavita
description: Self-hosted reading server for manga, comics and books, with web readers for comics, EPUB and PDF, OPDS support and multiple users. An optional paid Kavita+ subscription adds metadata and scrobbling features.
website: https://www.kavitareader.com
source: https://github.com/Kareadita/Kavita
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Kareadita/Kavita/blob/develop/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://wiki.kavitareader.com/troubleshooting/faq/
    note: The website loads Google Tag Manager (automated test). The server also sends anonymous usage statistics by default, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://wiki.kavitareader.com/kavita+/
    note: Funded by the optional Kavita+ subscription and Open Collective donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
