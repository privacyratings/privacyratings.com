---
name: Forward Email Webmail
description: Hosted webmail for Forward Email accounts, with mail, calendar and contacts, built-in OpenPGP and optional encryption of locally cached data. It shares one source-available codebase with the Forward Email desktop and mobile apps.
website: https://mail.forwardemail.net
source: https://github.com/forwardemail/mail.forwardemail.net
domain: mail.forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/LICENSE.md
    note: All code is public. The webmail app is under the source-available Business Source License 1.1, which becomes MPL-2.0 four years after each release, and the Forward Email service behind it is published under MPL-2.0 and BUSL-1.1.
  no_trackers:
    answer: partial
    evidence: https://forwardemail.net/en/privacy#analytics
    note: No third-party analytics in the webmail. The privacy policy describes first-party anonymized analytics of page views and service usage, including API use, that is on by default.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/privacy
    note: Funded by paid plans. No ads, and user data is not shared with third parties.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_forward-email.pdf
    note: Cure53 audited the webmail source code, including its client-side logic, together with the Forward Email service.
  transparency_report:
    answer: partial
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: The technical whitepaper (section 9.3) publishes the government request policy and commits to transparency reports with request counts. A report with counts is not published yet.
  user_notice:
    answer: yes
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: Users are notified of requests when legally allowed, with notice after disclosure when advance notice is prohibited.
  openpgp:
    answer: yes
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/src/utils/pgp-send.ts
    note: OpenPGP encryption and signing are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/README.md
    note: The browser connects directly to the Forward Email API, which is the mail server, with no separate sync service.
  remote_content_blocked:
    answer: partial
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/src/stores/settingsRegistry.ts
    note: Tracking pixels are blocked by default, but other remote images load unless blocking is turned on in settings.
  any_provider:
    answer: no
    evidence: https://forwardemail.net/en/faq#do-you-offer-a-webmail-client
    note: Works only with Forward Email accounts. The maintainers state that a future version is planned to support any IMAP and SMTP provider.
  self_hostable:
    answer: partial
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/README.md
    note: The static web app can be built and served from another server, with a configurable API address, but there is no official self-hosting guide and it only works with the Forward Email API.
pick: 1
pick_reason: Source-available webmail with built-in OpenPGP and no third-party analytics, covered by Cure53's audit. It works only with Forward Email accounts, not other IMAP and SMTP providers.
---
