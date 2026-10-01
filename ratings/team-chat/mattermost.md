---
name: Mattermost
description: Self-hostable team chat with channels, threads, calls and integrations, with desktop, mobile and web apps. Messages are not end-to-end encrypted, and server telemetry is on by default but can be turned off.
website: https://mattermost.com
family: mattermost
source: https://github.com/mattermost/mattermost
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mattermost/mattermost/blob/master/LICENSE.enterprise
    note: AGPL-3.0 and Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://docs.mattermost.com/administration-guide/manage/telemetry
    note: The website loads Google Tag Manager, and server telemetry is on by default.
  no_ads:
    answer: yes
    evidence: https://mattermost.com/pricing/
    note: Funded by commercial licenses and subscriptions, with no ads in the product.
  independent_audit:
    answer: partial
    evidence: https://trust.mattermost.com/
    note: SOC 2 Type II and other audit reports exist but are available only on request through the trust center.
imported_from: awesome-privacy
jurisdiction: US
---
