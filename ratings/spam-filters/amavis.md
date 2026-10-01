---
name: Amavis
description: Self-hosted content filter written in Perl that sits between a mail server and scanners such as SpamAssassin and ClamAV, passing each message to them and acting on the results.
website: https://www.amavis.org
source: https://gitlab.com/amavis/amavis
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/amavis/amavis/-/blob/master/LICENSE
    note: Licensed under the GNU GPL version 2.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/amavis/amavis
    note: No telemetry or analytics in the source code, and the project website loads no analytics.
  no_ads:
    answer: yes
    evidence: https://www.amavis.org/
    note: Free software maintained by volunteers, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
