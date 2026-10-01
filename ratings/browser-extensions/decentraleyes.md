---
name: Decentraleyes
description: Browser extension that serves common JavaScript libraries from local copies instead of third-party content delivery networks, reducing tracking by those CDNs.
website: https://decentraleyes.org
source: https://git.synz.io/Synzvato/decentraleyes
criteria:
  open_source:
    answer: yes
    evidence: https://git.synz.io/Synzvato/decentraleyes/-/blob/master/LICENSE.txt
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/privacy/
    note: The extension states it does not collect any data.
  no_ads:
    answer: yes
    evidence: https://decentraleyes.org/donate/
    note: Free and funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
