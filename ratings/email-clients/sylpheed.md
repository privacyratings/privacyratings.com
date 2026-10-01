---
name: Sylpheed
description: Lightweight GTK email client for Linux, Windows and macOS with POP3, IMAP and SMTP support, junk mail filtering and GnuPG encryption.
website: https://sylpheed.sraoss.jp/en/
source: https://github.com/sylpheed-mail/sylpheed
platforms:
  - linux
  - windows
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/sylpheed-mail/sylpheed/blob/main/LICENSE
    note: GPL-2.0, with the LibSylph library under LGPL.
  no_trackers:
    answer: no
    evidence: https://sylpheed.sraoss.jp/en/
    note: The application has no telemetry, but the website loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://sylpheed.sraoss.jp/en/
    note: Free software. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://sylpheed.sraoss.jp/en/features.html
    note: Signing and encryption with GnuPG are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://sylpheed.sraoss.jp/en/features.html
    note: Connects directly to POP3, IMAP and SMTP servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/sylpheed-mail/sylpheed/blob/main/libsylph/html.c
    note: HTML mail is converted to plain text for display, so remote content is never loaded.
  any_provider:
    answer: yes
    evidence: https://sylpheed.sraoss.jp/en/features.html
    note: Works with any POP3, IMAP and SMTP provider.
---
