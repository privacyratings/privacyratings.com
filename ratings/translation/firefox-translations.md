---
name: Firefox Translations
description: Built-in Firefox feature that translates web pages on the device with local machine translation models, without sending text to a cloud service.
website: https://support.mozilla.org/en-US/kb/website-translation
family: mozilla
source: https://github.com/mozilla-firefox/firefox
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
    evidence: https://raw.githubusercontent.com/mozilla-firefox/firefox/main/LICENSE
    note: Part of Firefox, licensed under MPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://www.mozilla.org/en-US/privacy/firefox/
    note: No third-party trackers in the feature, but Firefox sends technical and interaction telemetry by default. Telemetry can be turned off.
  no_ads:
    answer: no
    evidence: https://www.mozilla.org/en-US/privacy/firefox/
    note: Part of Firefox, which shows sponsored content on the New Tab page by default and is mainly funded by search engine deals.
  independent_audit:
    answer: no
    note: No independent audit is published.
  offline:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/website-translation
    note: Translation runs entirely on the device, and text is not sent to cloud servers.
  no_retention:
    answer: yes
    evidence: https://support.mozilla.org/en-US/kb/website-translation
    note: Text is translated locally and never leaves the device.
---
