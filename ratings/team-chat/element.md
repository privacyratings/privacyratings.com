---
name: Element
description: Matrix client for web, desktop and mobile with end-to-end encrypted chats, group rooms, file sharing and voice and video calls. Built by Element, which also sells hosted and self-hosted Matrix servers.
website: https://element.io
source: https://github.com/element-hq/element-web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/element-hq/element-web/blob/develop/LICENSE-AGPL-3.0
    note: AGPL-3.0 and GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://element.io/legal/privacy
    note: The website loads HubSpot, and the privacy policy lists HubSpot for website analytics and marketing.
  no_ads:
    answer: yes
    evidence: https://element.io/pricing
    note: Funded by paid hosting and enterprise subscriptions, with no ads; Element commits not to sell personal information.
  independent_audit:
    answer: partial
    evidence: https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf
    note: Only the vodozemac encryption library used by Element has a public full audit, and it is older than three years.
imported_from: awesome-privacy
jurisdiction: GB
---
