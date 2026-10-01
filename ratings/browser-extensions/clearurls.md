---
name: ClearURLs
description: "Browser extension that removes tracking parameters from URLs and skips tracking redirects using a public rule list."
website: https://clearurls.xyz
source: https://github.com/ClearURLs/Addon
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ClearURLs/Addon/blob/master/LICENSE
    note: LGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/clearurls/privacy/
    note: The extension collects no usage data and contains no analytics; it only connects to fetch rule updates.
  no_ads:
    answer: yes
    evidence: https://docs.clearurls.xyz/#donation
    note: Free and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
