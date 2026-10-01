---
name: YOURLS
description: Self-hosted PHP URL shortener with a plugin system, an API, bookmarklets and click statistics for your own short domain.
website: https://yourls.org
source: https://github.com/YOURLS/YOURLS
platforms:
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/YOURLS/YOURLS/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/YOURLS/YOURLS/blob/master/includes/functions-http.php
    note: The update check sends usage statistics such as the site URL and link and click counts to api.yourls.org by default. It can be turned off with YOURLS_NO_VERSION_CHECK.
  no_ads:
    answer: yes
    evidence: https://yourls.org
    note: Free software funded by sponsors through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
