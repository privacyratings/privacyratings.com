---
name: OpenZiti
description: Open-source zero-trust networking platform from NetFoundry that connects apps and devices through an overlay of self-hosted routers and a controller, with tunneler apps and SDKs.
website: https://netfoundry.io/docs/openziti/
source: https://github.com/openziti/ziti
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/openziti/ziti/blob/main/LICENSE
    note: Apache-2.0.
  no_trackers:
    answer: no
    evidence: https://netfoundry.io/docs/openziti/
    note: The website loads Google Tag Manager and Hotjar.
  no_ads:
    answer: yes
    evidence: https://netfoundry.io/docs/openziti/
    note: Free open-source software. NetFoundry sells a hosted version, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://netfoundry.io/docs/openziti/learn/core-concepts/security/SecurityAndOpenZiti/end-to-end-encryption
    note: Each side creates its own key pair and the controller only swaps public keys. Data is encrypted in the SDK and routers cannot read it.
  self_hosted_control:
    answer: yes
    evidence: https://github.com/openziti/ziti
    note: The controller and routers are open source and can be self-hosted.
---
