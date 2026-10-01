---
name: Tofu
description: Open source two-factor authentication app for iOS that generates TOTP and HOTP codes. It works without a network connection.
website: https://www.tofuauth.com
source: https://github.com/iKenndac/Tofu
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/iKenndac/Tofu/blob/master/LICENSE
    note: ISC.
  no_trackers:
    answer: no
    evidence: https://www.tofuauth.com/
    note: The app needs no network connection, but the website loads an analytics script from okayanalytics.com, a third-party domain now held by a domain reseller.
  no_ads:
    answer: yes
    evidence: https://github.com/iKenndac/Tofu#installation
    note: Free app with no ads or paid tiers.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
