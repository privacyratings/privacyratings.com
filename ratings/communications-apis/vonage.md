---
name: Vonage
description: Communications APIs from Vonage, formerly Nexmo, for SMS, voice calls, video, WhatsApp and phone number verification.
website: https://www.vonage.com/communications-apis/
aliases:
  - Nexmo
  - Vonage API
mainstream: true
jurisdiction: US
domain: vonage.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Adobe Launch and 6sense scripts.
  content_retention:
    answer: partial
    evidence: https://developer.vonage.com/en/messaging/sms/message-privacy
    note: Server logs keep message text for up to one month and call detail records for 13 months. Auto-redact removes message text before it is stored, and is turned on by request.
---
