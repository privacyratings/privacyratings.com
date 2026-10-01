---
name: mpv
description: Free, open source command-line media player for Windows, macOS and Linux based on FFmpeg, with a minimal on-screen controller, scripting in Lua and JavaScript, and libmpv for embedding in other apps.
website: https://mpv.io
source: https://github.com/mpv-player/mpv
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mpv-player/mpv/blob/master/Copyright
    note: GPL-2.0-or-later, or LGPL-2.1-or-later when built without GPL-only files.
  no_trackers:
    answer: yes
    evidence: https://github.com/mpv-player/mpv
    note: No telemetry or analytics in the source code, and the project website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://github.com/mpv-player/mpv
    note: Volunteer-maintained free software with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
