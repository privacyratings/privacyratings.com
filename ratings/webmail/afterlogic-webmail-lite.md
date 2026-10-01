---
name: Afterlogic WebMail Lite
description: Self-hosted, open-source PHP webmail for an existing IMAP server, with contacts, OpenPGP in the browser and a module system. A paid Pro edition adds more features.
website: https://afterlogic.org/webmail-lite
source: https://github.com/afterlogic/webmail-lite-8
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/afterlogic/webmail-lite-8/blob/master/LICENSE
    note: AGPL-3.0, with a commercial license also offered.
  no_trackers:
    answer: no
    note: The website loads Google Analytics and Google ad tracking (DoubleClick).
  no_ads:
    answer: yes
    evidence: https://afterlogic.org/webmail-lite
    note: Free edition of a product funded by the paid Pro edition and support. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: yes
    evidence: https://afterlogic.org/webmail-lite
    note: OpenPGP encryption and signing are built in and run in the browser.
  no_cloud_relay:
    answer: yes
    evidence: https://afterlogic.com/docs/webmail-lite-8/installation/installation-instructions
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/afterlogic/aurora-module-mail/blob/master/Settings.php
    note: The AlwaysShowImagesInMessage setting is off by default, so external images load only on request.
  any_provider:
    answer: yes
    evidence: https://afterlogic.org/webmail-lite
    note: Works with any IMAP and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://afterlogic.com/docs/webmail-lite-8/installation/installation-instructions
    note: Self-hosted software with an official installation guide.
platforms:
  - web
---
