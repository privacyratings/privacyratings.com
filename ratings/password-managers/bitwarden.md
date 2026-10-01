---
name: Bitwarden
description: >-
  Open-source, end-to-end encrypted password manager with apps for every platform and an option to self-host.
website: https://bitwarden.com
jurisdiction: US
source: https://github.com/bitwarden/clients
platforms: [windows, macos, linux, android, ios, web, browser]
domain: vault.bitwarden.com
pick: 2
pick_reason: >-
  The best choice for syncing across every device and sharing with family or a team. End-to-end encrypted, audited every year, and it can be self-hosted.
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/bitwarden/server/blob/main/LICENSE.txt
    note: Apps are GPL-3.0 and the server is AGPL-3.0, but some business features use the source-available Bitwarden License.
  no_ads:
    answer: yes
    evidence: https://bitwarden.com/pricing/
    note: Funded by paid plans.
  independent_audit:
    answer: yes
    evidence: https://bitwarden.com/assets/5yO7sKgjdwGYg7SXVqD2Vc/4a7ef3cce23d8e929ef3cd8238d3d392/2025_Bitwarden_Core_Application_Security_Report.pdf
    note: Full reports are published yearly, including recent audits by Cure53, Fracture Labs, Unit 42 and ETH Zurich.
  e2ee_vault:
    answer: yes
    evidence: https://bitwarden.com/help/bitwarden-security-white-paper/
    note: Vault data is encrypted on the device with a key derived from the master password before it is synced.
  self_host_or_local:
    answer: yes
    evidence: https://bitwarden.com/help/install-on-premise-linux/
    note: The server can be self-hosted.
  export:
    answer: yes
    evidence: https://bitwarden.com/help/export-your-data/
    note: JSON (plain or encrypted), CSV, and ZIP with attachments.
  no_trackers:
    answer: no
    evidence: https://bitwarden.com/privacy/
    note: The website loads Google Tag Manager.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
