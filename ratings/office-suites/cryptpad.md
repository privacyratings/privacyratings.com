---
name: CryptPad
description: End-to-end encrypted collaboration suite with rich text, spreadsheets, presentations, Markdown, Kanban, forms, diagrams and a file drive. Use the hosted CryptPad.fr service or self-host it.
website: https://cryptpad.org
source: https://github.com/cryptpad/cryptpad
domain: cryptpad.org
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cryptpad/cryptpad/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/cryptpad/cryptpad/blob/main/lib/stats.js
    note: No third-party trackers. Self-hosted servers send a daily instance report to the CryptPad team by default, which administrators can turn off.
  no_ads:
    answer: yes
    evidence: https://cryptpad.org/pricing/
    note: Funded by paid plans on CryptPad.fr, support contracts, grants and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
jurisdiction: FR
---
