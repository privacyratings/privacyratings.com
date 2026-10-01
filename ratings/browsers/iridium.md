---
name: Iridium
description: Chromium fork that disables or makes opt-in the transmission of queries, keywords and metrics to Google and other services. Distributed as source code tarballs only.
website: https://iridiumbrowser.de
imported_from: awesome-privacy
source: https://iridiumbrowser.de/downloads/source
jurisdiction: DE
criteria:
  open_source:
    answer: yes
    evidence: https://iridiumbrowser.de/faq
    note: Uses the same open-source licenses as Chromium. Source is published as tarballs and in a Git repository.
  no_trackers:
    answer: yes
    evidence: https://iridiumbrowser.de/about
    note: Metrics and partial queries are only sent with the user's approval.
  no_ads:
    answer: yes
    evidence: https://iridiumbrowser.de/about
    note: No ads in the browser and no data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: no
    note: No built-in tracker blocking.
  fingerprinting_protection:
    answer: no
    note: No fingerprinting protection beyond Chromium defaults.
  no_google_services:
    answer: partial
    evidence: https://iridiumbrowser.de/faq
    note: Google Safe Browsing is on by default and contacts Google servers, but can be turned off. Google sign-in and sync are not available.
  security_updates:
    answer: no
    evidence: https://iridiumbrowser.de/news/archive/
    note: Only source tarballs are published, with no automatic updates, and releases trail current Chromium by several weeks.
---
