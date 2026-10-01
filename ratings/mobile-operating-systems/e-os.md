---
name: /e/OS
description: Android-based mobile operating system without Google apps or services, using microG for app compatibility and shipping its own app store, privacy controls and optional Murena cloud services.
website: https://e.foundation/e-os/
aliases:
  - Murena
source: https://gitlab.e.foundation/e
jurisdiction: FR
criteria:
  open_source:
    answer: partial
    evidence: https://doc.e.foundation/os/apps/maps/
    note: Built from open source code, but the default Magic Earth maps app is proprietary.
  no_trackers:
    answer: partial
    evidence: https://e.foundation/legal-notice-privacy/
    note: No third-party trackers; the website uses self-hosted Matomo, and update servers collect statistics for internal use.
  no_ads:
    answer: yes
    evidence: https://e.foundation/legal-notice-privacy/
    note: Funded by sales of Murena phones and cloud plans and by donations; the privacy policy says data is never sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
