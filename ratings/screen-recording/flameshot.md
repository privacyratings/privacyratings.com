---
name: Flameshot
description: Open-source screenshot tool for Linux, Windows and macOS with in-app annotation tools such as arrows, text, blur and highlighting, plus a command-line interface.
website: https://flameshot.org
source: https://github.com/flameshot-org/flameshot
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/flameshot-org/flameshot/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/flameshot-org/flameshot
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://flameshot.org/donate/
    note: Free open-source app with no ads, supported by donations and sponsors.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://flameshot.org/docs/advanced/protecting-your-privacy/
    note: Screenshots are saved locally or copied to the clipboard. Uploading to Imgur is an optional tool that asks for confirmation first.
  no_account_needed:
    answer: yes
    evidence: https://flameshot.org
    note: No account is needed.
---
