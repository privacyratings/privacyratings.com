---
name: ChromeOS
description: Google's Linux-based operating system for Chromebooks, built around the Chrome browser and tied to a Google account.
website: https://chromeos.google
aliases:
  - Chromebook
mainstream: true
jurisdiction: US
criteria:
  open_source:
    answer: no
    evidence: https://www.chromium.org/chromium-os/
    note: Closed source. It is built on the open source ChromiumOS project, but ChromeOS itself includes proprietary components.
  no_trackers:
    answer: no
    evidence: https://support.google.com/chromebook/answer/96817
    note: The website loads Google Tag Manager, and ChromeOS sends usage statistics and crash reports to Google unless turned off.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google's privacy policy, which covers ChromeOS, allows data from its services to be used for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
