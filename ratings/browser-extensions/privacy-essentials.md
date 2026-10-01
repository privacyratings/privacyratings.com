---
name: Privacy Essentials
description: "DuckDuckGo browser extension that blocks trackers, upgrades connections to HTTPS and sets DuckDuckGo as the search engine."
website: https://duckduckgo.com/duckduckgo-help-pages/desktop/adding-duckduckgo-to-your-browser
source: https://github.com/duckduckgo/duckduckgo-privacy-extension
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/duckduckgo/duckduckgo-privacy-extension/blob/main/LICENSE.md
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://duckduckgo.com/duckduckgo-help-pages/privacy/atb/
    note: No third-party trackers, but the extension sends an anonymous usage-counting request with each search, with no documented way to turn it off.
  no_ads:
    answer: partial
    evidence: https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/privacy/
    note: The extension has no ads, but DuckDuckGo is funded by search ads based on the current search, not a profile.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: US
---
