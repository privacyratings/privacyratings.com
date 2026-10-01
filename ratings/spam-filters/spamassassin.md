---
name: Apache SpamAssassin
description: Self-hosted spam filter from the Apache Software Foundation that scores mail with rules, DNS blocklists and Bayesian filtering, used alongside mail servers such as Postfix.
website: https://spamassassin.apache.org
source: https://github.com/apache/spamassassin
jurisdiction: US
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://svn.apache.org/repos/asf/spamassassin/trunk/LICENSE
    note: Licensed under the Apache License 2.0.
  no_trackers:
    answer: yes
    evidence: https://svn.apache.org/repos/asf/spamassassin/trunk/
    note: No telemetry or analytics in the source code, and the project website loads no analytics.
  no_ads:
    answer: yes
    evidence: https://www.apache.org/foundation/sponsorship
    note: Free software from a nonprofit foundation funded by sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
