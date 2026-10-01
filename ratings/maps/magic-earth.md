---
name: Magic Earth
description: Navigation app using OpenStreetMap data, with offline maps, traffic, public transit and activity recording, and paid premium features. Run by Magic Lane International B.V.
website: https://www.magicearth.com
jurisdiction: NL
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.generalmagic.magicearth/latest/
    note: The Exodus report finds no trackers, but the terms say location data and device identifiers are used for analytics.
  no_ads:
    answer: yes
    evidence: https://www.magicearth.com/terms-and-conditions
    note: Funded by premium licenses, and the privacy policy says information is not sold or rented to marketers or third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
