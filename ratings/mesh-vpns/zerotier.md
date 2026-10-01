---
name: ZeroTier
description: Peer-to-peer virtual network platform that joins devices into encrypted virtual Ethernet networks, managed through ZeroTier's hosted controller or a self-hosted one.
website: https://www.zerotier.com
source: https://github.com/zerotier/ZeroTierOne
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/zerotier/ZeroTierOne/blob/dev/LICENSE.txt
    note: The core is MPL-2.0, but parts of the repository use a source-available license and the hosted ZeroTier Central is closed source.
  no_trackers:
    answer: no
    evidence: https://www.zerotier.com/privacy-policy/
    note: The website loads Google Analytics, HubSpot, Microsoft Clarity, Facebook, LinkedIn and Reddit trackers.
  no_ads:
    answer: partial
    evidence: https://www.zerotier.com/pricing/
    note: Funded by paid plans with no ads in the product, though the website shares data with ad partners for ZeroTier's own marketing.
  independent_audit:
    answer: no
    note: No independent audit is published.
  device_keys:
    answer: yes
    evidence: https://docs.zerotier.com/protocol
    note: Each node creates its identity keys locally. Traffic is end-to-end encrypted and cannot be read by root servers or network controllers.
  self_hosted_control:
    answer: partial
    evidence: https://github.com/zerotier/ZeroTierOne/blob/dev/nonfree/LICENSE.md
    note: The network controller can be self-hosted, but its code uses a source-available license that forbids commercial use without a paid license.
---
