---
name: Psono
description: Open source password manager for teams and companies from esaqa GmbH, with a web client, browser extensions and mobile apps. Vaults are encrypted on the client, and the server can be self-hosted or used as the psono.pw hosted service.
website: https://psono.com
source: https://gitlab.com/esaqa/psono/psono-server
jurisdiction: DE
domain: www.psono.pw
platforms:
  - android
  - ios
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://gitlab.com/esaqa/psono/psono-server/-/blob/master/LICENSE.md
    note: The clients and Community Edition server are Apache-2.0, but the Enterprise Edition server is not published.
  no_trackers:
    answer: no
    evidence: https://psono.com/privacy-policy
    note: The website uses Google Tag Manager and Google Analytics.
  no_ads:
    answer: yes
    evidence: https://psono.com/
    note: Funded by paid business plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee_vault:
    answer: yes
    evidence: https://doc.psono.com/admin/development/cryptography.html
    note: Vault data is encrypted on the client before it is stored on the server.
  self_host_or_local:
    answer: yes
    evidence: https://doc.psono.com/admin/installation/install-preparation.html
    note: The server can be self-hosted.
  export:
    answer: partial
    evidence: https://doc.psono.com/user/other/export.html
    note: Exports secrets and passwords to a file, but files are not included.
---
