---
name: Atlassian Statuspage
description: >-
  Hosted status pages from Atlassian.
website: https://www.atlassian.com/software/statuspage
mainstream: true
criteria:
  open_source:
    answer: no
    note: Closed source.
  self_hosted:
    answer: no
    note: Hosted by the vendor only.
  no_trackers:
    answer: no
    evidence: https://www.atlassian.com/legal/privacy-policy
    note: The privacy policy says advertising and analytics partners use cookies, pixels and other tracking technologies.
  no_ads:
    answer: partial
    evidence: https://www.atlassian.com/legal/privacy-policy
    note: The privacy policy describes personalised advertising based on user activity.
  independent_audit:
    answer: partial
    evidence: https://www.atlassian.com/trust/compliance/resources/soc2
    note: Statuspage is covered by SOC 2 audits, but reports are only available under NDA.
  no_visitor_tracking:
    answer: no
    evidence: https://status.atlassian.com
    note: Hosted status pages load Google reCAPTCHA Enterprise for the subscribe form, and owners can add their own analytics.
  history:
    answer: yes
    evidence: https://www.githubstatus.com/history
    note: Status pages show uptime bars and past incident history.
---
