---
name: Northflank
description: Platform for deploying services, jobs, databases and GPU workloads on Northflank's cloud or in a customer's own cloud account, built on Kubernetes.
website: https://northflank.com
jurisdiction: GB
domain: app.northflank.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://northflank.com/legal/privacy
    note: The website loads PostHog and Sentry, and the privacy policy lists ad networks and analytics providers among recipients of personal data.
  no_ads:
    answer: partial
    evidence: https://northflank.com/legal/privacy
    note: Funded by paid plans and does not sell data, but the privacy policy lists ad networks and advertising providers among recipients.
  independent_audit:
    answer: partial
    evidence: https://northflank.com/security
    note: A SOC 2 Type 2 report exists but is only available on request through the trust center.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
