---
name: Friendica
description: Federated, self-hostable social network that connects over ActivityPub, diaspora* and other protocols, with per-post access lists and RSS import.
website: https://friendi.ca
source: https://github.com/friendica/friendica
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/friendica/friendica/blob/develop/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/friendica/friendica
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://friendi.ca/resources/contribute/
    note: Developed by volunteers, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
