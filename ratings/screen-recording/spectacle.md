---
name: Spectacle
description: KDE's screenshot and screen recording app for Linux. It captures the desktop, a monitor, a window or a region, with annotation tools, and saves, copies or shares the result.
website: https://apps.kde.org/spectacle/
source: https://invent.kde.org/plasma/spectacle
jurisdiction: DE
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://invent.kde.org/plasma/spectacle/-/tree/master/LICENSES
    note: GPL-2.0-or-later and LGPL, with some files under BSD-3-Clause.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy/
    note: No third-party trackers, and KDE app telemetry is opt-in. KDE websites use self-hosted Matomo with cookies disabled and IP addresses anonymized.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: Free open-source app with no ads, funded by donations to KDE e.V.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: Captures are saved locally. KDE apps only send data as a result of an explicit user action, such as sharing a capture.
  no_account_needed:
    answer: yes
    evidence: https://apps.kde.org/spectacle/
    note: No account is needed.
---
