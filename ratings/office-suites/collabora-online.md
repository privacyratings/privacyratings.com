---
name: Collabora Online
description: Online office suite based on LibreOffice for documents, spreadsheets and presentations, with real-time collaborative editing. It is self-hosted or used through integrations such as Nextcloud.
website: https://www.collaboraonline.com
source: https://github.com/CollaboraOnline/online.mirror
jurisdiction: GB
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/CollaboraOnline/online.mirror/blob/main/COPYING
    note: MPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://www.collaboraonline.com/privacy-notice/
    note: No telemetry in the server software. The website uses Collabora's self-hosted Matomo analytics.
  no_ads:
    answer: yes
    evidence: https://www.collaboraonline.com/privacy-notice/
    note: Funded by support subscriptions. The privacy notice states that Collabora does not sell customer data.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
