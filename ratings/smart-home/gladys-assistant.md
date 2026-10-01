---
name: Gladys Assistant
description: Self-hosted, open source smart home software that runs locally on a Raspberry Pi, mini PC or NAS, with Zigbee, Matter and MQTT support. Optional paid remote access and backups through Gladys Plus.
website: https://gladysassistant.com
source: https://github.com/GladysAssistant/Gladys
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/GladysAssistant/Gladys/blob/master/LICENSE
    note: Apache-2.0. The Gladys Plus gateway is also open source.
  no_trackers:
    answer: no
    evidence: https://github.com/GladysAssistant/Gladys/blob/master/server/lib/gateway/gateway.getLatestGladysVersion.js
    note: Each instance sends usage statistics, including an instance ID, device count and integrations in use, with every update check, and there is no setting to turn this off.
  no_ads:
    answer: yes
    evidence: https://gladysassistant.com/plus/privacy/
    note: Funded by Gladys Plus subscriptions. The privacy policy states data is never sold or shared for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
jurisdiction: FR
---
