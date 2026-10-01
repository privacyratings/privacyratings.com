---
name: Nextcloud
description: Self-hosted collaboration platform for file sync and sharing, with desktop and mobile clients plus apps for calendar, contacts, office documents and chat. Supports optional server-side and end-to-end encryption.
website: https://nextcloud.com
family: nextcloud
source: https://github.com/nextcloud/server
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nextcloud/server/blob/master/COPYING
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/nextcloud/survey_client/blob/master/lib/Controller/EndpointController.php
    note: No third-party trackers in the server or clients. The usage survey is sent only after an administrator opts in.
  no_ads:
    answer: yes
    evidence: https://nextcloud.com/pricing/
    note: Free software funded by Nextcloud GmbH's enterprise subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published by Nextcloud. A third-party penetration test of one university deployment exists but does not cover the product as a whole.
jurisdiction: DE
imported_name: NextCloud
---
