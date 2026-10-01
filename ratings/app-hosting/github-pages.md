---
name: GitHub Pages
description: Static website hosting from GitHub repositories, with custom domains, HTTPS, and builds through GitHub Actions or Jekyll.
website: https://pages.github.com
jurisdiction: US
domain: github.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source. The Jekyll generator and the Pages GitHub Actions are open source, but the GitHub service is not.
  no_trackers:
    answer: no
    evidence: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
    note: The GitHub privacy statement allows third-party cookies for interest-based advertising on its marketing pages.
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
    note: GitHub publishes a transparency report with counts of requests for user information, disclosures and takedowns.
  user_notice:
    answer: yes
    evidence: https://docs.github.com/en/site-policy/other-site-policies/guidelines-for-legal-requests-of-user-data
    note: Policy is to notify affected users about requests for their account information unless prohibited by law or court order.
---
