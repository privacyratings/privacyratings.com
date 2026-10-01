---
name: Google Voice
description: Phone number service from Google that gives a US number for calls, texts and voicemail through web and mobile apps. It is free for personal accounts in the US and paid as part of Google Workspace.
website: https://voice.google.com
mainstream: true
jurisdiction: US
domain: voice.google.com
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: partial
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.googlevoice/latest/
    note: The Android app has no third-party trackers on Exodus, but Google collects first-party usage data under its privacy policy.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The free personal service is funded by Google, whose business relies on advertising and uses account activity to personalise ads.
  independent_audit:
    answer: partial
    evidence: https://cloud.google.com/security/compliance/soc-3
    note: Google Voice is in scope of Google's SOC 2 and SOC 3 audits. Only the SOC 3 summary is public.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes counts of government requests for user data twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google states it notifies users before disclosing their information unless prohibited by law or in emergencies.
---
