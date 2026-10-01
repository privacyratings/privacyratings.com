---
name: Google Translate
description: Google's machine translation service for text, documents, websites, speech and images, available on the web and as mobile apps.
website: https://translate.google.com
mainstream: true
jurisdiction: US
domain: translate.google.com
platforms:
  - web
  - android
  - ios
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
    note: Free service funded by Google's advertising business, which uses activity data across services.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Publishes counts of government requests for user data and how often data is disclosed, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing information unless legally prohibited or in emergencies.
  offline:
    answer: partial
    evidence: https://support.google.com/translate/answer/6142473
    note: The mobile apps can download languages for offline use. The website and default app mode translate online.
  no_retention:
    answer: partial
    evidence: https://support.google.com/translate/answer/6142480
    note: When signed in, translations are saved to cloud history and My Activity by default. History can be cleared, or avoided by signing out.
---
