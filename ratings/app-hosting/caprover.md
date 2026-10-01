---
name: CapRover
description: Open-source, self-hosted platform for deploying apps and databases on Docker Swarm, with nginx load balancing, Let's Encrypt certificates, a web dashboard and one-click apps.
website: https://caprover.com
source: https://github.com/caprover/caprover
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/caprover/caprover/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://github.com/caprover/caprover/blob/master/src/user/events/emitter/AnalyticsLogger.ts
    note: The website uses Google Analytics, and instances send usage events to CapRover's analytics server unless CAPROVER_DISABLE_ANALYTICS or DO_NOT_TRACK is set.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/caprover
    note: Free open-source project funded by donations through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
