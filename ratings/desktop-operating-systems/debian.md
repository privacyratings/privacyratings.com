---
name: Debian
description: A community-developed Linux distribution made entirely of free software, known for stable releases and a large package archive, and the base of many other distributions.
website: https://www.debian.org
source: https://salsa.debian.org/
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://www.debian.org/social_contract
    note: The Debian Social Contract requires the main archive to be entirely free software.
  no_trackers:
    answer: yes
    evidence: https://www.debian.org/legal/privacy
    note: No trackers on the website. Package usage reporting through popularity-contest requires explicit opt-in.
  no_ads:
    answer: yes
    evidence: https://www.debian.org/donations
    note: Funded by donations and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
