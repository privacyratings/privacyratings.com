---
name: Facebook Container
description: Firefox extension from Mozilla that isolates Facebook, Instagram and Messenger in a separate container so that Facebook cannot easily link activity on other websites to the user's account.
website: https://addons.mozilla.org/en-US/firefox/addon/facebook-container/
family: mozilla
source: https://github.com/mozilla/contain-facebook
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mozilla/contain-facebook/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/mozilla/contain-facebook
    note: No telemetry or analytics in the source code.
  no_ads:
    answer: yes
    evidence: https://addons.mozilla.org/en-US/firefox/addon/facebook-container/
    note: Free extension from Mozilla with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
