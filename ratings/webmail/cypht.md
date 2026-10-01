---
name: Cypht
description: Self-hosted, open-source webmail that combines several IMAP, JMAP and SMTP accounts, plus feeds, in one interface, built from optional modules.
website: https://www.cypht.org
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/cypht-org/cypht/blob/master/LICENSE
    note: LGPL-2.1.
  no_ads:
    answer: yes
    evidence: https://github.com/cypht-org/cypht
    note: Free open-source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  no_trackers:
    answer: yes
    evidence: https://github.com/cypht-org/cypht
    note: No telemetry or analytics in the source code. Error reporting to a GlitchTip server runs only when the administrator configures one.
  openpgp:
    answer: partial
    evidence: https://github.com/cypht-org/cypht/blob/master/modules/pgp/README.md
    note: PGP signing and encryption come from a bundled module that is experimental and off by default.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/cypht-org/cypht
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/cypht-org/cypht/blob/master/.env.example
    note: External image sources are disabled by default with ALLOW_EXTERNAL_IMAGE_SOURCES=false.
  any_provider:
    answer: yes
    evidence: https://github.com/cypht-org/cypht
    note: Works with any IMAP, JMAP and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://www.cypht.org/install/
    note: Self-hosted software with an official installation guide.
source: https://github.com/cypht-org/cypht
platforms:
  - web
---
