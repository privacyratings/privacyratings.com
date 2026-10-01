---
name: Chatwoot
description: Open source customer support platform with a shared inbox for website chat, email, social media and messaging apps, plus a help center and automations. It can be self-hosted or used through Chatwoot Cloud.
website: https://www.chatwoot.com
source: https://github.com/chatwoot/chatwoot
jurisdiction: US
domain: app.chatwoot.com
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/chatwoot/chatwoot/blob/develop/LICENSE
    note: All code is public. Most is MIT, and the enterprise directory in the same repository uses a source-available proprietary license.
  no_trackers:
    answer: partial
    evidence: https://github.com/chatwoot/chatwoot/blob/develop/lib/chatwoot_hub.rb
    note: Self-hosted instances send usage metrics to Chatwoot by default unless telemetry is disabled; no third-party trackers were found on the website.
  no_ads:
    answer: yes
    evidence: https://www.chatwoot.com/privacy-policy
    note: Funded by paid plans; the privacy policy says personal information is not rented or sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
