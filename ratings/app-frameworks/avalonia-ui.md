---
name: Avalonia UI
description: Cross-platform UI framework for .NET that draws its own controls with XAML and C#, targeting Windows, macOS, Linux, Android, iOS and WebAssembly.
website: https://avaloniaui.net
aliases:
  - Avalonia
source: https://github.com/AvaloniaUI/Avalonia
jurisdiction: EE
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/AvaloniaUI/Avalonia/blob/main/licence.md
    note: MIT-licensed. Some add-on controls and the XPF product are sold separately under proprietary licenses.
  no_trackers:
    answer: no
    evidence: https://avaloniaui.net/
    note: The avaloniaui.net website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://avaloniaui.net/pricing
    note: Funded by paid add-ons, enterprise products and support, with no ads in the framework.
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
