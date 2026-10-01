---
name: Telnyx
description: Communications platform with APIs for SMS, MMS, voice calls, SIP trunking and phone number verification.
website: https://telnyx.com
jurisdiction: US
domain: telnyx.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager and Marketo.
  no_ads:
    answer: partial
    evidence: https://telnyx.com/privacy-policy
    note: Funded by usage fees and states information is not sold for advertising, but personal data is used for Telnyx's own marketing through Google Ads.
  content_retention:
    answer: yes
    evidence: https://developers.telnyx.com/api-reference/profiles/update-a-messaging-profile
    note: Redaction of message text, media and counterparty numbers can be turned on for each messaging profile.
---
