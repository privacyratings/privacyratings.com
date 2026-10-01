---
name: SnappyMail
description: Self-hosted, IMAP-only webmail client forked from RainLoop, with built-in OpenPGP support.
website: https://snappymail.eu
source: https://github.com/the-djmaze/snappymail
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail/blob/master/README.md
    note: No telemetry or analytics in the source code. Sentry error tracking and social integrations from RainLoop were removed.
  no_ads:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail
    note: Free open-source software with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail/blob/master/README.md
    note: OpenPGP is built in through OpenPGP.js and GnuPG, with optional Mailvelope support.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail/blob/master/snappymail/v/0.0.0/app/libraries/RainLoop/Config/Application.php
    note: The default view_images setting asks before loading external images.
  any_provider:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail
    note: Works with any IMAP and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://github.com/the-djmaze/snappymail/wiki/Installation-instructions
    note: Self-hosted software with official installation instructions.
also_in:
  - email-clients
---
