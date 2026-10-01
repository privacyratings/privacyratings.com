---
name: OsmAnd
description: Offline maps and navigation app built on OpenStreetMap data, with routing for driving, cycling and hiking, contour lines, GPX tracks and plugins. Developed by OsmAnd BV.
website: https://osmand.net
source: https://github.com/osmandapp/OsmAnd
jurisdiction: NL
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/osmandapp/OsmAnd/blob/master/LICENSE
    note: Code is GPL-3.0, but UI design and layouts are CC BY-NC-ND and some resources are proprietary.
  no_trackers:
    answer: partial
    evidence: https://osmand.net/docs/legal/privacy-policy/
    note: No third-party trackers, and the Exodus report finds none, but the app collects aggregated usage statistics, configurable in settings.
  no_ads:
    answer: yes
    evidence: https://osmand.net/docs/legal/privacy-policy/
    note: Funded by paid features and subscriptions. The privacy policy states user data is not shared or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
