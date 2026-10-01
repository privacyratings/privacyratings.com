---
name: Documenso
description: Open-source electronic signature platform for sending and signing documents, available as a hosted service or for self-hosting.
website: https://documenso.com
domain: app.documenso.com
source: https://github.com/documenso/documenso
jurisdiction: US
platforms:
  - web
pick: 1
pick_reason: Open-source document signing, hosted or self-hosted, as a replacement for DocuSign. The core is AGPL-3.0, and self-hosted instances keep signed documents on your own server.
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/documenso/documenso/blob/main/LICENSE
    note: All code is public. The core is AGPL-3.0 and enterprise features in packages/ee use the source-available Documenso Commercial License.
  no_trackers:
    answer: partial
    evidence: https://documenso.com/privacy
    note: The website uses Plausible analytics, and self-hosted instances send anonymous telemetry by default, which can be turned off.
  no_ads:
    answer: yes
    evidence: https://documenso.com/privacy
    note: Funded by paid plans. The privacy policy states that personal information is not sold or rented.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
