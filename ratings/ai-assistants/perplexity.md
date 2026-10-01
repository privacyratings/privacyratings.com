---
name: Perplexity
description: AI answer engine that searches the web and summarizes results with cited sources, available on the web and as desktop and mobile apps.
website: https://www.perplexity.ai
mainstream: true
domain: www.perplexity.ai
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/ai.perplexity.app.android/latest/
    note: The Android app includes Google Firebase Analytics, Crashlytics and Singular.
  no_ads:
    answer: partial
    evidence: https://www.perplexity.ai/hub/blog/why-we-re-experimenting-with-advertising
    note: Sponsored follow-up questions and ads can appear next to answers. Perplexity states queries are not sent to advertisers.
  independent_audit:
    answer: no
    note: No independent audit of the consumer service is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_training:
    answer: partial
    evidence: https://www.perplexity.ai/help-center/en/articles/10354855-what-data-does-perplexity-collect-about-me
    note: Searches are used to improve the service by default. The AI Data Usage setting turns this off.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: partial
    evidence: https://www.perplexity.ai/help-center/en/articles/10354873-how-long-does-perplexity-retain-my-search-history-profile-data-and-personal-information
    note: Search history is kept while the account is active and can be deleted. Account data is removed within 30 days of account deletion.
  no_account_needed:
    answer: partial
    evidence: https://www.perplexity.ai/help-center/en/articles/10354855-what-data-does-perplexity-collect-about-me
    note: Search works without an account, with fewer features.
---
