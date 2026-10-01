---
name: TranslateLocally
description: Open-source desktop app that translates text on the device with downloadable neural models from the Bergamot project, originally built at the University of Edinburgh. Browser extensions are also available.
website: https://translatelocally.com/downloads/
source: https://github.com/XapaJIaMnu/translateLocally
jurisdiction: GB
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/XapaJIaMnu/translateLocally/master/LICENCE.md
    note: Licensed under the MIT License.
  no_trackers:
    answer: yes
    evidence: https://github.com/XapaJIaMnu/translateLocally
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://translatelocally.com/downloads/
    note: Free download from Efficient Translation Limited, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://raw.githubusercontent.com/XapaJIaMnu/translateLocally/master/README.md
    note: Translation runs locally. The internet is only used to list and download language models.
  no_retention:
    answer: yes
    evidence: https://raw.githubusercontent.com/XapaJIaMnu/translateLocally/master/README.md
    note: Text is translated on the device with local models and is not sent to a server.
---
