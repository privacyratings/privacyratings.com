---
name: NordVPN Meshnet
description: Free mesh networking feature of the NordVPN apps that links devices directly over NordLynx, a WireGuard-based protocol. Meshnet is free to use.
website: https://nordvpn.com/meshnet/
source: https://github.com/NordSecurity/libtelio
jurisdiction: PA
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/NordSecurity/libtelio/blob/main/LICENSE
    note: The libtelio networking library and the Linux app are GPL-3.0. The other apps and the coordination servers are closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.nordvpn.android/latest/
    note: The Android app includes AppsFlyer, Google Firebase Analytics and Crashlytics.
  no_ads:
    answer: yes
    evidence: https://nordvpn.com/meshnet/
    note: Free to use and funded by NordVPN subscriptions, with no ads in the apps.
  device_keys:
    answer: partial
    evidence: https://meshnet.nordvpn.com/getting-started/meshnet-explained
    note: Connections are described as end-to-end encrypted, but where keys are created and what relays can see is not documented.
  self_hosted_control:
    answer: no
    note: Only NordVPN's hosted service can be used.
---
