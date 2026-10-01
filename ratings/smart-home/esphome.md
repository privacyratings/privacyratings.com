---
name: ESPHome
description: Open source system for building custom firmware for ESP32, ESP8266 and other microcontrollers from YAML files, turning them into local smart home devices that integrate with Home Assistant.
website: https://esphome.io
source: https://github.com/esphome/esphome
jurisdiction: CH
platforms:
  - windows
  - macos
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/esphome/esphome/blob/dev/LICENSE
    note: The C++ runtime is GPL-3.0 and the Python tooling is MIT.
  no_trackers:
    answer: partial
    evidence: https://github.com/esphome/esphome
    note: No telemetry or analytics in the source code, but the website uses self-hosted Plausible analytics.
  no_ads:
    answer: yes
    evidence: https://www.openhomefoundation.org
    note: Maintained by the Open Home Foundation, funded mainly by Home Assistant Cloud subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
