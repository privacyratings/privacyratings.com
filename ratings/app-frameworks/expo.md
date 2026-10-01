---
name: Expo
description: Framework and tooling built on React Native for building Android, iOS and web apps, with a CLI, SDK modules, file-based routing and optional cloud build services.
website: https://expo.dev
source: https://github.com/expo/expo
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/expo/expo/blob/main/LICENSE
    note: MIT-licensed. The EAS cloud build and update services are separate hosted products.
  no_trackers:
    answer: no
    evidence: https://docs.expo.dev/more/expo-cli/#telemetry
    note: The Expo CLI sends anonymous usage data by default until EXPO_NO_TELEMETRY is set, and expo.dev loads the RudderStack analytics SDK.
  no_ads:
    answer: yes
    evidence: https://expo.dev/pricing
    note: Funded by paid Expo Application Services plans, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
  - web
---
