---
name: Obtainium
description: Open source Android app that installs and updates apps directly from their release pages, such as GitHub, GitLab, Codeberg and F-Droid repositories, and notifies when new releases appear.
website: https://obtainium.imranr.dev
source: https://github.com/ImranR98/Obtainium
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ImranR98/Obtainium/blob/main/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://obtainium.imranr.dev/
    note: No third-party trackers in the app. The website's self-hosted Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/dev.imranr.obtainium.fdroid/latest/
    note: Free volunteer project with no ads or ad libraries.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_account_needed:
    answer: yes
    evidence: https://wiki.obtainium.imranr.dev/
    note: Apps are added by release page URL, with no account.
  tracker_info:
    answer: no
    note: Obtainium does not show trackers or anti-features for apps.
---
