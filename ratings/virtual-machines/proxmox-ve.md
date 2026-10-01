---
name: Proxmox VE
description: Open source server virtualization platform based on Debian that manages KVM virtual machines and LXC containers through a web interface, with clustering, software-defined storage and backup integration.
website: https://www.proxmox.com/en/products/proxmox-virtual-environment/overview
source: https://git.proxmox.com
jurisdiction: AT
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://git.proxmox.com/?p=pve-manager.git;a=blob;f=debian/copyright
    note: AGPL-3.0-or-later.
  no_trackers:
    answer: partial
    evidence: https://www.proxmox.com/en/products/proxmox-virtual-environment/overview
    note: The website runs self-hosted Matomo analytics. The platform itself has no telemetry.
  no_ads:
    answer: yes
    evidence: https://www.proxmox.com/en/products/proxmox-virtual-environment/pricing
    note: Free software funded by paid support subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
