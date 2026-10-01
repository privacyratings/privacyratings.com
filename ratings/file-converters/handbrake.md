---
name: HandBrake
description: A video transcoder that converts video from nearly any format to modern codecs such as H.264, H.265 and AV1, with presets for common devices.
website: https://handbrake.fr
source: https://github.com/HandBrake/HandBrake
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/HandBrake/HandBrake/blob/master/LICENSE
    note: Mostly GPL-2.0, with some GPL-2.0-or-later and LGPL-2.1 files.
  no_trackers:
    answer: yes
    evidence: https://handbrake.fr/privacy.php
    note: No usage or error data is collected. The only network feature is an update check that can be turned off.
  no_ads:
    answer: yes
    evidence: https://handbrake.fr/privacy.php
    note: Volunteer project with no company or sponsors, and no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
