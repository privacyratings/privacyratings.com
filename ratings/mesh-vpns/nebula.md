---
name: Nebula
description: Overlay networking tool originally built at Slack that connects hosts over mutually authenticated, encrypted tunnels using its own certificate authority and firewall rules, with self-hosted lighthouse nodes for discovery.
website: https://github.com/slackhq/nebula
source: https://github.com/slackhq/nebula
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/slackhq/nebula/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: no
    evidence: https://nebula.defined.net/docs/
    note: No telemetry in the source code, but the official documentation site loads Google Analytics.
  no_ads:
    answer: yes
    evidence: https://github.com/slackhq/nebula
    note: Free open-source software maintained by Defined Networking, which sells a managed version, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://nebula.defined.net/docs/guides/sign-certificates-with-public-keys/
    note: Each host can create its own key pair, and only the public key is sent to the certificate authority for signing. Lighthouses only help hosts find each other.
  self_hosted_control:
    answer: yes
    evidence: https://nebula.defined.net/docs/guides/quick-start/
    note: The certificate authority and lighthouses are self-hosted and open source. A managed version is sold separately.
  no_connection_logs:
    answer: yes
    evidence: https://nebula.defined.net/docs/config/logging/
    note: Logs are written locally. The open-source version has no vendor service to send them to.
---
