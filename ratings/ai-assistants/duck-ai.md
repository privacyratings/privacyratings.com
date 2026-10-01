---
name: Duck.ai
description: AI chat from DuckDuckGo that relays prompts to third-party models without identifying the user, with no account needed and recent chats saved only on the device.
website: https://duck.ai
aliases:
  - DuckDuckGo AI Chat
domain: duck.ai
jurisdiction: US
platforms:
  - web
  - windows
  - macos
  - android
  - ios
source: https://github.com/duckduckgo/Android
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/duckduckgo/Android/blob/develop/LICENSE
    note: DuckDuckGo's apps, which include Duck.ai, are open source under Apache-2.0. The Duck.ai service is not.
  no_trackers:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: No third-party trackers or tracking cookies, and the Android app has no known trackers in its Exodus report.
  no_ads:
    answer: partial
    evidence: https://duckduckgo.com/privacy
    note: DuckDuckGo is funded by search ads based only on the current search, not a profile, and by subscriptions.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://duckduckgo.com/privacy
    note: The privacy policy states how legal requests are handled, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: Users with an email address on file are notified of legal disclosures by email unless legally forbidden.
  no_training:
    answer: yes
    evidence: https://duckduckgo.com/duckai/privacy-terms
    note: Agreements with model providers prohibit using prompts and outputs to train or improve models.
  runs_locally:
    answer: no
    note: Hosted only.
  chat_retention:
    answer: yes
    evidence: https://duckduckgo.com/duckai/privacy-terms
    note: Recent chats are saved only on the device, and model providers delete data within 30 days, with limited exceptions for safety and legal compliance.
  no_account_needed:
    answer: yes
    evidence: https://duckduckgo.com/duckai/privacy-terms
    note: No account is needed. Requests are sent without identifying metadata such as the IP address.
---
