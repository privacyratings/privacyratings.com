---
name: Dokploy
description: Self-hosted platform for deploying apps and databases with Docker, Docker Swarm and Traefik, managed from a web dashboard. A hosted Dokploy Cloud is also available.
website: https://dokploy.com
source: https://github.com/Dokploy/dokploy
jurisdiction: US
platforms:
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Dokploy/dokploy/blob/canary/LICENSE.MD
    note: Apache-2.0, except enterprise features such as SSO and audit logs in proprietary folders, which use the source-available Dokploy Source Available License.
  no_trackers:
    answer: no
    evidence: https://dokploy.com/privacy
    note: The website and docs use Google Analytics, and Dokploy Cloud uses HubSpot and Google Tag Manager. The self-hosted version loads no analytics.
  no_ads:
    answer: yes
    evidence: https://dokploy.com/privacy
    note: Funded by Dokploy Cloud and enterprise licenses, and the privacy policy says personal data is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
