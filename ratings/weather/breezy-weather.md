---
name: Breezy Weather
description: Open-source Android weather app with forecasts, nowcasting, air quality, pollen and alerts from more than 50 selectable weather sources.
website: https://github.com/breezy-weather/breezy-weather
source: https://github.com/breezy-weather/breezy-weather
platforms:
  - android
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/breezy-weather/breezy-weather/blob/main/LICENSE
    note: LGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.breezyweather/latest/
    note: The Exodus report finds no trackers, and the privacy policy states the app collects no personal data.
  no_ads:
    answer: yes
    evidence: https://github.com/breezy-weather/breezy-weather/blob/main/PRIVACY.md
    note: Free software with no ads. The privacy policy states no personal data is collected.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
