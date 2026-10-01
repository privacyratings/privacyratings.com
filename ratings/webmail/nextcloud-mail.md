---
name: Nextcloud Mail
description: Open-source mail app for self-hosted Nextcloud servers that adds webmail for any IMAP account, with S/MIME, Mailvelope support and integration with Nextcloud contacts and calendar.
website: https://apps.nextcloud.com/apps/mail
family: nextcloud
source: https://github.com/nextcloud/mail
jurisdiction: DE
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/nextcloud/mail/blob/main/COPYING
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/nextcloud/mail
    note: No telemetry or analytics in the source code, and the app store page loads no third-party trackers.
  no_ads:
    answer: yes
    evidence: https://nextcloud.com/pricing/
    note: Free software funded by Nextcloud enterprise subscriptions. No ads.
  independent_audit:
    answer: no
    note: No independent audit of the Mail app is published.
  openpgp:
    answer: partial
    evidence: https://github.com/nextcloud/mail/blob/main/README.md
    note: OpenPGP works through the Mailvelope browser extension. S/MIME is built in.
  no_cloud_relay:
    answer: yes
    evidence: https://docs.nextcloud.com/server/latest/admin_manual/groupware/mail.html
    note: Self-hosted. Connects from the Nextcloud server directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/nextcloud/mail/blob/main/lib/Service/HtmlPurify/TransformImageSrc.php
    note: External images are proxied and hidden until the user chooses to show them, and tracking pixels are blocked.
  any_provider:
    answer: yes
    evidence: https://docs.nextcloud.com/server/latest/admin_manual/groupware/mail.html
    note: Works with any IMAP and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://docs.nextcloud.com/server/latest/admin_manual/groupware/mail.html
    note: Installed as an app on a self-hosted Nextcloud server, with official administrator documentation.
platforms:
  - web
---
