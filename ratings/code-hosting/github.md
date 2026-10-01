---
name: GitHub
description: Git hosting service owned by Microsoft, with pull requests, issues, Actions CI/CD, package hosting, Pages static sites and Copilot AI features.
website: https://github.com
mainstream: true
jurisdiction: US
domain: github.com
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source. Some tools, such as GitHub Desktop and GitHub CLI, are open source.
  no_trackers:
    answer: no
    evidence: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
    note: The privacy statement allows third-party cookies for interest-based advertising, and the Exodus report finds Google Firebase Analytics and Crashlytics in the Android app.
  no_ads:
    answer: partial
    evidence: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
    note: Funded by subscriptions, but the privacy statement says third-party cookies may gather data for interest-based advertising.
  independent_audit:
    answer: partial
    evidence: https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization
    note: SOC reports and ISO/IEC 27001 certification are only available to organization owners in account settings.
  transparency_report:
    answer: yes
    evidence: https://transparencycenter.github.com/
    note: Publishes a transparency report with counts of requests for user information, disclosures and takedowns, with data in the github/transparency repository.
  user_notice:
    answer: yes
    evidence: https://docs.github.com/en/site-policy/other-site-policies/guidelines-for-legal-requests-of-user-data
    note: Policy is to notify affected users about requests for their account information unless prohibited by law or court order.
---
