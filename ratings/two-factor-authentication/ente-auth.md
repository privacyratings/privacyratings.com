---
name: Ente Auth
description: Free, open source TOTP authenticator for mobile, desktop and web. Works fully offline, or with an Ente account to sync codes across devices with end-to-end encrypted backups.
website: https://ente.com/auth
source: https://github.com/ente/ente
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ente/ente/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: no
    evidence: https://ente.com/privacy/
    note: The website loads PostHog analytics, and Exodus finds Sentry crash reporting in the Android app.
  no_ads:
    answer: yes
    evidence: https://ente.com/privacy/
    note: Free app from Ente, which is funded by subscriptions and states it does not sell personal information.
  independent_audit:
    answer: yes
    evidence: https://ente.com/reports/Cure53-Audit-Report-Oct-2025.pdf
    note: Full Cure53 report on the server code and infrastructure shared by Ente Photos and Ente Auth.
imported_from: awesome-privacy
jurisdiction: US
---
