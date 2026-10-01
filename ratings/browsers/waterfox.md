---
name: WaterFox
description: Firefox-based browser with telemetry, studies and sponsored content removed, and a built-in ad and tracker blocker. Available for desktop and Android.
website: https://www.waterfox.com
imported_from: awesome-privacy
source: https://github.com/BrowserWorks/waterfox
jurisdiction: GB
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/BrowserWorks/waterfox/blob/current/LICENSE
    note: MPL-2.0 and other Mozilla licenses.
  no_trackers:
    answer: yes
    evidence: https://www.waterfox.com/docs/policies/privacy/
    note: No telemetry or analytics. Telemetry modules are disabled at build time.
  no_ads:
    answer: yes
    evidence: https://www.waterfox.com/docs/policies/privacy/
    note: No sponsored content in the browser. Funded through search partner revenue sharing, not data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://www.waterfox.com/docs/policies/privacy/
    note: A built-in ad and tracker blocker with bundled filter lists works from first launch.
  fingerprinting_protection:
    answer: partial
    evidence: https://www.waterfox.com/support/enhanced-tracking-protection/
    note: Standard Enhanced Tracking Protection is the default. Stronger fingerprinting protections require Strict or custom settings.
  no_google_services:
    answer: yes
    evidence: https://www.waterfox.com/docs/policies/privacy/
    note: Google Safe Browsing is removed. Google's Widevine module is only downloaded when DRM video is played.
  security_updates:
    answer: yes
    evidence: https://www.waterfox.com/releases/
    note: Releases include Mozilla ESR security fixes, usually within about a week, and install through the built-in updater.
---
