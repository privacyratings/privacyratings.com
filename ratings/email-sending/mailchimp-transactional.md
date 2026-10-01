---
name: Mailchimp Transactional
description: Transactional email API and SMTP relay from Mailchimp, formerly Mandrill, sold as an add-on to Mailchimp plans.
website: https://mailchimp.com/features/transactional-email/
aliases:
  - Mandrill
mainstream: true
jurisdiction: US
domain: mandrillapp.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.intuit.com/privacy/statement/
    note: The Intuit privacy statement covers advertising cookies, pixels and session-replay tools, and the website loads Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://www.intuit.com/privacy/statement/
    note: Funded by subscriptions and states data is not sold, but personal information is shared with advertising networks for targeted ads unless users opt out.
  independent_audit:
    answer: partial
    evidence: https://mailchimp.com/about/security/
    note: SOC 2 and ISO 27001 audits are done, but the reports are only available through the Intuit compliance portal.
  transparency_report:
    answer: partial
    evidence: https://mailchimp.com/legal/service-of-legal-process/
    note: Publishes how it accepts legal process from governments, but no request counts.
  user_notice:
    answer: partial
    evidence: https://mailchimp.com/legal/service-of-legal-process/
    note: Mailchimp reserves the right to notify customers of legal process, and some customer agreements require notice unless prohibited.
  content_retention:
    answer: partial
    evidence: https://mailchimp.com/developer/transactional/docs/activity-reports/
    note: A copy of the HTML and text parts of each sent email is kept for 30 days.
  tracking_off_by_default:
    answer: partial
    evidence: https://mailchimp.com/developer/transactional/docs/activity-reports/
    note: Click tracking is on by default for HTML and text email. Open and click tracking can be turned off in account settings or for each message.
  eu_data_location:
    answer: no
    evidence: https://mailchimp.com/help/mailchimp-european-data-transfers/
    note: Servers are located in the United States. No EU storage option is offered.
---
