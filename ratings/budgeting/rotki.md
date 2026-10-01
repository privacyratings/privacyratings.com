---
name: rotki
description: Self-hosted, open source portfolio tracking and accounting tool for crypto assets and other investments, with data stored locally. Runs on Linux, macOS, Windows and Docker.
website: https://rotki.com
source: https://github.com/rotki/rotki
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rotki/rotki/blob/develop/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://docs.rotki.com/usage-guides/settings/general.html
    note: Anonymous usage analytics are sent to rotki by default and can be turned off in the settings.
  no_ads:
    answer: yes
    evidence: https://rotki.com/products
    note: Funded by premium subscriptions and sponsorships, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: DE
---
