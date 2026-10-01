---
name: Jira
description: Atlassian's issue and project tracking tool for software and business teams, with Scrum and Kanban boards, workflows and reporting. Available as a cloud service or self-managed Data Center edition.
website: https://www.atlassian.com/software/jira
mainstream: true
jurisdiction: US
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.atlassian.android.jira.core/latest/
    note: Exodus finds Google Analytics, Segment and Sentry in the Android app, and the privacy policy describes advertising and analytics partners.
  no_ads:
    answer: partial
    evidence: https://www.atlassian.com/legal/privacy-policy
    note: Funded by subscriptions with no ads in the product, but the policy allows targeted advertising and sharing identifiers with third-party advertising providers.
  independent_audit:
    answer: partial
    evidence: https://www.atlassian.com/trust/compliance/resources/soc2
    note: Jira Cloud is covered by SOC 2 audits, but reports are only available under NDA.
---
