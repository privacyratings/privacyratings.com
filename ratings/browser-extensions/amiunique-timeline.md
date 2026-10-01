---
name: AmIUnique Timeline
description: "Research extension from the AmIUnique project that periodically records the browser's fingerprint so users can see how it changes over time."
website: https://amiunique.org/timeline
source: https://github.com/plaperdr/amiunique-webextension-firefox
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/plaperdr/amiunique-webextension-firefox/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://addons.mozilla.org/en-US/firefox/addon/amiunique/privacy/
    note: No third-party trackers, but the extension sends a browser fingerprint and hashed IP address to the AmIUnique server every four hours, and this cannot be turned off.
  no_ads:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/amiunique/privacy/
    note: Run as an Inria research project with no ads; data is only shared as aggregated statistics.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: FR
---
