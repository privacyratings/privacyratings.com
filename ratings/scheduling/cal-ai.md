---
name: Cal.ai
description: AI phone agent from Cal.com that makes scheduling calls to book meetings, confirm appointments, send reminders and follow up on no-shows, triggered from Cal.com workflows.
website: https://cal.com/ai
alternatives_page: true
domain: app.cal.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    evidence: https://cal.com/blog/cal-com-goes-closed-source-why
    note: Closed source. Cal.ai is part of the Cal.com production codebase, which moved to a private repository.
  no_trackers:
    answer: no
    evidence: https://cal.com/privacy
    note: The marketing site runs analytics and ad measurement, loading Google Tag Manager, PostHog and LinkedIn scripts, and the product uses opt-out product analytics.
  no_ads:
    answer: yes
    evidence: https://cal.com/privacy
    note: Funded by paid usage. The privacy policy states personal data is never sold and booking data is not used for advertising profiles.
  independent_audit:
    answer: partial
    evidence: https://cal.com/security
    note: Cal.com lists SOC 2 Type II and ISO 27001 certification and third-party penetration tests, but the reports are not public.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
