---
name: Claws Mail
description: Lightweight GTK email and news client for Linux and Windows, extended through plugins for OpenPGP, HTML rendering and spam filtering.
website: https://www.claws-mail.org
source: https://git.claws-mail.org/?p=claws.git;a=summary
platforms:
  - linux
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://git.claws-mail.org/?p=claws.git;a=blob;f=COPYING;hb=HEAD
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://git.claws-mail.org/?p=claws.git;a=summary
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://www.claws-mail.org/donations.php
    note: Funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://www.claws-mail.org/plugins.php
    note: OpenPGP is handled by the PGP/MIME and PGP/Inline plugins that ship with Claws Mail.
  no_cloud_relay:
    answer: yes
    evidence: https://www.claws-mail.org/features.php
    note: Connects directly to POP3, IMAP and SMTP servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://git.claws-mail.org/?p=claws.git;a=blob;f=src/plugins/litehtml_viewer/lh_prefs.c;hb=HEAD
    note: HTML mail is shown as text by default, and the HTML viewer plugins keep remote content off unless enabled.
  any_provider:
    answer: yes
    evidence: https://www.claws-mail.org/features.php
    note: Works with any IMAP, POP3 and SMTP provider.
---
