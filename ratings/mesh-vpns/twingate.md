---
name: Twingate
description: Hosted zero-trust remote access service that connects devices to private resources through connectors on the customer's network, managed from Twingate's cloud controller.
website: https://www.twingate.com
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: The clients, connectors and controller are closed source.
  no_trackers:
    answer: no
    evidence: https://www.twingate.com/privacy
    note: The website uses Google Analytics and advertising cookies.
  no_ads:
    answer: partial
    evidence: https://www.twingate.com/privacy
    note: Funded by paid plans with no ads in the product, though website data is shared with ad partners for Twingate's own retargeting.
  device_keys:
    answer: yes
    evidence: https://www.twingate.com/docs/how-encryption-works-in-twingate
    note: The client creates the session key and connectors create their own key pairs. Relays and the controller cannot decrypt traffic.
  self_hosted_control:
    answer: no
    note: The controller is only offered as Twingate's hosted service.
  no_connection_logs:
    answer: no
    evidence: https://www.twingate.com/docs/exporting-network-traffic
    note: Network events for traffic through connectors are kept by Twingate for 24 hours to 12 months depending on the plan, with no documented way to turn them off.
---
