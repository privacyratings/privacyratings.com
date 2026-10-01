---
name: OONI
description: Free software and global measurement network that tests websites, apps and networks for censorship, blocking and traffic manipulation, and publishes the results as open data.
website: https://ooni.org
source: https://github.com/ooni/probe-cli
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/ooni/probe-cli/blob/master/LICENSE
    note: GPL-3.0; the probe engine and the multiplatform apps are both GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://ooni.org/about/data-policy/
    note: No third-party trackers. The website uses cookieless Umami Cloud analytics by default, OONI Explorer uses Sentry, and crash reporting in the apps is opt-in.
  no_ads:
    answer: yes
    evidence: https://ooni.org/about/supporters/
    note: Non-profit project funded by grants and donations, with no ads or data sales.
  independent_audit:
    answer: yes
    evidence: https://ooni.org/documents/ooni-penetration-test-report.pdf
    note: Full penetration test report by Radically Open Security covering the OONI API, backend and OONI Run.
---
