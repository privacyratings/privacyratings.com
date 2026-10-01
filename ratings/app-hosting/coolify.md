---
name: Coolify
description: Open-source, self-hosted platform for deploying apps, databases and one-click services to your own servers over SSH. A paid hosted Coolify Cloud dashboard is also available.
website: https://coolify.io
source: https://github.com/coollabsio/coolify
jurisdiction: HU
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/coollabsio/coolify/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/coollabsio/coolify/blob/main/app/Console/Commands/Init.php
    note: Self-hosted instances send an anonymous installation ping by default, which can be turned off in settings. Coolify Cloud loads Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://coolify.io/pricing
    note: Funded by Coolify Cloud subscriptions and sponsors, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
