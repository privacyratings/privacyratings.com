---
name: Netmaker
description: WireGuard-based platform for building mesh and site-to-site networks, with an open-source server that can be self-hosted and a hosted cloud version.
website: https://www.netmaker.io
source: https://github.com/gravitl/netmaker
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/gravitl/netmaker/blob/develop/LICENSE.md
    note: All code is public. The core is Apache-2.0, and features in the pro directory of the same repository use a source-available enterprise license.
  no_trackers:
    answer: no
    evidence: https://docs.netmaker.io/docs/references/faq
    note: Self-hosted servers send usage telemetry to PostHog unless it is turned off, and the website loads PostHog and Intercom.
  no_ads:
    answer: yes
    evidence: https://www.netmaker.io/pricing
    note: Funded by paid plans, with a free open-source community edition and no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: partial
    evidence: https://docs.netmaker.io/docs/how-to-guides/integrating-non-native-devices
    note: The netclient agent creates its own key pair, but WireGuard configs for devices without netclient, including private keys, are created on the server.
  self_hosted_control:
    answer: yes
    evidence: https://github.com/gravitl/netmaker
    note: The server is open source and can be self-hosted. Some pro features need a paid license.
---
