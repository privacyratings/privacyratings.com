---
name: AliasVault
description: Open source, end-to-end encrypted password manager that also generates email aliases and identities and receives mail through its own email server. It can be used in the hosted cloud or self-hosted.
website: https://www.aliasvault.com
source: https://github.com/aliasvault/aliasvault
domain: www.aliasvault.com
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/aliasvault/aliasvault/blob/main/LICENSE.md
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://www.aliasvault.com/privacy-policy
    note: No third-party trackers. The website's self-hosted Plausible analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://www.aliasvault.com/pricing
    note: Funded by its founders, community support and planned paid plans, with no ads or data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  self_host_or_local:
    answer: yes
    evidence: https://docs.aliasvault.com/installation/
    note: The server can be self-hosted with Docker.
  export:
    answer: yes
    evidence: https://www.aliasvault.com/roadmap
    note: Full vault export and import are available.
  e2ee_vault:
    answer: yes
    evidence: https://www.aliasvault.com/privacy-policy
    note: Vault data, including received emails, is end-to-end encrypted with the master password, which is never sent to the server.
imported_from: awesome-privacy
jurisdiction: NL
---
