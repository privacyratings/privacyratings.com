---
name: Heroku
description: Platform as a service owned by Salesforce that runs apps in managed containers called dynos, with Git-based deploys, add-ons, and managed Postgres and Key-Value Store.
website: https://www.heroku.com
mainstream: true
jurisdiction: US
domain: dashboard.heroku.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source. Buildpacks and the Heroku CLI are open source, but the platform is not.
  no_trackers:
    answer: no
    evidence: https://www.salesforce.com/company/legal/privacy/
    note: The website loads Google Tag Manager, and the Salesforce privacy statement covers cookies used for tailored advertising.
  no_ads:
    answer: partial
    evidence: https://www.salesforce.com/company/legal/privacy/
    note: Funded by paid plans, but the Salesforce privacy statement allows sharing data for advertising on non-Salesforce sites to promote its services.
  independent_audit:
    answer: partial
    evidence: https://www.heroku.com/compliance/
    note: SOC 1, 2 and 3 reports and ISO 27001 certification exist, but full reports are only available to customers.
  transparency_report:
    answer: yes
    evidence: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/H2-2025-Transparency-Report.pdf
    note: Salesforce, which owns Heroku, publishes semi-annual transparency reports with counts of government requests.
  user_notice:
    answer: yes
    evidence: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/H2-2025-Transparency-Report.pdf
    note: Salesforce notifies customers of legally binding requests for their data unless prohibited by law.
---
