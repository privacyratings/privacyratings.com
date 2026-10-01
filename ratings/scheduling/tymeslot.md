---
name: Tymeslot
description: Open source (AGPL-3.0), self-hostable meeting scheduling and booking platform. Guests book without creating an account, and hosts get two-way calendar sync with Google, Outlook, iCloud and CalDAV.
website: https://tymeslot.app
source: https://github.com/Tymeslot/tymeslot
domain: tymeslot.app
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Tymeslot/tymeslot/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://tymeslot.app/legal/privacy-policy
    note: Uses self-hosted Umami without cookies instead of third-party analytics, but email opens are recorded through Postmark.
  no_ads:
    answer: yes
    evidence: https://tymeslot.app/legal/privacy-policy
    note: Funded by paid plans. The privacy policy states personal information is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
imported_from: awesome-privacy
jurisdiction: EE
---
