---
name: Nerves
description: Elixir platform for building and deploying embedded software on devices such as the Raspberry Pi, producing minimal Linux firmware images.
website: https://nerves-project.org
source: https://github.com/nerves-project/nerves
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nerves-project/nerves/blob/main/LICENSES/Apache-2.0.txt
    note: Apache-2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://github.com/nerves-project/nerves
    note: No telemetry or analytics in the source code, and the website loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://opencollective.com/nerves-project
    note: Funded by donations and sponsors through Open Collective, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
