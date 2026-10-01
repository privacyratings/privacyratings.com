---
name: Mutt
description: Text-based terminal email client for Unix-like systems with built-in IMAP, POP3 and SMTP support, message threading and OpenPGP and S/MIME encryption.
website: https://gitlab.com/muttmua/mutt
source: https://gitlab.com/muttmua/mutt
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt/-/blob/master/COPYRIGHT
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt/-/blob/master/README
    note: Volunteer free software project. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt/-/blob/master/doc/PGP-Notes.txt
    note: OpenPGP and S/MIME are built in, through GnuPG or GPGME.
  no_cloud_relay:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt/-/blob/master/doc/manual.xml.head
    note: Connects directly to IMAP, POP3 and SMTP servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt/-/blob/master/doc/manual.xml.head
    note: Text-based client that does not load remote content. HTML is passed to an external viewer set in mailcap.
  any_provider:
    answer: yes
    evidence: https://gitlab.com/muttmua/mutt/-/blob/master/doc/manual.xml.head
    note: Works with any IMAP, POP3 and SMTP provider.
---
