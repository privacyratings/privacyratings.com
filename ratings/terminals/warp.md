---
name: Warp
description: Terminal from Warp with block-based command output, a built-in editor, AI agents and team features such as shared workflows. Some features require an account.
website: https://www.warp.dev
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: no
    evidence: https://github.com/warpdotdev/Warp/blob/main/LICENSE
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://docs.warp.dev/support-and-community/privacy-and-security/privacy
    note: The website loads Google Tag Manager, Meta and HubSpot scripts, and the app sends analytics through RudderStack by default, which can be turned off in settings.
  no_ads:
    answer: partial
    evidence: https://www.warp.dev/pricing
    note: Funded by paid plans, with no ads in the app. The privacy policy allows sharing personal information with advertising partners to market Warp.
  independent_audit:
    answer: partial
    evidence: https://www.warp.dev/legal/security
    note: Has a SOC 2 Type 2 attestation, but the report is only available on request.
---
