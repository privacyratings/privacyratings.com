---
name: AdGuard Home
description: Self-hosted DNS server that blocks ads and trackers for every device on a network. Includes a web dashboard, encrypted DNS support and parental controls.
website: https://adguard.com/en/adguard-home/overview.html
family: adguard
source: https://github.com/AdguardTeam/AdGuardHome
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardHome/blob/master/LICENSE.txt
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardHome#readme
    note: Collects no usage statistics and uses no web services unless configured to.
  no_ads:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardHome#readme
    note: Free and open source with no ads. Developed by AdGuard, which sells other products.
  independent_audit:
    answer: no
    note: No independent audit is published.
  blocks_by_default:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardHome/blob/master/internal/home/config.go
    note: The AdGuard DNS filter is enabled in the default configuration, for free.
  no_data_collection:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardHome#readme
    note: Filtering runs on the user's own server, and no usage statistics are sent to the developer.
  custom_filters:
    answer: yes
    evidence: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration
    note: Supports additional filter lists and user-defined filtering rules.
jurisdiction: CY
---
