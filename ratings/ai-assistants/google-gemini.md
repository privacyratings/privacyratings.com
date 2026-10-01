---
name: Google Gemini
description: AI assistant from Google for questions, writing, coding and image generation, connected to Google services such as Gmail and Drive. Available on the web and in Android and iOS apps.
website: https://gemini.google.com
aliases:
  - Gemini
  - Bard
mainstream: true
domain: gemini.google.com
jurisdiction: US
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
    note: Google collects activity, device and usage data across its services, including Gemini, and this cannot be fully turned off.
  no_ads:
    answer: yes
    evidence: https://support.google.com/gemini/answer/13594961
    note: No ads are shown in Gemini, and Google states chats are not used to show ads, though it says it will announce any change.
  independent_audit:
    answer: no
    note: No independent audit of the consumer Gemini app is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes counts of government requests for user data and how it responds, updated twice a year.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing data in response to a government request, unless prohibited by law.
  no_training:
    answer: partial
    evidence: https://support.google.com/gemini/answer/13594961
    note: With Keep Activity on, which is the default, chats are used to train models. Turning it off stops this.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: no
    evidence: https://support.google.com/gemini/answer/13594961
    note: Activity is kept for 18 months by default, and chats reviewed by human reviewers are kept for up to three years even after deletion.
  no_account_needed:
    answer: partial
    evidence: https://support.google.com/gemini/answer/13594961
    note: Gemini can be used without signing in to a Google account, with fewer features.
---
