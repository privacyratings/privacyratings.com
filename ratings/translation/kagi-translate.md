---
name: Kagi Translate
description: Translation service from Kagi Inc. that uses large language models from several providers to translate text, documents and web pages. Free to use on the web and in mobile apps.
website: https://translate.kagi.com
jurisdiction: US
domain: translate.kagi.com
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://kagi.com/privacy
    note: Kagi's privacy policy states its websites load no analytics or telemetry.
  no_ads:
    answer: yes
    evidence: https://kagi.com/pricing
    note: Funded by Kagi's paid subscriptions. Kagi Translate shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://kagi.com/privacy
    note: The privacy policy includes a warrant canary, but no request counts are published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  offline:
    answer: no
    note: Online only. Translation runs on third-party language models through Kagi's servers.
  no_retention:
    answer: partial
    evidence: https://help.kagi.com/kagi/ai/llms-privacy.html
    note: Model providers do not train on the text, but most keep API requests for up to 30 days.
---
