---
name: Cure53
description: Berlin security firm that performs penetration tests and source code audits of web, mobile, browser, VPN and cryptographic software, and publishes many client reports.
website: https://cure53.de
domain: cure53.de
jurisdiction: DE
criteria:
  public_reports:
    answer: yes
    evidence: https://cure53.de/#publications-anchor
    note: The publications section links many full client reports as PDFs.
  open_source_work:
    answer: yes
    evidence: https://cure53.de/pentest-report_psiphon-conduit-library.pdf
    note: Published reports cover many open-source projects, such as Psiphon, Mullvad VPN and KeePassium.
  public_research:
    answer: yes
    evidence: https://github.com/cure53/DOMPurify
    note: Maintains the open-source DOMPurify sanitizer and publishes research papers on browser and web security.
  no_trackers:
    answer: yes
    evidence: https://cure53.de/datenschutz.php
    note: The privacy policy states the site uses no cookies and no user analytics, and the tracker test found none.
pick: 1
pick_reason: Publishes a large public library of full audit reports, many for open-source and privacy projects, and maintains the DOMPurify sanitizer. Its website uses no cookies or analytics.
---
