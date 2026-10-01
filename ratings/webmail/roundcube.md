---
name: RoundCube
description: Browser-based multilingual IMAP client with an application-like user interface.
website: https://roundcube.net
source: https://github.com/roundcube/roundcubemail
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/roundcube/roundcubemail/blob/master/LICENSE.md
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/roundcube/roundcubemail
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://roundcube.net/about/
    note: Free software developed with support from Nextcloud and hosting partners. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: partial
    evidence: https://github.com/roundcube/roundcubemail/blob/master/plugins/enigma/README
    note: PGP needs the bundled Enigma plugin enabled by the server admin, or the Mailvelope browser extension.
  no_cloud_relay:
    answer: yes
    evidence: https://github.com/roundcube/roundcubemail
    note: Self-hosted. Connects from the server where it is installed directly to the IMAP and SMTP servers, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/roundcube/roundcubemail/blob/master/config/defaults.inc.php
    note: The default show_images setting never loads remote images without asking.
  any_provider:
    answer: yes
    evidence: https://github.com/roundcube/roundcubemail
    note: Works with any IMAP and SMTP server.
  self_hostable:
    answer: yes
    evidence: https://github.com/roundcube/roundcubemail/blob/master/docs/INSTALL.md
    note: Self-hosted software with an official installation guide.
also_in:
  - email-clients
---
