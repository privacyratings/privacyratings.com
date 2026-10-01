---
name: Google Meet
description: Google's video meeting service, part of Google Workspace, used in the browser and in mobile apps with screen sharing, captions and recording.
website: https://workspace.google.com/products/meet/
mainstream: true
jurisdiction: US
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google collects activity data across its services and uses it for analytics and personalized ads.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Free for personal accounts and funded by Google's advertising business, which uses activity data across services.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Workspace, which includes Meet, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
  e2ee:
    answer: partial
    evidence: https://support.google.com/meet/answer/12387251
    note: Meetings use cloud encryption by default; end-to-end or client-side encryption is optional and limited to some calls and accounts.
  no_account_needed:
    answer: partial
    evidence: https://support.google.com/meet/answer/9303069
    note: Guests can ask to join without a Google account if someone in the meeting admits them; organizers need an account.
  self_hostable:
    answer: no
    note: Hosted only.
---
