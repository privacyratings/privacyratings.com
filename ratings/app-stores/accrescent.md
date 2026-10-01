---
name: Accrescent
description: Android app store focused on security and privacy, with signing key pinning, signed repository metadata and unattended updates. Developers upload apps signed with their own keys, and it is still in alpha.
website: https://accrescent.app
source: https://github.com/accrescent/accrescent
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/accrescent/accrescent/blob/main/LICENSE
    note: Apache-2.0 for the client, and the server code is also public.
  no_trackers:
    answer: yes
    evidence: https://github.com/accrescent/accrescent
    note: No telemetry or analytics in the source code, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://accrescent.app/donate/
    note: Funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: yes
    evidence: https://accrescent.app/
    note: No account is needed to install apps.
  tracker_info:
    answer: no
    note: Accrescent does not show trackers or anti-features for apps.
---
