---
name: Forward Email
description: Email client for Forward Email accounts, available as webmail and as desktop and mobile apps built from one source-available codebase, with built-in OpenPGP and optional encryption of locally stored data.
website: https://forwardemail.net/en/download
source: https://github.com/forwardemail/mail.forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other email client, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/LICENSE.md
    note: The apps are published under the Business Source License 1.1, a source-available license that converts to MPL-2.0 after four years.
  no_trackers:
    answer: partial
    evidence: https://forwardemail.net/en/privacy#analytics
    note: No third-party analytics in the website or apps, but the website runs first-party cookieless analytics by default.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/privacy
    note: Funded by paid plans. No ads, and user data is not shared with third parties.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_forward-email.pdf
    note: Cure53's audit scope includes the mail.forwardemail.net client code together with the Forward Email service.
  openpgp:
    answer: yes
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/src/utils/pgp-send.ts
    note: OpenPGP encryption and signing are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/README.md
    note: Connects directly to the Forward Email API, which is the mail server, with no separate sync service. Mobile push goes through APNs, FCM or UnifiedPush.
  remote_content_blocked:
    answer: partial
    evidence: https://github.com/forwardemail/mail.forwardemail.net/blob/main/src/stores/settingsRegistry.ts
    note: Tracking pixels are blocked by default, but other remote images load unless blocking is turned on in settings.
  any_provider:
    answer: no
    evidence: https://forwardemail.net/en/faq#do-you-offer-a-webmail-client
    note: Works only with Forward Email accounts. The maintainers state that a future version will support any IMAP and SMTP provider.
pick: 1
pick_reason: Source-available webmail, desktop and mobile client with built-in OpenPGP and no third-party analytics. It works only with Forward Email accounts, not other IMAP and SMTP providers.
---
