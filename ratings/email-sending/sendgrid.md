---
name: SendGrid
description: Email API and SMTP relay from Twilio for transactional and marketing email, with open and click tracking, event webhooks and an activity feed.
website: https://www.twilio.com/en-us/sendgrid
family: twilio
aliases:
  - Twilio SendGrid
mainstream: true
jurisdiction: US
domain: sendgrid.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager, Segment, Adobe Launch and VWO.
  no_ads:
    answer: partial
    evidence: https://www.twilio.com/en-us/legal/privacy
    note: Funded by paid plans and states data is not sold, but website tracking for targeted advertising counts as sharing under some US state laws.
  independent_audit:
    answer: partial
    evidence: https://security.twilio.com/
    note: SOC 2 and ISO 27001 audits and a SendGrid penetration test report are listed, but reports are only available on request through the Twilio Trust Center.
  transparency_report:
    answer: yes
    evidence: https://www.twilio.com/en-us/legal/transparency
    note: Twilio publishes annual transparency reports with government request counts, responses and how often users were notified.
  user_notice:
    answer: yes
    evidence: https://www.twilio.com/en-us/legal/law-enforcement-guidelines
    note: Twilio uses reasonable efforts to notify customers of requests for their information unless prohibited by law.
  content_retention:
    answer: yes
    evidence: https://support.sendgrid.com/hc/en-us/articles/18961023703963-How-to-Find-the-Body-or-Contents-of-Emails
    note: Message content is not stored. Delivery data such as addresses, timestamps and engagement events is kept.
  tracking_off_by_default:
    answer: partial
    evidence: https://www.twilio.com/docs/sendgrid/ui/account-and-settings/tracking
    note: Open tracking is turned on by default for Marketing Campaigns. Open and click tracking can be turned off in the account's tracking settings.
  enforced_tls:
    answer: yes
    evidence: https://www.twilio.com/docs/sendgrid/for-developers/sending-email/enforced-tls
    note: Enforced TLS settings can require TLS and a valid certificate. Mail to servers that do not meet them is dropped.
  eu_data_location:
    answer: partial
    evidence: https://www.twilio.com/docs/sendgrid/data-residency/faq.md
    note: EU data residency is available only on Pro, Premier and Custom plans.
---
