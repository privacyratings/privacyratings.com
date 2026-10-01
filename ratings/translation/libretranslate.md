---
name: LibreTranslate
description: Open-source machine translation API built on Argos Translate that can be self-hosted. A hosted instance at libretranslate.com offers a free web translator and paid API keys.
website: https://libretranslate.com
source: https://github.com/LibreTranslate/LibreTranslate
jurisdiction: US
domain: libretranslate.com
platforms:
  - web
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/LibreTranslate/LibreTranslate/main/LICENSE
    note: Licensed under AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://portal.libretranslate.com/privacy.html
    note: The privacy policy states no tracking technologies are used.
  no_ads:
    answer: yes
    evidence: https://portal.libretranslate.com/privacy.html
    note: Funded by paid API keys. The privacy policy states personal information is not shared.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  offline:
    answer: yes
    evidence: https://github.com/LibreTranslate/LibreTranslate
    note: Can be self-hosted so translation runs entirely on your own server with local models.
  no_retention:
    answer: yes
    evidence: https://portal.libretranslate.com/privacy.html
    note: The hosted service does not store or log translation texts. IP addresses and API keys are kept for two days for abuse prevention.
---
