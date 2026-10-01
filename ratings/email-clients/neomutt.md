---
name: NeoMutt
description: Terminal email client for Linux and macOS based on Mutt, with built-in IMAP, POP3, SMTP and OpenPGP support.
website: https://neomutt.org
source: https://github.com/neomutt/neomutt
platforms:
  - linux
  - macos
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/neomutt/neomutt/blob/main/LICENSE.md
    note: GPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/neomutt/neomutt
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://neomutt.org/sponsor
    note: Volunteer project funded by sponsorship. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://neomutt.org/guide/gettingstarted#sending-crypto
    note: OpenPGP and S/MIME are built in through GPGME.
  no_cloud_relay:
    answer: yes
    evidence: https://neomutt.org/guide/optionalfeatures
    note: Connects directly to IMAP, POP3 and SMTP servers. Credentials and mail stay on the device.
  remote_content_blocked:
    answer: yes
    evidence: https://neomutt.org/guide/mimesupport
    note: Text-based client that does not load remote content. HTML is passed to an external viewer set in mailcap.
  any_provider:
    answer: yes
    evidence: https://neomutt.org/guide/optionalfeatures
    note: Works with any IMAP, POP3 and SMTP provider.
---
