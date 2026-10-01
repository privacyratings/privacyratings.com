---
name: Raindrop.io
description: Hosted bookmark manager for saving, tagging and organizing links, articles and files in collections, with a web app, browser extensions and desktop and mobile apps.
website: https://raindrop.io
source: https://github.com/raindropio/app
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
    answer: partial
    evidence: https://github.com/raindropio/app/blob/master/LICENSE.md
    note: The web app, browser extensions and desktop app are MIT-licensed; the server and mobile apps are closed source.
  no_trackers:
    answer: no
    evidence: https://help.raindrop.io/privacy
    note: The web app sends error reports to Sentry and the privacy policy describes usage analytics and third-party cookies; the Android app has no known trackers in its Exodus report.
  no_ads:
    answer: yes
    evidence: https://raindrop.io/pro/buy
    note: Funded by Pro subscriptions, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
