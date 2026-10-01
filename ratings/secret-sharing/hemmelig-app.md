---
name: Hemmelig.app
description: Secret sharing service that encrypts text and files in the browser and deletes them after a set number of views or an expiry time. Supports passwords, IP restrictions, webhooks and self-hosting.
website: https://hemmelig.app
source: https://github.com/HemmeligOrg/Hemmelig.app
domain: hemmelig.app
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/HemmeligOrg/Hemmelig.app/blob/v7/LICENSE
    note: All code is public under the source-available O'Saasy license, which bans competing hosted offerings and is not OSI-approved.
  no_trackers:
    answer: partial
    evidence: https://hemmelig.app/privacy
    note: No third-party trackers, but the hosted service records page visits with first-party analytics using hashed visitor IDs; only instance administrators can turn it off.
  no_ads:
    answer: yes
    evidence: https://hemmelig.app/privacy
    note: Free service without ads, supported by donations. The privacy policy lists only the minimal data stored to run the service.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
imported_from: awesome-privacy
---
