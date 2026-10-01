---
name: Amazon Music
description: Music and podcast streaming service from Amazon, with an ad-supported free tier, a catalog included with Prime and the paid Amazon Music Unlimited plan.
website: https://music.amazon.com
mainstream: true
domain: music.amazon.com
jurisdiction: US
platforms:
  - windows
  - macos
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.amazon.mp3/latest/
    note: The Android app includes Amazon Advertisement, Branch, Bugsnag, Pangle and Snowplow.
  no_ads:
    answer: no
    evidence: https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ
    note: The free tier is funded by ads, and Amazon uses personal data for interest-based advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.amazon.com/gp/help/customer/display.html?nodeId=GYSDRGWQ2C2CRYEF
    note: Amazon publishes information request reports for its consumer services every six months.
  user_notice:
    answer: yes
    evidence: https://www.amazon.com/gp/help/customer/display.html?nodeId=GYSDRGWQ2C2CRYEF
    note: Amazon notifies customers before disclosing content information, unless prohibited or there is clear indication of illegal conduct.
---
