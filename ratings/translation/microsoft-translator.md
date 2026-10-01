---
name: Microsoft Translator
description: Microsoft's machine translation service for text, speech, images and conversations, available as Bing Translator on the web, as mobile and Windows apps, and built into Edge and Microsoft 365.
website: https://www.microsoft.com/en-us/translator/
family: microsoft
aliases:
  - Bing Translator
mainstream: true
jurisdiction: US
domain: www.bing.com
platforms:
  - web
  - windows
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft collects usage and diagnostic data and uses data about users for personalized advertising.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainadvertisingmodule
    note: Free service from Microsoft, which uses data about users of its services for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit of the consumer translator is published.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for customer data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to users whose data is requested, except where prohibited by law or in emergencies.
  offline:
    answer: partial
    evidence: https://www.microsoft.com/en-us/translator/apps/
    note: The mobile apps can download offline translation packs. Online translation is the default.
  no_retention:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainMicrosoftTranslatormodule
    note: Submitted text and audio are processed to improve Microsoft's products, with random samples kept after de-identification. No opt-out is described.
---
