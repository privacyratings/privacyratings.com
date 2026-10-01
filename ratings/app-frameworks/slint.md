---
name: Slint
description: UI toolkit for building native user interfaces with a declarative markup language, with APIs for Rust, C++, JavaScript and Python, for desktop, mobile and embedded devices.
website: https://slint.dev
source: https://github.com/slint-ui/slint
jurisdiction: DE
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/slint-ui/slint/blob/master/LICENSE.md
    note: Available under GPLv3, a royalty-free license for proprietary desktop and mobile apps, or a commercial license.
  no_trackers:
    answer: partial
    evidence: https://github.com/slint-ui/slint/blob/master/editors/vscode/src/telemetry.ts
    note: The VS Code extension sends usage data to slint.dev unless VS Code telemetry is turned off, and slint.dev uses Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://slint.dev/pricing
    note: Funded by commercial licenses and support from SixtyFPS GmbH, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - web
---
