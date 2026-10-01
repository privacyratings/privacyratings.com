---
name: Email Privacy Tester
description: Tests whether your mail client "reads" emails before you open them, and what analytics, read-receipts or other tracking data it leaks back to the sender.
website: https://www.emailprivacytester.com
source: https://gitlab.com/grepular/ept3
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/grepular/ept3/-/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://www.emailprivacytester.com/privacy
    note: The site uses no cookies and makes no cross-origin requests to third parties.
  no_ads:
    answer: yes
    evidence: https://www.emailprivacytester.com/donate
    note: Funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
