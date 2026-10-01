---
name: Piwigo
description: Photo gallery software for publishing and managing large photo collections on the web, with albums, tags, user permissions, plugins and mobile apps. It can be self-hosted or used as a paid hosted service from its developers.
website: https://piwigo.org
source: https://github.com/Piwigo/Piwigo
jurisdiction: FR
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Piwigo/Piwigo/blob/master/LICENSE.txt
    note: GPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://github.com/Piwigo/Piwigo/blob/master/include/config_default.inc.php
    note: No third-party trackers on the website or in the software, but self-hosted installs send anonymous technical data and statistics to piwigo.org weekly by default, which can be turned off in the configuration.
  no_ads:
    answer: yes
    evidence: https://doc.piwigo.org/legal/privacy/
    note: Funded by subscriptions to the hosted service, with no ads. The privacy policy states personal information is not rented or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
