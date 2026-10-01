---
name: Evernote
description: Proprietary note-taking app for text, web clips, images, PDFs and tasks, with notebooks, tags and search across devices. Notes are stored on Evernote's servers without end-to-end encryption. Owned by Bending Spoons.
website: https://evernote.com
mainstream: true
jurisdiction: IT
platforms:
  - windows
  - macos
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://evernote.com/privacy/policy
    note: The website loads OneTrust, TikTok and Sentry scripts, and the privacy policy describes profiling cookies used for advertising.
  no_ads:
    answer: yes
    evidence: https://evernote.com/privacy/policy
    note: Funded by paid subscriptions. The privacy policy states personal data is not sold or shared with third parties for their own advertising.
  independent_audit:
    answer: partial
    evidence: https://evernote.com/security
    note: Yearly penetration tests by an external firm and ISO 27001 certification are stated, but the reports are only available on request under NDA.
---
