---
name: Sinch
description: Communications platform with APIs for SMS, MMS, RCS, WhatsApp, voice calls and phone number verification, with regional endpoints.
website: https://sinch.com
jurisdiction: SE
domain: sinch.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  content_retention:
    answer: partial
    evidence: https://community.sinch.com/t5/SMS/Can-I-send-a-message-and-then-delete-it-from-my-records/ta-p/7106
    note: SMS message logs are kept for 14 days, then depersonalized and archived. Sent messages cannot be deleted on request.
  eu_data_location:
    answer: yes
    evidence: https://developers.sinch.com/docs/sms/api-reference/
    note: An EU endpoint serves the SMS API from servers in Ireland and Sweden. Staff and providers outside the EU may have access.
---
