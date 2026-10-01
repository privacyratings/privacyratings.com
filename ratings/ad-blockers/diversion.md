---
name: Diversion
description: Shell script ad blocker for routers running Asuswrt-Merlin firmware. Blocks ad and tracker domains through dnsmasq and can manage Entware and pixelserv-tls.
website: https://diversion.ch
imported_from: awesome-privacy
source: https://diversion.ch/diversion_adblocking/diversion
criteria:
  open_source:
    answer: yes
    evidence: https://diversion.ch/diversion_adblocking/diversion
    note: GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://diversion.ch
    note: The website uses self-hosted Matomo analytics. The script contains no telemetry.
  no_ads:
    answer: yes
    evidence: https://diversion.ch
    note: Free to use and supported by donations.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: yes
    evidence: https://diversion.ch/diversion_adblocking/diversion
    note: Blocks domains from a selected blocking list once installed, with no paid tier.
  no_data_collection:
    answer: yes
    evidence: https://diversion.ch/diversion_adblocking/diversion
    note: Filtering runs on the router, and no browsing data is sent to the developer.
  custom_filters:
    answer: yes
    evidence: https://diversion.ch/diversion_adblocking/diversion
    note: Supports a user denylist and allowlist, and a custom secondary blocking list.
---
