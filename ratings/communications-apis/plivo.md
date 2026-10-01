---
name: Plivo
description: Cloud communications platform with APIs for SMS, MMS, WhatsApp, voice calls and phone number verification.
website: https://www.plivo.com
jurisdiction: US
domain: plivo.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager, HubSpot and PostHog.
  no_ads:
    answer: partial
    evidence: https://www.plivo.com/legal/privacy/
    note: Funded by usage fees, but cookie and pixel data and encrypted email addresses are shared with advertisers for Plivo's own marketing.
  content_retention:
    answer: yes
    evidence: https://www.plivo.com/docs/messaging/api/message/send-a-message
    note: Logging is on by default. The log parameter can turn off logging of message content, phone numbers or both for each message.
---
