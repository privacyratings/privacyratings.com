---
name: Write.as
description: Minimalist hosted blogging service from Musing Studio, focused on distraction-free writing and anonymous publishing, with federation over ActivityPub.
website: https://write.as
domain: write.as
jurisdiction: US
source: https://github.com/writefreely/writefreely
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/writefreely/writefreely/blob/develop/LICENSE
    note: Write.as runs on WriteFreely, which is AGPL-3.0, but the code for Write.as Pro features beyond WriteFreely is not published.
  no_trackers:
    answer: partial
    evidence: https://write.as/privacy
    note: Uses self-hosted Matomo analytics with cookies, which respects Do Not Track and can be opted out of. The Android app has no trackers.
  no_ads:
    answer: yes
    evidence: https://write.as/pricing
    note: Funded by paid plans with no ads, and the privacy policy states data is never shared for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://write.as/privacy
    note: The privacy policy states requests are reviewed and require a warrant, and a quarterly warrant canary is published, but no request counts.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
