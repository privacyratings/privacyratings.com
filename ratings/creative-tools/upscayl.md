---
name: Upscayl
description: A desktop app that upscales and enhances low-resolution images locally using AI models, from the makers of the Upscayl Cloud service.
website: https://upscayl.org
source: https://github.com/upscayl/upscayl
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/upscayl/upscayl/blob/main/LICENSE
    note: AGPL-3.0 for the desktop app. The optional Upscayl Cloud service is closed source.
  no_trackers:
    answer: no
    evidence: https://github.com/upscayl/upscayl/blob/main/renderer/components/posthog-provider-wrapper.tsx
    note: The desktop app sends usage events with system information to PostHog, and the launch event is sent even when usage sharing is turned off. The website uses Cloudflare Web Analytics.
  no_ads:
    answer: yes
    evidence: https://upscayl.org/privacy
    note: Funded by paid cloud plans, with no ads. The privacy policy states personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
