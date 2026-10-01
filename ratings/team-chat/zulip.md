---
name: Zulip
description: Open source team chat that organizes conversations into channels and named topics. It can be self-hosted or used as the Zulip Cloud service run by Kandra Labs.
website: https://zulip.com
source: https://github.com/zulip/zulip
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/zulip/zulip/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: partial
    evidence: https://zulip.readthedocs.io/en/latest/production/mobile-push-notifications.html
    note: No third-party trackers were found on the website, but self-hosted servers using the push notification service send usage statistics by default, which admins can turn off.
  no_ads:
    answer: yes
    evidence: https://zulip.com/plans/
    note: Funded by paid Cloud plans and self-hosted support contracts; the privacy policy states personal data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: US
---
