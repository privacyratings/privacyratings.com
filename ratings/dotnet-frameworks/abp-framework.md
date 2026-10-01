---
name: ABP Framework
description: Application framework for ASP.NET Core from Volosoft, with a modular architecture, domain-driven design building blocks, multi-tenancy and startup templates.
website: https://abp.io
source: https://github.com/abpframework/abp
platforms:
  - linux
  - macos
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/abpframework/abp/blob/dev/LICENSE.md
    note: The framework is LGPL-3.0-licensed; commercial modules and ABP Studio are sold separately.
  no_trackers:
    answer: no
    evidence: https://github.com/abpframework/abp/blob/dev/framework/src/Volo.Abp.Core/Volo/Abp/AbpApplicationBase.cs
    note: Applications send telemetry to telemetry.abp.io in development unless Abp:Telemetry:IsEnabled is set to false, and abp.io loads Google Tag Manager and the Google Ads tag.
  no_ads:
    answer: partial
    evidence: https://abp.io/pricing
    note: Funded by commercial licenses, with no ads in the framework, but abp.io loads the Google Ads tag to advertise the vendor's products.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: TR
---
