---
name: MailScanner
description: Self-hosted email security system written in Perl that scans mail for spam, viruses and phishing using SpamAssassin and antivirus engines, with Postfix, Sendmail and Exim.
website: https://github.com/MailScanner/v5
source: https://github.com/MailScanner/v5
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/MailScanner/v5/blob/master/LICENSE
    note: Licensed under the GNU GPL version 2.
  no_trackers:
    answer: yes
    evidence: https://github.com/MailScanner/v5
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/MailScanner/v5
    note: Free software maintained by volunteers, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
