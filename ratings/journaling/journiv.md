---
name: Journiv
description: Self-hosted journal web app with mood tracking, writing prompts, media uploads, search and writing statistics, run with Docker. Released as beta software.
website: https://www.journiv.com
source: https://github.com/journiv/journiv-app
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/journiv/journiv-app/blob/main/LICENSE.md
    note: Source-available under the PolyForm Noncommercial License 1.0.0, which is not OSI-approved.
  no_trackers:
    answer: partial
    evidence: https://github.com/journiv/journiv-app/blob/main/app/services/version_checker.py
    note: No third-party trackers, but each instance registers with the Journiv Plus server and sends its version, platform and database type for update checks by default. An admin can turn this off.
  no_ads:
    answer: yes
    evidence: https://www.journiv.com/plus
    note: Funded by optional Journiv Plus licenses. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
