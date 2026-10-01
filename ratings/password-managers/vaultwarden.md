---
name: Vaultwarden
description: Open source, lightweight server written in Rust that implements the Bitwarden client API for self-hosting. It works with the official Bitwarden apps and extensions and is not affiliated with Bitwarden.
website: https://github.com/dani-garcia/vaultwarden
source: https://github.com/dani-garcia/vaultwarden
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/dani-garcia/vaultwarden/blob/main/LICENSE.txt
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/dani-garcia/vaultwarden
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/dani-garcia/vaultwarden/blob/main/.github/FUNDING.yml
    note: Volunteer project funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  e2ee_vault:
    answer: yes
    evidence: https://bitwarden.com/help/bitwarden-security-white-paper/
    note: Vault data is encrypted by the Bitwarden clients before it reaches the server.
  self_host_or_local:
    answer: yes
    evidence: https://github.com/dani-garcia/vaultwarden
    note: The server is designed to be self-hosted.
  export:
    answer: yes
    evidence: https://bitwarden.com/help/export-your-data/
    note: The Bitwarden clients export to JSON (plain or encrypted), CSV, and ZIP with attachments.
---
