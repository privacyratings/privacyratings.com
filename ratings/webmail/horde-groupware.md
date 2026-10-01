---
name: Horde Groupware Webmail Edition
description: Self-hosted, open-source groupware suite built on the Horde framework, with the IMP webmail client, mail filters, calendar, contacts, tasks and notes.
website: https://www.horde.org/apps/webmail/
source: https://github.com/horde/imp
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/horde/imp/blob/FRAMEWORK_6_0/LICENSE
    note: GPL-2.0, with the Horde framework libraries under LGPL.
  no_trackers:
    answer: yes
    evidence: https://github.com/horde/imp
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.horde.org/apps/webmail/
    note: Free open-source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://www.horde.org/apps/webmail/
    note: PGP and S/MIME encryption and signing are built into IMP, using GnuPG on the server once the administrator configures it.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/horde/imp
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/horde/imp/blob/FRAMEWORK_6_0/config/prefs.php
    note: The default image_replacement preference shows inline images and blocks remote images.
  any_provider:
    answer: yes
    evidence: https://github.com/horde/imp/blob/FRAMEWORK_6_0/doc/INSTALL.rst
    note: Works with any IMAP, POP3 and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://github.com/horde/imp/blob/FRAMEWORK_6_0/doc/INSTALL.rst
    note: Self-hosted software with an official installation guide.
aliases:
  - Horde Groupware
  - Horde IMP
platforms:
  - web
---
