---
name: Android Emulator
description: Google's emulator for running Android virtual devices on a computer, included with Android Studio and based on QEMU.
website: https://developer.android.com/studio/run/emulator
source: https://android.googlesource.com/platform/external/qemu
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://android.googlesource.com/platform/external/qemu/+/refs/heads/emu-main-dev/COPYING
    note: GPL-2.0. Google Play system images are proprietary.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The developer.android.com website uses Google Analytics, and Android Studio and the emulator can send usage statistics and crash reports to Google.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Made by Google, which is funded by advertising and uses data collected across its services for ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
