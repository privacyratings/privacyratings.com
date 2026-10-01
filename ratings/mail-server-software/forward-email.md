---
name: Forward Email
description: Self-hosted version of the Forward Email service, installed with a script that deploys Docker containers. It includes MX, SMTP, IMAP, POP3, CalDAV and CardDAV servers, encrypted SQLite mailboxes, a web interface and optional backups to S3-compatible storage.
website: https://forwardemail.net/en/self-hosted
source: https://github.com/forwardemail/forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: Core mail storage and protocol code is MPL-2.0 and the rest is BUSL-1.1, a source-available license that is not OSI-approved. BUSL-1.1 allows production use except offering the software as a hosted service that competes with Forward Email, and each release becomes MPL-2.0 after four years.
  no_trackers:
    answer: partial
    evidence: https://forwardemail.net/en/self-hosted
    note: The self-hosting guide states no information is sent outside the server. The forwardemail.net website runs first-party anonymized analytics by default, with no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Free to self-host. The company is funded by paid plans of its hosted service, with no ads.
  independent_audit:
    answer: yes
    evidence: https://forwardemail.net/pentest-report_forward-email.pdf
    note: Two independent Cure53 audits are published. The latest covers the full forwardemail.net code repository, including the self-hosting setup.
---

Installation is supported on Ubuntu and Debian servers. The [self-hosting guide](https://forwardemail.net/en/blog/docs/self-hosted-solution) lists the components and system requirements.
