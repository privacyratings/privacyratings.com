---
name: Visual Studio Code
description: Microsoft's code editor with built-in Git support, debugging, AI features and an extension marketplace. Built from the MIT-licensed Code - OSS repository, with Microsoft branding and proprietary components.
website: https://code.visualstudio.com
family: microsoft
aliases:
  - VS Code
mainstream: true
source: https://github.com/microsoft/vscode
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://code.visualstudio.com/docs/supporting/faq#_what-is-the-difference-between-the-vscode-repository-and-the-microsoft-visual-studio-code-distribution
    note: The Code - OSS source is MIT, but Microsoft's Visual Studio Code builds add proprietary components under a Microsoft product license.
  no_trackers:
    answer: partial
    evidence: https://code.visualstudio.com/docs/configure/telemetry
    note: Crash reports, error telemetry and usage data are sent to Microsoft by default and can be turned off with the telemetry.telemetryLevel setting. Extensions may send their own telemetry.
  no_ads:
    answer: yes
    evidence: https://code.visualstudio.com/docs/supporting/faq#_is-vs-code-free
    note: Free product from Microsoft with no ads in the editor.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
