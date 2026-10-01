---
name: Orion Browser
description: WebKit-based browser from Kagi for macOS and iOS that blocks ads and trackers by default, has no telemetry, and supports many Chrome and Firefox extensions.
website: https://orionbrowser.com
jurisdiction: US
platforms:
  - macos
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source. Kagi says some components have been published and more are planned.
  no_trackers:
    answer: yes
    evidence: https://help.kagi.com/orion/privacy-and-security/respecting-privacy.html
    note: Orion has no built-in telemetry.
  no_ads:
    answer: yes
    evidence: https://orionbrowser.com/
    note: Funded by users through Orion+ subscriptions and lifetime licenses, with no ads and no third-party deals.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://help.kagi.com/orion/privacy-and-security/ad-tracking-blocking.html
    note: Blocks first-party and third-party ads and trackers by default.
  fingerprinting_protection:
    answer: no
    evidence: https://help.kagi.com/orion/privacy-and-security/preventing-fingerprinting.html
    note: Relies on blocking fingerprinting scripts and does not randomize or standardize fingerprinting data.
  no_google_services:
    answer: yes
    evidence: https://help.kagi.com/orion/privacy-and-security/respecting-privacy.html
    note: The browser does not phone home and includes no Google services.
  security_updates:
    answer: yes
    evidence: https://help.kagi.com/orion/faq/faq.html
    note: Built on Apple's WebKit, whose security fixes arrive through automatic macOS and iOS updates.
---
