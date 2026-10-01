---
name: Mattermost Boards
description: Open-source Kanban and project board plugin for self-hosted Mattermost servers, continuing the Focalboard project.
website: https://github.com/mattermost/mattermost-plugin-boards
family: mattermost
source: https://github.com/mattermost/mattermost-plugin-boards
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - linux
aliases:
  - Focalboard
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mattermost/mattermost-plugin-boards/blob/main/LICENSE.txt
    note: AGPL-3.0 and Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://docs.mattermost.com/administration-guide/manage/telemetry
    note: Runs inside Mattermost, whose server telemetry is on by default. Self-hosted administrators can turn it off.
  no_ads:
    answer: yes
    evidence: https://mattermost.com/pricing/
    note: Free plugin for Mattermost, which is funded by commercial licenses and subscriptions, with no ads in the product.
  independent_audit:
    answer: no
    note: No independent audit of the plugin is published.
---
