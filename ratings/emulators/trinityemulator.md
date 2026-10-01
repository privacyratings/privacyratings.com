---
name: TrinityEmulator
description: Research Android emulator for Windows, built on QEMU, that runs Android-x86 and renders graphics through a technique called graphics projection. Released as a beta research artifact.
website: https://github.com/TrinityEmulator/TrinityEmulator
source: https://github.com/TrinityEmulator/TrinityEmulator
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/TrinityEmulator/TrinityEmulator/blob/main/LICENSE
    note: GPL-2.0.
  no_trackers:
    answer: no
    evidence: https://github.com/TrinityEmulator/TrinityEmulator/blob/main/README.md
    note: The bundled Android-x86 guest image includes Google apps (OpenGApps), which send data to Google.
  no_ads:
    answer: yes
    evidence: https://github.com/TrinityEmulator/TrinityEmulator/blob/main/README.md
    note: Academic research project with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
