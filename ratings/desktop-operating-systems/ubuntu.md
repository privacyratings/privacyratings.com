---
name: Ubuntu
description: A Debian-based Linux distribution developed by Canonical, with regular and long-term support releases for desktops, servers and cloud.
website: https://ubuntu.com
source: https://launchpad.net/ubuntu
jurisdiction: GB
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://canonical.com/legal/open-source-licences
    note: Built from open source packages, with licences listed per package. Optional proprietary drivers are available.
  no_trackers:
    answer: no
    evidence: https://canonical.com/legal/systems-information-notice
    note: The website loads Google Tag Manager. Sharing system information with Canonical is offered during installation and at first login.
  no_ads:
    answer: partial
    evidence: https://canonical.com/legal/data-privacy
    note: Funded by Canonical's commercial services, and personal data is not sold. The package manager and login messages promote Canonical's paid Ubuntu Pro service.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
