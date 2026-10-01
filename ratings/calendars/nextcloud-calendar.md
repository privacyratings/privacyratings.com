---
name: Nextcloud Calendar
description: Calendar app for self-hosted Nextcloud servers. Syncs across devices with CalDAV and supports shared calendars and appointment booking. No end-to-end encryption.
website: https://apps.nextcloud.com/apps/calendar
family: nextcloud
source: https://github.com/nextcloud/calendar
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nextcloud/calendar/blob/main/COPYING
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/nextcloud/calendar
    note: No telemetry or analytics in the source code. The Nextcloud usage survey is only sent if an administrator opts in.
  no_ads:
    answer: yes
    evidence: https://nextcloud.com/pricing/
    note: Free software funded by Nextcloud GmbH's enterprise subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: DE
---
