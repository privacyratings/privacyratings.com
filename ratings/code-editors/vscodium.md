---
name: VSCodium
description: Community builds of Microsoft's VS Code source under the MIT license, without Microsoft branding and with telemetry turned off. Uses the Open VSX extension registry by default.
website: https://vscodium.com
source: https://github.com/VSCodium/vscodium
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/VSCodium/vscodium/blob/master/LICENSE
    note: MIT.
  no_trackers:
    answer: yes
    evidence: https://github.com/VSCodium/vscodium/blob/master/docs/telemetry.md
    note: Builds are made without Microsoft telemetry and all telemetry settings are off by default. Some third-party extensions may send their own telemetry.
  no_ads:
    answer: yes
    evidence: https://github.com/VSCodium/vscodium/blob/master/LICENSE
    note: Free community project under the MIT license, with no ads or paid features.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
---
