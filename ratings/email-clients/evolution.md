---
name: Evolution
description: GNOME groupware application for Linux that combines email, calendar, contacts and tasks, with support for IMAP, POP3, Exchange and OpenPGP.
website: https://gitlab.gnome.org/GNOME/evolution/-/wikis/home
source: https://gitlab.gnome.org/GNOME/evolution
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/evolution/-/blob/master/COPYING
    note: LGPL-2.1.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/evolution
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: GNOME project funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://help.gnome.org/evolution/mail-encryption-gpg-set-up.html
    note: OpenPGP through GnuPG and S/MIME are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://help.gnome.org/evolution/intro-account-types.html
    note: Connects directly to mail servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://help.gnome.org/evolution/mail-displaying-images-in-html.html
    note: Remote images are not downloaded unless the user requests it.
  any_provider:
    answer: yes
    evidence: https://help.gnome.org/evolution/intro-account-types.html
    note: Works with any IMAP, POP3 and SMTP provider.
---
