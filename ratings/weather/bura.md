---
name: Bura
description: Open-source Android weather app that shows forecasts from Open-Meteo with graphs, works offline and does not access the device location.
website: https://github.com/davidtakac/bura
source: https://github.com/davidtakac/bura
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/davidtakac/bura/blob/dev/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.davidtakac.bura/latest/
    note: The Exodus report finds no trackers in the Android app.
  no_ads:
    answer: yes
    evidence: https://github.com/davidtakac/bura
    note: Free hobby project with no ads. The developer does not accept donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
