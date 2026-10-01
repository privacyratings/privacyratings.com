---
name: LocalCDN
description: "Browser extension that emulates common web frameworks such as jQuery and Bootstrap from local copies, blocking requests to third-party CDNs."
website: https://www.localcdn.org
source: https://codeberg.org/nobody/LocalCDN
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/nobody/LocalCDN/src/branch/main/LICENSE.txt
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/privacy/
    note: The extension collects no data, and the website uses no cookies or analytics.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/LocalCDN
    note: Free and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
