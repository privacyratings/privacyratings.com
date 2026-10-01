---
name: balenaEtcher
description: A cross-platform app from balena that writes OS images to SD cards and USB drives and validates the written data.
website: https://etcher.balena.io
source: https://github.com/balena-io/etcher
jurisdiction: GB
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/balena-io/etcher/blob/master/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://github.com/balena-io/etcher/blob/master/lib/gui/app/models/settings.ts
    note: Error reporting to balena through Sentry is on by default and can be turned off. The website loads Google Analytics, Amplitude and LinkedIn tracking.
  no_ads:
    answer: partial
    evidence: https://www.balena.io/privacy-policy
    note: The app shows balena project banners while flashing. Balena shares data with advertising partners to market its own services and states it does not sell personal information.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
