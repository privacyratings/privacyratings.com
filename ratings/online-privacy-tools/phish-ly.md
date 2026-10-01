---
name: Phish.ly
description: Free service from Tines that analyzes a suspicious email forwarded to it, scanning its links with urlscan.io and replying with a report.
website: https://phish.ly
domain: phish.ly
imported_from: awesome-privacy
jurisdiction: IE
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://phish.ly/
    note: The home page loads Google Analytics, Google Tag Manager and Leadfeeder.
  no_ads:
    answer: yes
    evidence: https://www.tines.com/privacy/
    note: No ads; the tool is run by Tines, whose privacy policy states it does not sell personal information.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
