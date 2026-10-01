---
name: Filelight
description: KDE's disk usage app. It shows folders as concentric rings, scans local, removable and remote disks, and integrates with the Dolphin file manager.
website: https://apps.kde.org/filelight/
source: https://invent.kde.org/utilities/filelight
jurisdiction: DE
platforms:
  - linux
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/utilities/filelight/-/tree/master/LICENSES
    note: GPL-2.0-only or GPL-3.0-only.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: No third-party trackers, and the app has no telemetry. KDE websites use self-hosted Matomo with cookies disabled and IP addresses anonymized.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Free open-source app with no ads, funded by donations to KDE e.V.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: Scans run locally. KDE apps only send data as a result of an explicit user action, such as scanning a remote folder.
  no_account_needed:
    answer: yes
    evidence: https://apps.kde.org/filelight/
    note: No account needed.
---
