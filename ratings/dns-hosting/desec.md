---
name: deSEC
description: Free authoritative DNS hosting from the Berlin non-profit deSEC e.V., with automatic DNSSEC signing, a full REST API and open-source software.
website: https://desec.io
jurisdiction: DE
source: https://github.com/desec-io/desec-stack
domain: desec.io
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/desec-io/desec-stack/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://desec.io/privacy-policy
    note: The privacy policy states no tracking, behavioral analytics or externally hosted dependencies are used.
  no_ads:
    answer: yes
    evidence: https://desec.io/about
    note: Run by a non-profit association funded by donations and grants. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  dnssec:
    answer: yes
    evidence: https://desec.io/
    note: Every hosted zone is signed with DNSSEC automatically. The DS record is added at the registrar.
  api_access:
    answer: yes
    evidence: https://desec.readthedocs.io/en/latest/
    note: All records are managed through the REST API, which every free account can use.
  two_factor:
    answer: yes
    evidence: https://desec.io/
    note: TOTP authenticator apps are supported for login.
imported_from: awesome-privacy
---
