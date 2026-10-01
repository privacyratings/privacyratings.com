---
name: Thorium Reader
description: Open-source desktop reader for EPUB, PDF, audiobooks and comics from EDRLab, a French nonprofit. It supports LCP-protected library loans, read aloud and screen readers.
website: https://www.edrlab.org/software/thorium-reader/
source: https://github.com/edrlab/thorium-reader
jurisdiction: FR
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/edrlab/thorium-reader/develop/LICENSE
    note: Licensed under BSD-3-Clause.
  no_trackers:
    answer: no
    evidence: https://raw.githubusercontent.com/edrlab/thorium-reader/develop/src/main/analytics/measurementProtocol.ts
    note: The app sends Google Analytics telemetry unless disabled in settings, and the website loads Google Tag Manager and Matomo Cloud.
  no_ads:
    answer: yes
    evidence: https://www.edrlab.org/about/
    note: Free software developed by EDRLab, a nonprofit association funded by its members. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
