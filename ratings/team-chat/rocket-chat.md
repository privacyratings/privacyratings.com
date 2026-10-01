---
name: Rocket.Chat
description: Self-hostable team chat platform with web, desktop and mobile apps, federation and many integrations. End-to-end encryption is available but off by default, so workspace admins can otherwise read messages.
website: https://www.rocket.chat
source: https://github.com/RocketChat/Rocket.Chat
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/RocketChat/Rocket.Chat/blob/develop/LICENSE
    note: All code is public. Most is MIT, and enterprise features in the ee directories use the source-available Rocket.Chat Enterprise license.
  no_ads:
    answer: yes
    evidence: https://docs.rocket.chat/docs/privacy-policy
    note: Funded by paid plans and enterprise licenses; the privacy policy states personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: US
---
