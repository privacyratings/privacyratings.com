---
name: Modoboa
description: Self-hosted mail hosting and management platform built on Postfix and Dovecot, with a web admin interface, webmail, calendars, contacts and spam filtering.
website: https://modoboa.org
source: https://github.com/modoboa/modoboa
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/modoboa/modoboa/blob/master/LICENSE
    note: ISC.
  no_trackers:
    answer: partial
    evidence: https://github.com/modoboa/modoboa/blob/master/modoboa/core/management/commands/communicate_with_public_api.py
    note: By default the server registers with api.modoboa.org and sends its hostname, version and domain and mailbox counts. This can be turned off in the settings.
  no_ads:
    answer: yes
    evidence: https://modoboa.org/en/sponsoring/
    note: Funded by sponsoring, grants and paid professional services. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
