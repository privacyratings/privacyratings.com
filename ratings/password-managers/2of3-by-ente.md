---
name: 2of3 by Ente
description: Splits a recovery key, password or other secret into three cards with Shamir secret sharing, so that any two cards recover it. It runs entirely in the browser and includes an offline recovery page.
website: https://2of3.ente.com
source: https://github.com/ente/ente/tree/main/web/apps/twoof3
domain: 2of3.ente.com
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ente/ente/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/ente/ente/blob/main/web/apps/twoof3/package.json
    note: The page loads no third-party scripts and the app has no analytics dependencies.
  no_ads:
    answer: yes
    evidence: https://ente.com/privacy/
    note: Free tool from Ente, which is funded by subscriptions and states it does not sell personal information.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://2of3.ente.com/
    note: Secrets are split in the browser and never sent to a server.
  self_host_or_local:
    answer: yes
    evidence: https://2of3.ente.com/
    note: Cards are printed or downloaded and kept offline, with a standalone recovery page.
  export:
    answer: yes
    evidence: https://2of3.ente.com/
    note: Cards can be printed or downloaded as images along with an offline recovery page.
imported_from: awesome-privacy
jurisdiction: US
---
