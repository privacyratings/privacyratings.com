---
name: Proxmox Mail Gateway
description: Self-hosted email gateway distribution from Proxmox that filters inbound and outbound mail for spam, viruses and phishing, managed through a web interface.
website: https://www.proxmox.com/en/products/proxmox-mail-gateway/overview
source: https://git.proxmox.com/?p=pmg-api.git
jurisdiction: AT
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://git.proxmox.com/?p=pmg-api.git;a=blob;f=debian/copyright;hb=HEAD
    note: Licensed under the GNU AGPL version 3. Paid subscriptions add support and the enterprise update repository.
  no_trackers:
    answer: partial
    evidence: https://www.proxmox.com/en/privacy-policy
    note: The Proxmox website uses self-hosted Matomo analytics with anonymized IP addresses. The software itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://www.proxmox.com/en/products/proxmox-mail-gateway/pricing
    note: Funded by paid support subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
