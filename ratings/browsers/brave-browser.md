---
name: Brave Browser
description: Chromium-based browser with built-in ad, tracker and fingerprinting protection through Brave Shields.
website: https://brave.com
source: https://github.com/brave/brave-browser
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/brave/brave-browser/blob/master/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: partial
    evidence: https://brave.com/privacy/browser/
    note: Privacy-Preserving Product Analytics are on by default and can be turned off. No third-party analytics.
  no_ads:
    answer: partial
    evidence: https://brave.com/privacy/browser/
    note: Brave Ads, including New Tab Page ads, can appear by default and can be turned off. Ad matching happens on the device.
  independent_audit:
    answer: no
    note: No independent audit is published.
  tracker_blocking:
    answer: yes
    evidence: https://brave.com/shields/
    note: Brave Shields blocks trackers and ads by default.
  fingerprinting_protection:
    answer: yes
    evidence: https://brave.com/shields/
    note: Randomizes fingerprinting data by default.
  no_google_services:
    answer: partial
    evidence: https://brave.com/privacy/browser/
    note: Google Safe Browsing is proxied on desktop, but on Android requests reach Google directly. It can be turned off.
  security_updates:
    answer: yes
    evidence: https://brave.com/latest/
    note: Chromium security fixes ship within days and install automatically.
jurisdiction: US
---
