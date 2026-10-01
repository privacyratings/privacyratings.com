---
name: Chrome Remote Desktop
description: Free remote access tool from Google that connects to Windows, macOS and Linux computers through a web app or mobile apps, using a Google account and Google's relay servers.
website: https://remotedesktop.google.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source; the official apps and service are proprietary, though parts of the host code are published in the Chromium source tree.
  no_trackers:
    answer: no
    evidence: https://support.google.com/chrome/answer/1649523?hl=en
    note: Google collects anonymized data on network delays and session length, with no documented way to turn it off.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The app shows no ads, but it is provided free by Google, whose privacy policy uses activity across its services to fund and personalize advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
