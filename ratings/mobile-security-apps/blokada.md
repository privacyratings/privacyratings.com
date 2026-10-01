---
name: Blokada
description: Android and iOS app that blocks ads and trackers in all apps without root. Blokada 5 filters on the device, and Blokada 6 uses a subscription cloud DNS service.
website: https://blokada.org
source: https://github.com/blokadaorg/blokada
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/blokadaorg/blokada/blob/main/LICENSE
    note: Apps are open source under MPL-2.0; the Blokada Cloud server code used by Blokada 6 is not published.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.blokada.sex/latest/
    note: The Exodus reports for Blokada 6 and Blokada 5 find no trackers.
  no_ads:
    answer: yes
    evidence: https://community.blokada.org/t/privacy-policy/6
    note: Funded by subscriptions; the privacy policy limits data sharing to payment and email providers.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: SE
---
