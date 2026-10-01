---
name: eM Client
description: Desktop and mobile email client for Windows, macOS, Android and iOS with calendar, contacts, chat and built-in PGP and S/MIME.
website: https://www.emclient.com
imported_from: awesome-privacy
jurisdiction: CZ
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.emclient.com/privacy-policy
    note: The website loads Google Tag Manager, and the privacy policy lists Google Analytics, Google Optimize and Smartlook.
  no_ads:
    answer: yes
    evidence: https://www.emclient.com/pricing
    note: Funded by paid licenses. The app shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://www.emclient.com/webdocumentation/en/10.3/eMClient/Content/E-mail/PGP.htm
    note: PGP key generation, encryption and signing are built in, along with S/MIME.
  no_cloud_relay:
    answer: partial
    evidence: https://www.emclient.com/privacy-policy
    note: Connects directly to mail servers. Optional mobile push notifications send login tokens and message headers through eM Client servers, and translation uses its servers.
  remote_content_blocked:
    answer: partial
    evidence: https://www.emclient.com/webdocumentation/en/10.3/eMClient/Content/Settings/Privacy.htm
    note: External content and tracking pixels can be blocked in the privacy settings.
  any_provider:
    answer: yes
    evidence: https://www.emclient.com/webdocumentation/en/10.3/eMClient/Content/Accounts/Create%20New%20Account.htm
    note: Works with any IMAP, POP3 and SMTP provider, as well as Exchange and Google accounts.
---
