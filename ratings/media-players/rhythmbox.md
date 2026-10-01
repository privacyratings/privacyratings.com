---
name: Rhythmbox
description: Open source music player and library manager for the GNOME desktop on Linux, with internet radio, podcasts, audio CD playback and plugins such as Last.fm and ListenBrainz scrobbling.
website: https://gnome.pages.gitlab.gnome.org/rhythmbox/
source: https://gitlab.gnome.org/GNOME/rhythmbox
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GNOME/rhythmbox/blob/master/COPYING
    note: GPL-2.0-or-later with an exception for GStreamer plugins.
  no_trackers:
    answer: yes
    evidence: https://github.com/GNOME/rhythmbox
    note: No telemetry or analytics in the source code, and the project website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: Part of the GNOME project, supported by the non-profit GNOME Foundation through donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
