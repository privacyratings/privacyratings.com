---
name: Yopass
description: Open source secret sharing tool that encrypts messages and files in the browser with OpenPGP and deletes them after one view or an expiry time. Can be self-hosted, and a public instance runs at share.yopass.se.
website: https://yopass.se
source: https://github.com/jhaals/yopass
domain: share.yopass.se
jurisdiction: SE
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/jhaals/yopass/blob/master/LICENSE
    note: Apache-2.0. Some business features in the same code base require a paid license key.
  no_trackers:
    answer: no
    evidence: https://yopass.se/privacy
    note: The privacy policy states the project website uses Google Analytics.
  no_ads:
    answer: yes
    evidence: https://yopass.se/privacy
    note: Funded by paid business licenses. The privacy policy lists no advertising use of data.
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
