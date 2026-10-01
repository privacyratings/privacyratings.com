---
name: Home Assistant
description: Open source home automation platform that runs locally on a Raspberry Pi, mini PC or server and controls thousands of device brands, with companion apps for phones and computers.
website: https://www.home-assistant.io
source: https://github.com/home-assistant/core
jurisdiction: CH
platforms:
  - linux
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/home-assistant/core/blob/dev/LICENSE.md
    note: Apache-2.0. The companion apps are also open source.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/io.homeassistant.companion.android/latest/
    note: Usage analytics are opt-in and the website uses self-hosted Plausible, but the Play Store Android app sends Sentry crash reports by default.
  no_ads:
    answer: yes
    evidence: https://www.home-assistant.io/cloud/
    note: Funded by optional Home Assistant Cloud subscriptions from Nabu Casa and by the Open Home Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
