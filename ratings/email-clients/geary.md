---
name: Geary
description: Email app for the GNOME desktop on Linux that groups messages into conversations and works with IMAP accounts.
website: https://gitlab.gnome.org/GNOME/geary
source: https://gitlab.gnome.org/GNOME/geary
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/geary/-/blob/main/COPYING
    note: LGPL-2.1.
  no_trackers:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/geary
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://donate.gnome.org/en/
    note: GNOME project funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: Not supported.
  no_cloud_relay:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/geary/-/blob/main/help/C/accounts.page
    note: Connects directly to IMAP and SMTP servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/geary/-/blob/main/src/client/conversation-viewer/conversation-message.vala
    note: Remote images are not shown until the user allows them for a message or sender.
  any_provider:
    answer: yes
    evidence: https://gitlab.gnome.org/GNOME/geary/-/blob/main/help/C/accounts.page
    note: Works with any IMAP and SMTP provider. POP3 is not supported.
---
