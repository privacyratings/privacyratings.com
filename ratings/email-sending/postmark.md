---
name: Postmark
description: Email API and SMTP service from ActiveCampaign for transactional and broadcast email, with separate message streams and 45 days of message history by default.
website: https://postmarkapp.com
jurisdiction: US
domain: postmarkapp.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager and Google Analytics.
  no_ads:
    answer: no
    evidence: https://www.activecampaign.com/legal/privacy-policy
    note: The ActiveCampaign privacy policy covers Postmark and discloses personal information to data enrichment providers and shares it with advertising networks for cross-context behavioral advertising.
  content_retention:
    answer: partial
    evidence: https://postmarkapp.com/support/article/can-i-hide-or-turn-off-saving-of-message-content-in-my-activity-page
    note: Message content is kept for 45 days by default and cannot be turned off. A paid add-on sets retention between 7 and 365 days.
  tracking_off_by_default:
    answer: yes
    evidence: https://postmarkapp.com/developer/user-guide/tracking-links
    note: Link tracking is off by default for all servers and messages, and open tracking is turned on per server or message.
  enforced_tls:
    answer: partial
    evidence: https://postmarkapp.com/security
    note: Outbound mail uses opportunistic TLS. No setting to require TLS is documented.
  eu_data_location:
    answer: no
    evidence: https://postmarkapp.com/eu-privacy
    note: Data is hosted in a data center near Chicago and on Amazon Web Services outside the EU.
---
