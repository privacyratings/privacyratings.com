---
name: Radio Silence
description: Paid network monitor and outbound firewall for macOS that lists every app's connections and blocks chosen apps from reaching the internet.
website: https://radiosilenceapp.com
platforms:
  - macos
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://radiosilenceapp.com/privacy
    note: No third-party trackers, and the app sends no usage data. The website's Simple Analytics are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://radiosilenceapp.com/buy
    note: Funded by one-time license sales, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
also_in:
  - macos-hardening
---
