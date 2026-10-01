---
name: ZEUS
description: Self-custodial Bitcoin and Lightning wallet for Android and iOS that runs an embedded Lightning node or connects to a personal LND, Core Lightning or other remote node.
website: https://zeusln.com
source: https://github.com/ZeusLN/zeus
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ZeusLN/zeus/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://zeusln.com/privacy-policy
    note: The privacy policy states the app uses no tracking technology and lets no third parties track users. The Exodus report finds no trackers.
  no_ads:
    answer: yes
    evidence: https://zeusln.com/privacy-policy
    note: No ads, and the privacy policy states no personal information is collected or shared when using the app.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
