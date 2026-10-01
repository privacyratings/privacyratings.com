---
name: ScreenToGif
description: Open-source screen, webcam and sketchboard recorder for Windows with a built-in editor. Recordings can be saved as GIF, APNG, video or image files.
website: https://nicke.tech/screentogif
source: https://github.com/NickeManarin/ScreenToGif
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/NickeManarin/ScreenToGif/blob/master/LICENSE.txt
    note: Ms-PL.
  no_trackers:
    answer: partial
    evidence: https://github.com/NickeManarin/ScreenToGif
    note: No telemetry or analytics in the source code, but the website loads Microsoft Clarity analytics after the visitor accepts analytics cookies.
  no_ads:
    answer: yes
    evidence: https://github.com/NickeManarin/ScreenToGif
    note: Free open-source app with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://github.com/NickeManarin/ScreenToGif
    note: Recordings are edited and saved as local files. Uploading to online services is an optional export step.
  no_account_needed:
    answer: yes
    evidence: https://github.com/NickeManarin/ScreenToGif
    note: No account is needed.
---
