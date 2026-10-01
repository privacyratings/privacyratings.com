---
name: Zorin OS
description: An Ubuntu-based Linux distribution from Zorin Technology Group, with desktop layouts that resemble Windows or macOS.
website: https://zorin.com/os/
source: https://launchpad.net/~zorinos
jurisdiction: IE
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://zorin.com/about/#source-code
    note: Built on open source software, with source packages published on Launchpad and GitHub.
  no_trackers:
    answer: partial
    evidence: https://zorin.com/legal/privacy/
    note: No third-party trackers. The Zorin OS Census package pings Zorin's servers with an anonymous installation ID by default and can be removed; the website uses Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://zorin.com/about/#funding
    note: Funded by Zorin OS Pro sales and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
