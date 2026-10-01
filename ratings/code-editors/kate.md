---
name: Kate
description: Text and code editor from KDE with tabs, split views, LSP support, a built-in terminal and plugins.
website: https://kate-editor.org
source: https://invent.kde.org/utilities/kate
jurisdiction: DE
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://apps.kde.org/kate/
    note: LGPL-2.1-or-later.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy/
    note: No third-party trackers, and KDE app telemetry is opt-in. KDE websites use self-hosted Matomo with cookies disabled and IP addresses anonymized.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: KDE community project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
