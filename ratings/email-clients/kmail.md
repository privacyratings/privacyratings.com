---
name: KMail
description: KDE email client for Linux, part of the Kontact suite, with support for IMAP, POP3, OpenPGP and S/MIME.
website: https://apps.kde.org/kmail2/
source: https://invent.kde.org/pim/kmail
jurisdiction: DE
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://apps.kde.org/kmail2/
    note: GPL-2.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://kde.org/privacypolicy-apps/
    note: No third-party trackers. Any telemetry in KDE apps is opt-in and off by default.
  no_ads:
    answer: yes
    evidence: https://kde.org/donate/
    note: KDE project funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://docs.kde.org/stable_kf6/en/kmail/kmail2/pgp.html
    note: Inline OpenPGP, PGP/MIME and S/MIME are built in.
  no_cloud_relay:
    answer: yes
    evidence: https://docs.kde.org/stable_kf6/en/kmail/kmail2/getting-started.html
    note: Connects directly to mail servers. No vendor service is involved.
  remote_content_blocked:
    answer: yes
    evidence: https://docs.kde.org/stable_kf6/en/kmail/kmail2/configure-security.html
    note: External references in HTML mail are not loaded unless enabled in settings.
  any_provider:
    answer: yes
    evidence: https://docs.kde.org/stable_kf6/en/kmail/kmail2/getting-started.html
    note: Works with any IMAP, POP3 and SMTP provider.
---
