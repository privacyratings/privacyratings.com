---
name: Framaforms
description: Free online form and survey service run by the French nonprofit Framasoft on the open-source Yakforms software. Forms expire after six months by default.
website: https://framaforms.org
source: https://framagit.org/yakforms/yakforms
jurisdiction: FR
domain: framaforms.org
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://framagit.org/yakforms/yakforms/-/raw/master/LICENSE.txt
    note: Runs Yakforms, which is licensed under GPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://framasoft.org/en/legals/
    note: Framasoft measures traffic with its own Matomo instance, which sets a cookie. Data is not shared with third parties.
  no_ads:
    answer: yes
    evidence: https://framasoft.org/fr/cgu/
    note: Free service funded by donations to Framasoft. The terms state personal data is not sold or passed on.
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
