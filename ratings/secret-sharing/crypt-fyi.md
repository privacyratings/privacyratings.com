---
name: crypt.fyi
description: Ephemeral secret sharing service that encrypts text and files in the browser before upload, with burn-after-reading, expiry, password and IP restrictions. Offers web, CLI and browser extension clients and can be self-hosted.
website: https://www.crypt.fyi
source: https://github.com/osbytes/crypt.fyi
domain: crypt.fyi
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/osbytes/crypt.fyi/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: yes
    evidence: https://www.crypt.fyi/privacy
    note: The privacy policy shares data only with hosting providers and user-set webhooks, and the site's Content Security Policy allows no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://www.crypt.fyi/privacy
    note: Free open source service without ads. The privacy policy states data is not shared with third parties beyond hosting.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
imported_from: awesome-privacy
---
