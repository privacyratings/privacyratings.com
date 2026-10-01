---
name: SimpleScreenRecorder
description: Open-source screen recorder for Linux, built on FFmpeg, that records the screen, a window or a region with audio to video files and can also live stream.
website: https://www.maartenbaert.be/simplescreenrecorder/
source: https://github.com/MaartenBaert/ssr
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/MaartenBaert/ssr/blob/master/COPYING
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/MaartenBaert/ssr
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.maartenbaert.be/simplescreenrecorder/
    note: Free open-source app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://www.maartenbaert.be/simplescreenrecorder/
    note: Recordings are saved to local files. Live streaming only happens when set up by the user.
  no_account_needed:
    answer: yes
    evidence: https://www.maartenbaert.be/simplescreenrecorder/
    note: No account is needed.
---
