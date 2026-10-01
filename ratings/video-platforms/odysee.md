---
name: Odysee
description: Video sharing platform built on the LBRY protocol, with creator tips and memberships paid in credits or money.
website: https://odysee.com
source: https://github.com/OdyseeTeam/odysee-frontend
jurisdiction: US
platforms:
  - web
  - android
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/OdyseeTeam/odysee-frontend/blob/master/LICENSE
    note: The web app is MIT licensed, but not all server components of the hosted service are published.
  no_trackers:
    answer: no
    evidence: https://odysee.com/$/privacypolicy
    note: The privacy policy states the site uses Google Analytics and Google AdSense.
  no_ads:
    answer: no
    evidence: https://odysee.com/$/privacypolicy
    note: Shows Google AdSense ads, with an ad-free paid plan.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
