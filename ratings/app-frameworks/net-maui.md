---
name: .NET MAUI
description: Microsoft's cross-platform UI framework for building native Android, iOS, macOS and Windows apps from a single C# and XAML codebase.
website: https://dotnet.microsoft.com/en-us/apps/maui
family: microsoft
aliases:
  - MAUI
source: https://github.com/dotnet/maui
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dotnet/maui/blob/main/LICENSE.txt
    note: MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/dotnet/core/tools/telemetry
    note: The .NET SDK sends usage telemetry by default until opted out, and dotnet.microsoft.com loads Microsoft analytics and Adobe Target.
  no_ads:
    answer: yes
    evidence: https://dotnet.microsoft.com/en-us/apps/maui
    note: Developed and funded by Microsoft, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - windows
  - macos
  - android
  - ios
---
