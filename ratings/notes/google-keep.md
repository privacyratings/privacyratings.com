---
name: Google Keep
description: Google's note-taking app for quick text notes, checklists, images, drawings and voice memos, with labels, colors and reminders. Notes sync through a Google account and are not end-to-end encrypted.
website: https://keep.google.com
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
    evidence: https://play.google.com/store/apps/datasafety?id=com.google.android.keep
    note: Exodus finds no third-party trackers, but the Play data safety listing declares collection of app interactions, diagnostics and device IDs for analytics.
  no_ads:
    answer: yes
    evidence: https://play.google.com/store/apps/datasafety?id=com.google.android.keep
    note: Free app with no ads. The Play data safety listing declares no sharing with third parties and no data use for advertising.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Workspace, which includes Keep, has third-party SOC 2 audits. Only the SOC 3 summary report is public.
---
