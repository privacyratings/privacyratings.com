---
name: aerc
description: Terminal email client for Linux and macOS with IMAP, JMAP, Maildir and Notmuch support and PGP encryption through GnuPG.
website: https://aerc-mail.org
source: https://git.sr.ht/~rjarry/aerc
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/rjarry/aerc/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/rjarry/aerc
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://aerc-mail.org
    note: Volunteer free software project. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://aerc-mail.org
    note: PGP signing, encryption and verification are built in through GnuPG.
  no_cloud_relay:
    answer: yes
    evidence: https://aerc-mail.org
    note: Connects directly to IMAP, JMAP and SMTP servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/rjarry/aerc/blob/master/filters/html
    note: The default HTML filter renders mail with network access disabled. A separate html-unsafe filter must be chosen to load remote content.
  any_provider:
    answer: yes
    evidence: https://aerc-mail.org
    note: Works with any IMAP, JMAP and SMTP provider.
---
