---
name: Gadgetbridge
description: Open source Android app that connects smartwatches and fitness trackers to your phone without the vendor app or cloud account.
website: https://gadgetbridge.org
source: https://codeberg.org/Freeyourgadget/Gadgetbridge
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/Freeyourgadget/Gadgetbridge/src/branch/master/LICENSE
    note: AGPL-3.0 and Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/nodomain.freeyourgadget.gadgetbridge/latest/
    note: The Exodus report finds no trackers in the app, and the website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://liberapay.com/Gadgetbridge/donate
    note: Free app funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
