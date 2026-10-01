---
name: SquirrelMail
description: Self-hosted PHP webmail with built-in IMAP and SMTP support that renders plain HTML pages without JavaScript and is extended through plugins.
website: https://squirrelmail.org
source: https://sourceforge.net/p/squirrelmail/code/
criteria:
  open_source:
    answer: yes
    evidence: https://squirrelmail.org/about/
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://squirrelmail.org/download.php
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://squirrelmail.org/about/
    note: Free software supported by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: Not supported. The third-party GPG plugin does not work with current versions.
  no_cloud_relay:
    answer: yes
    evidence: https://squirrelmail.org/about/
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://squirrelmail.org/download.php
    note: The source code blocks remote images in HTML mail until the user chooses to view unsafe images.
  any_provider:
    answer: yes
    evidence: https://squirrelmail.org/about/
    note: Works with any IMAP and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://squirrelmail.org/docs/admin/admin.html
    note: Self-hosted software with an official administrator guide.
platforms:
  - web
---
