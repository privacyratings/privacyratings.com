---
name: Twilio
description: Cloud communications platform with APIs for SMS, MMS, WhatsApp, voice calls, phone number verification and video.
website: https://www.twilio.com
family: twilio
mainstream: true
jurisdiction: US
domain: twilio.com
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
    note: Funded by usage fees and states data is not sold, but website tracking for targeted advertising counts as sharing under some US state laws.
  independent_audit:
    answer: partial
    evidence: https://security.twilio.com/
    note: SOC 2 and ISO 27001 audits are listed, but reports are only available on request through the Twilio Trust Center.
  transparency_report:
    answer: yes
    evidence: https://www.twilio.com/en-us/legal/transparency
    note: Publishes annual transparency reports with government request counts, responses and how often users were notified.
  user_notice:
    answer: yes
    evidence: https://www.twilio.com/en-us/legal/law-enforcement-guidelines
    note: Uses reasonable efforts to notify customers of requests for their information unless prohibited by law.
  content_retention:
    answer: partial
    evidence: https://support.twilio.com/hc/en-us/articles/223133687-Deleting-messages-message-media-or-message-bodies
    note: Message bodies are kept until deleted, and can be deleted through the API. Automatic message redaction is only available to Twilio Editions customers.
  eu_data_location:
    answer: partial
    evidence: https://www.twilio.com/en-us/changelog/data-residency-for-sms--eu--is-now-in-public-beta
    note: Voice and SMS can run in the Ireland (IE1) region. Data residency for SMS in the EU is in beta.
---
