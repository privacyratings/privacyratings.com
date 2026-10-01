---
name: Cal.com
description: Hosted scheduling platform for booking pages, team round-robin, routing forms and workflows, with calendar and video conferencing integrations.
website: https://cal.com
domain: app.cal.com
jurisdiction: US
platforms:
  - web
pick: 1
pick_reason: Booking pages, team round-robin, routing forms and workflows with calendar and video integrations, in a hosted service. The MIT-licensed Cal.diy edition covers self-hosting on your own server.
criteria:
  open_source:
    answer: no
    evidence: https://cal.com/blog/cal-com-goes-closed-source-why
    note: Closed source. The production code moved to a private repository, and only the self-hosted community fork Cal.diy remains MIT-licensed.
  no_trackers:
    answer: no
    evidence: https://cal.com/privacy
    note: The marketing site runs analytics and ad measurement, loading Google Tag Manager, PostHog, Facebook and LinkedIn scripts.
  no_ads:
    answer: yes
    evidence: https://cal.com/privacy
    note: Funded by paid plans. The privacy policy states personal data is never sold and booking data is not used for advertising profiles.
  independent_audit:
    answer: partial
    evidence: https://cal.com/security
    note: SOC 2 Type II and annual third-party penetration test reports exist, but are only available to signed-in users.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
alternatives_page: true
---
