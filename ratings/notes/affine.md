---
name: AFFiNE
description: Workspace that combines documents, whiteboards and databases on one canvas, with local-first storage, real-time collaboration, AI features and optional cloud sync or self-hosting.
website: https://affine.pro
source: https://github.com/toeverything/AFFiNE
jurisdiction: SG
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/toeverything/AFFiNE/blob/canary/LICENSE
    note: All code is public. The apps are MIT, and the server backend in the same repository uses a source-available Enterprise Edition license.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/app.affine.pro/latest/
    note: Exodus finds Google Firebase Analytics and CrashLytics in the Android app, and the website loads Google Analytics, PostHog and TikTok scripts.
  no_ads:
    answer: partial
    evidence: https://affine.pro/privacy
    note: Funded by paid plans with no ads in the apps, but the privacy policy allows using personal data to personalize advertising within the services.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
