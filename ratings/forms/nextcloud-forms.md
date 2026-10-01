---
name: Nextcloud Forms
description: Survey and questionnaire app for self-hosted Nextcloud servers. Responses stay on the server running Nextcloud.
website: https://apps.nextcloud.com/apps/forms
family: nextcloud
source: https://github.com/nextcloud/forms
jurisdiction: DE
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/nextcloud/forms/main/LICENSE
    note: Licensed under AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/nextcloud/forms
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://nextcloud.com/pricing/
    note: Free app funded by Nextcloud GmbH enterprise subscriptions. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
