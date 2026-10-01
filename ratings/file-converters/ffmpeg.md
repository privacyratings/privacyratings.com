---
name: FFmpeg
description: Cross-platform command-line tools and libraries to record, convert and stream audio and video, supporting a wide range of codecs and formats.
website: https://ffmpeg.org
source: https://code.ffmpeg.org/FFmpeg/FFmpeg
criteria:
  open_source:
    answer: yes
    evidence: https://code.ffmpeg.org/FFmpeg/FFmpeg/src/branch/master/LICENSE.md
    note: LGPL-2.1 or later, with optional GPL-2.0 or later components.
  no_trackers:
    answer: yes
    evidence: https://code.ffmpeg.org/FFmpeg/FFmpeg
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://ffmpeg.org/donations.html
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
