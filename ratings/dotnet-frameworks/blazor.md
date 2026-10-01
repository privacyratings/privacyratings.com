---
name: Blazor
description: Microsoft framework for building interactive web user interfaces in C# with Razor components, running on the server or in the browser through WebAssembly.
website: https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
family: microsoft
source: https://github.com/dotnet/aspnetcore
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dotnet/aspnetcore/blob/main/LICENSE.txt
    note: MIT-licensed as part of ASP.NET Core.
  no_trackers:
    answer: no
    evidence: https://learn.microsoft.com/en-us/dotnet/core/tools/telemetry
    note: The .NET SDK sends usage telemetry by default until disabled, and dotnet.microsoft.com loads Microsoft analytics scripts and connects to Adobe Target.
  no_ads:
    answer: yes
    evidence: https://dotnet.microsoft.com/en-us/platform/free
    note: Free and funded by Microsoft, with no ads in the framework.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - web
---
