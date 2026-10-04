---
name: Forward Email Backups
description: Built-in mailbox backup and export for Forward Email accounts. Mailboxes are backed up as encrypted SQLite files, optionally to the user's own S3-compatible storage, and can be downloaded as encrypted SQLite or password-protected EML or MBOX archives with contacts and calendars.
website: https://forwardemail.net/en/faq#how-do-i-export-and-backup-my-mailbox
source: https://github.com/forwardemail/forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: All code is public, as part of the Forward Email service code. Core mail storage and protocol code is MPL-2.0 and the rest is under the source-available Business Source License 1.1 (BUSL-1.1), which becomes MPL-2.0 four years after each release.
  no_trackers:
    answer: yes
    evidence: https://forwardemail.net/en/privacy#analytics
    note: No third-party trackers or analytics. First-party analytics set no cookies and store no IP addresses. Visits are counted with a hash that changes every day, and events are deleted after 30 days.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Included with paid Forward Email plans. No ads, and the privacy policy states user data is not shared with third parties.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_forward-email.pdf
    note: Cure53 audited the Forward Email service code, including the encrypted mailbox storage and the S3 backup storage settings.
---
