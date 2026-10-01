---
name: Zed
description: Code editor written in Rust with GPU-accelerated rendering, real-time collaboration and built-in AI agent features.
website: https://zed.dev
source: https://github.com/zed-industries/zed
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/zed-industries/zed/blob/main/LICENSE-GPL
    note: GPL-3.0-or-later, with some components under Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://zed.dev/privacy-policy
    note: The website uses Amplitude analytics, and the editor sends crash reports and usage metrics by default, which can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://zed.dev/privacy-policy#how-we-disclose-the-personal-data-we-collect
    note: Funded by paid plans. The privacy policy states personal data is not sold or shared for cross-context advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
