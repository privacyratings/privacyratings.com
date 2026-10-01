---
name: SOGo
description: Self-hosted, open-source groupware server with webmail, calendars and address books, supporting CalDAV, CardDAV and ActiveSync. It uses an existing IMAP server for mail.
website: https://www.sogo.nu
source: https://github.com/Alinto/sogo
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Alinto/sogo/blob/master/COPYING.GPL
    note: GPL-2.0, with libraries under LGPL-2.1.
  no_trackers:
    answer: no
    note: The website loads Google Analytics. The self-hosted software itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://www.sogo.nu/support.html
    note: Free software funded by commercial support subscriptions from Alinto. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: OpenPGP is not supported. Only S/MIME signing and encryption are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://www.sogo.nu/files/docs/SOGoInstallationGuide.html
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/Alinto/sogo/blob/master/SoObjects/SOGo/SOGoDefaults.plist
    note: The default SOGoMailDisplayRemoteInlineImages setting is never, so remote images load only on request.
  any_provider:
    answer: yes
    evidence: https://www.sogo.nu/files/docs/SOGoInstallationGuide.html
    note: Works with any IMAP and SMTP server configured by the administrator.
  self_hostable:
    answer: yes
    evidence: https://www.sogo.nu/files/docs/SOGoInstallationGuide.html
    note: Self-hosted software with an official installation guide.
platforms:
  - web
---
