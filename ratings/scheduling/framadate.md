---
name: Framadate
description: Free online polling service from the French non-profit Framasoft for choosing a meeting date or deciding between options, without registration. Runs on the open source Pollaris software.
website: https://framadate.org
source: https://framagit.org/framasoft/framadate/pollaris
domain: framadate.org
jurisdiction: FR
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://framagit.org/framasoft/framadate/pollaris/-/blob/frama/LICENSE.txt
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://framasoft.org/en/legals/
    note: No third-party trackers. Framasoft sites use a self-hosted Matomo instance for statistics, with an opt-out.
  no_ads:
    answer: yes
    evidence: https://soutenir.framasoft.org/en/
    note: Free service run by a non-profit association funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
