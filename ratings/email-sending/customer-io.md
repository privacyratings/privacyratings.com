---
name: Customer.io
description: Messaging automation platform for email, push, SMS and in-app messages, with a transactional email API, US and EU regions and open and click tracking.
website: https://customer.io
jurisdiction: US
domain: customer.io
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://customer.io/legal/privacy-policy
    note: The privacy policy covers marketing cookies that help advertising partners show ads, and the website loads Google Tag Manager.
  no_ads:
    answer: partial
    evidence: https://customer.io/legal/privacy-policy
    note: Funded by paid plans and states customer data is not sold, but website cookies are used with advertising partners, and the policy offers an opt-out of sharing for behavioral advertising.
  independent_audit:
    answer: partial
    evidence: https://customer.io/security
    note: SOC 2 Type II and ISO 27001 certified, but the audit reports are only available on request.
  transparency_report:
    answer: partial
    evidence: https://customer.io/legal/dpa
    note: The data processing addendum describes how government requests are handled, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://customer.io/legal/dpa
    note: The data processing addendum promises reasonable notice to customers of compelled disclosure unless legally prohibited.
  content_retention:
    answer: partial
    evidence: https://docs.customer.io/messaging/send/transactional/api/
    note: Message content is kept by default for an undocumented period. A Protect sensitive data setting stops the body of transactional messages from being stored.
  tracking_off_by_default:
    answer: partial
    evidence: https://docs.customer.io/messaging/channels/links/tracking/
    note: Link tracking is on by default for email in automations and API-triggered broadcasts, and can be turned off for each message.
  eu_data_location:
    answer: yes
    evidence: https://docs.customer.io/accounts/settings/data-centers/
    note: Accounts created in the EU region store all data about people in EU data centers in Belgium.
---
