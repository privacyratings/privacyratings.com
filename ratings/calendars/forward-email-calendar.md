---
name: Forward Email Calendar
description: CalDAV calendar, task and CardDAV contacts service included with paid Forward Email plans. It works with any CalDAV or CardDAV app and with Forward Email's own webmail, desktop and mobile apps, and stores data in each alias's encrypted SQLite mailbox.
website: https://forwardemail.net/en/faq#do-you-support-calendars-caldav
source: https://github.com/forwardemail/forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: All code is public, including the CalDAV and CardDAV servers that run the service. The CalDAV and CardDAV code is under the source-available Business Source License 1.1, which becomes MPL-2.0 four years after each release.
  no_trackers:
    answer: partial
    evidence: https://forwardemail.net/en/privacy#analytics
    note: No third-party analytics. First-party anonymized analytics of page views and service usage is on by default, and Cloudflare Turnstile loads on sign-in and sign-up forms.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Funded by paid plans. No ads, and the privacy policy states user data is not shared with third parties.
  independent_audit:
    answer: yes
    evidence: https://forwardemail.net/pentest-report_forward-email.pdf
    note: Two independent Cure53 audits are published. The latest covers the full forwardemail.net code repository, which contains the CalDAV and CardDAV servers.
---

Calendars, tasks (CalDAV VTODO) and contacts use standard protocols, so they sync with apps such as Apple Calendar, Apple Reminders, Thunderbird and Tasks.org without a bridge app. Setup is described in the [CalDAV](https://forwardemail.net/en/faq#do-you-support-calendars-caldav) and [CardDAV](https://forwardemail.net/en/faq#do-you-support-contacts-carddav) FAQ entries.
