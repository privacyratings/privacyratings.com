---
name: Loops
description: Email platform for software companies that combines marketing campaigns, automated sequences and a transactional email API.
website: https://loops.so
jurisdiction: US
domain: loops.so
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://loops.so/privacy
    note: The privacy policy lists Google Analytics and Segment, and the website loads Google Tag Manager, Amplitude, PostHog and VWO.
  no_ads:
    answer: partial
    evidence: https://loops.so/privacy
    note: Funded by paid plans and states personal data is not sold, but advertising cookies are used on the website.
  tracking_off_by_default:
    answer: yes
    evidence: https://loops.so/docs/transactional
    note: Open and click tracking are off for transactional email. Marketing campaigns are tracked.
---
