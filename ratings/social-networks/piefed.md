---
name: PieFed
description: Federated, self-hostable link aggregator and forum built on ActivityPub, compatible with Lemmy communities.
website: https://join.piefed.social
source: https://codeberg.org/rimu/pyfedi
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/rimu/pyfedi/src/branch/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://join.piefed.social
    note: The project states PieFed has no tracking. Error reporting to Sentry is only used when a server admin configures it.
  no_ads:
    answer: yes
    evidence: https://join.piefed.social
    note: The project states PieFed has no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
