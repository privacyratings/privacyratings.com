---
name: Sandstorm
description: Open source platform for self-hosting web apps. Apps are installed from the Sandstorm App Market with a few clicks, and each document or chat runs in its own isolated sandbox.
website: https://sandstorm.org
source: https://github.com/sandstorm-io/sandstorm
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sandstorm-io/sandstorm/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/sandstorm-io/sandstorm/blob/master/shell/imports/server/stats-server.js
    note: Usage statistics are only sent after a server administrator opts in. No third-party trackers.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/sandstormcommunity
    note: Volunteer project funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: US
---
