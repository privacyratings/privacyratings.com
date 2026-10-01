---
name: HomeBank
description: Open-source personal finance program for Windows and Linux for tracking accounts, budgets and spending, with charts, reports and bank file import.
website: https://www.gethomebank.org
source: https://code.launchpad.net/homebank
platforms:
  - windows
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://git.launchpad.net/~mdoyen/homebank/+git/homebank/tree/COPYING?h=5.10.x
    note: GPL-2.0-or-later.
  no_trackers:
    answer: no
    note: The gethomebank.org website loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: no
    evidence: https://www.gethomebank.org/en/index.php
    note: The website states the project is mainly supported by advertising on the site. The program itself shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
