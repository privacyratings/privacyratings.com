---
name: Simple Analytics
description: Hosted web analytics from the Netherlands that counts page views and unique visits without cookies, fingerprinting or IP addresses.
website: https://www.simpleanalytics.com
source: https://github.com/simpleanalytics/scripts
domain: www.simpleanalytics.com
jurisdiction: NL
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/simpleanalytics/scripts/blob/main/LICENSE
    note: The tracking scripts are MIT, but the hosted analytics service is closed source.
  no_trackers:
    answer: yes
    evidence: https://www.simpleanalytics.com/privacy-policy
    note: No third-party trackers. The website uses Simple Analytics' own analytics, which are cookieless and aggregate-only.
  no_ads:
    answer: yes
    evidence: https://www.simpleanalytics.com/privacy-policy
    note: Funded by subscriptions. The privacy policy states data is never sold to third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: yes
    evidence: https://docs.simpleanalytics.com/what-we-collect
    note: No cookies, local storage, fingerprinting or IP hashing are used.
  no_personal_data:
    answer: yes
    evidence: https://docs.simpleanalytics.com/what-we-collect
    note: IP addresses are not collected or stored, and country is derived from the visitor's time zone.
  self_hostable:
    answer: no
    note: Hosted only.
---
