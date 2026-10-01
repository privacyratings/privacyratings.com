---
name: Password Pusher
description: Service for sharing passwords, text and files through links that expire after a set number of views or days, with audit logs. Hosted in EU and US regions with paid team plans, and the open source edition can be self-hosted.
website: https://pwpush.com
source: https://github.com/pglombardo/PasswordPusher
domain: eu.pwpush.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://eu.pwpush.com/security_compliance
    note: The core, including encryption and data handling, is Apache-2.0, but the hosted Solo and Organization editions add closed-source features.
  no_trackers:
    answer: partial
    evidence: https://eu.pwpush.com/privacy
    note: The website uses Plausible analytics, listed as a subprocessor in the privacy policy.
  no_ads:
    answer: yes
    evidence: https://eu.pwpush.com/privacy
    note: Funded by paid plans. The privacy policy states personal information is not sold to unrelated third parties.
  independent_audit:
    answer: no
    note: No independent audit is published. The security page states no penetration test summary is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
