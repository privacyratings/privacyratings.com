---
name: XWiki
description: Self-hosted enterprise wiki written in Java, with structured data, scripting and an extension system for building wiki applications. Developed by XWiki SAS and its community.
website: https://www.xwiki.org
source: https://github.com/xwiki/xwiki-platform
jurisdiction: FR
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/xwiki/xwiki-platform/blob/master/LICENSE
    note: LGPL-2.1.
  no_trackers:
    answer: partial
    evidence: https://www.xwiki.org/xwiki/bin/view/Main/LegalNotice/
    note: No third-party trackers. The xwiki.org site uses Matomo analytics, and installations send a daily anonymous ping to XWiki by default, which can be disabled.
  no_ads:
    answer: yes
    evidence: https://xwiki.com/en/pricing
    note: Funded by paid support, XWiki Pro and cloud subscriptions from XWiki SAS, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
