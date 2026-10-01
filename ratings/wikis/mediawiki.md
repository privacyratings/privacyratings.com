---
name: MediaWiki
description: Wiki software developed by the Wikimedia Foundation that runs Wikipedia. Self-hosted PHP application with page history, templates, a visual editor and a large extension ecosystem.
website: https://www.mediawiki.org
source: https://github.com/wikimedia/mediawiki
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/wikimedia/mediawiki/blob/master/COPYING
    note: GPL-2.0-or-later.
  no_trackers:
    answer: partial
    evidence: https://www.mediawiki.org/wiki/Manual:$wgPingback
    note: No third-party trackers. The web installer pre-selects an anonymous pingback that sends installation statistics to the Wikimedia Foundation, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://foundation.wikimedia.org/wiki/Policy:Privacy_policy
    note: Developed by the donation-funded Wikimedia Foundation. The privacy policy states personal information is not sold or rented.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
