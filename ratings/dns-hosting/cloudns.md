---
name: ClouDNS
description: Managed DNS hosting from Bulgaria with a free plan and paid plans adding anycast, DNSSEC, GeoDNS, DDoS protection, secondary DNS and failover.
website: https://www.cloudns.net
jurisdiction: BG
domain: www.cloudns.net
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The home page loads Google Analytics and Google Tag Manager.
  no_ads:
    answer: no
    evidence: https://www.cloudns.net/privacy-policy/
    note: Personal data is not sold, but optional advertising cookies are used on the website.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  dnssec:
    answer: yes
    evidence: https://www.cloudns.net/dnssec/
    note: Activated with one button in the zone's control panel on paid plans. The DS record is added at the registrar.
  api_access:
    answer: partial
    evidence: https://www.cloudns.net/premium/
    note: The HTTP API is only included in paid plans.
  two_factor:
    answer: yes
    evidence: https://www.cloudns.net/wiki/article/201/
    note: TOTP authenticator apps are supported.
---
