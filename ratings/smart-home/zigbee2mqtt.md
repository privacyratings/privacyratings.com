---
name: Zigbee2MQTT
description: Open source bridge that connects Zigbee devices to an MQTT broker through a USB or network coordinator, so they can be used locally without the manufacturers' hubs or clouds.
website: https://www.zigbee2mqtt.io
source: https://github.com/Koenkk/zigbee2mqtt
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Koenkk/zigbee2mqtt/blob/master/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/Koenkk/zigbee2mqtt
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://github.com/Koenkk/zigbee2mqtt/blob/master/README.md
    note: Free software funded by donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
