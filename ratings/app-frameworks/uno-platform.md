---
name: Uno Platform
description: Cross-platform UI framework for .NET that runs C# and XAML apps on Windows, macOS, Linux, Android, iOS and WebAssembly, using WinUI APIs.
website: https://platform.uno
source: https://github.com/unoplatform/uno
jurisdiction: CA
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/unoplatform/uno/blob/master/License.md
    note: Apache-2.0 licensed. Some design and productivity tools are sold separately.
  no_trackers:
    answer: no
    evidence: https://platform.uno/docs/articles/uno-toolchain-telemetry.html
    note: The Uno Platform SDK collects build telemetry by default until opted out, and platform.uno loads Google Tag Manager, HubSpot, LinkedIn and X ad pixels.
  no_ads:
    answer: yes
    evidence: https://platform.uno/select-subscription/
    note: Funded by paid subscriptions for its developer tools and support, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
  - web
---
