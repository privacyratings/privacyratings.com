---
name: PaperVault
description: Encrypts secrets into a printable paper vault and splits the decryption key into several paper key cards with Shamir secret sharing. It runs in the browser, as a standalone offline app or from the command line.
website: https://papervault.xyz
source: https://github.com/boazeb/papervault
domain: papervault.xyz
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/boazeb/papervault/blob/main/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/boazeb/papervault/blob/main/package.json
    note: No telemetry or analytics in the source code, and the website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://github.com/boazeb/papervault#readme
    note: Free open source tool with no ads or paid tiers.
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
    evidence: https://github.com/boazeb/papervault#-overview
    note: "Local-only: secrets are encrypted in the browser and the key is split into printed shards, with no sync service."
  self_host_or_local:
    answer: yes
    evidence: https://github.com/boazeb/papervault#-self-hosted-web-app-recommended-for-maximum-security
    note: Vaults are kept on paper or local media, and the app can be self-hosted or run offline.
  export:
    answer: yes
    evidence: https://github.com/boazeb/papervault#-quick-start
    note: Vaults and keys are printed or saved to digital media, and any PaperVault instance can unlock them.
imported_from: awesome-privacy
---
