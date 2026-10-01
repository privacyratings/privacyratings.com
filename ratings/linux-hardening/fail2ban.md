---
name: Fail2Ban
description: A daemon that scans log files for repeated failed logins and other abuse, and bans the offending IP addresses through firewall rules for a set time.
website: https://github.com/fail2ban/fail2ban
source: https://github.com/fail2ban/fail2ban
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/fail2ban/fail2ban/blob/master/COPYING
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/fail2ban/fail2ban
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/fail2ban/fail2ban
    note: Free volunteer project with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
