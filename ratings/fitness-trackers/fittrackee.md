---
name: FitTrackee
description: Self-hosted open source web application for tracking outdoor workouts from GPS files or manual entries, with maps and statistics.
website: https://docs.fittrackee.org
source: https://codeberg.org/FitTrackee/FitTrackee
platforms:
  - web
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://codeberg.org/FitTrackee/FitTrackee/src/branch/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://codeberg.org/FitTrackee/FitTrackee
    note: No telemetry or analytics in the source code, and the documentation website loads no known trackers.
  no_ads:
    answer: yes
    evidence: https://codeberg.org/FitTrackee/FitTrackee
    note: Free open source software you host yourself, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
