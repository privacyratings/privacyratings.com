---
name: Brave Leo
description: AI assistant built into the Brave browser for chat, page summaries and writing help. Works without an account and can also use local or self-chosen models.
website: https://brave.com/leo/
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
source: https://github.com/brave/brave-core
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/brave/brave-core/blob/master/LICENSE
    note: The browser code, including Leo, is open source under MPL-2.0. The Leo server is not.
  no_trackers:
    answer: partial
    evidence: https://brave.com/privacy/browser/
    note: Privacy-preserving product and query analytics are on by default and can be turned off. No third-party analytics.
  no_ads:
    answer: partial
    evidence: https://brave.com/privacy/browser/
    note: Leo has no ads and is funded by a Premium subscription, but Brave Ads can appear in the browser by default and can be turned off.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_training:
    answer: yes
    evidence: https://brave.com/privacy/browser/
    note: Conversations are not used for model training.
  runs_locally:
    answer: partial
    evidence: https://brave.com/leo/
    note: Bring Your Own Model can connect Leo to local models, but it uses Brave's hosted models by default.
  chat_retention:
    answer: yes
    evidence: https://brave.com/privacy/browser/
    note: Prompts and responses are not stored on Brave's servers. History is stored locally on the device.
  no_account_needed:
    answer: yes
    evidence: https://brave.com/leo/
    note: No account or login is needed for the free version.
---
