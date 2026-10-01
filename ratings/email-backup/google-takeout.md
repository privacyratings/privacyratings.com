---
name: Google Takeout
description: Google's data export service for Google accounts. It exports Gmail as an MBOX file, along with data from other Google products, as a download or to a cloud storage service, once or on a schedule.
website: https://takeout.google.com
mainstream: true
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://policies.google.com/privacy
    note: The Google privacy policy covers collection of activity data across Google services, including for advertising.
  no_ads:
    answer: no
    evidence: https://policies.google.com/technologies/ads
    note: Google is funded by advertising and uses account data to personalize ads unless this is turned off.
  independent_audit:
    answer: no
    note: No independent audit of Google Takeout is published.
---
