---
name: MailerSend
description: Transactional email API and SMTP relay from the makers of MailerLite, with templates, inbound routing and SMS.
website: https://www.mailersend.com
jurisdiction: US
domain: mailersend.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager and PostHog.
  no_ads:
    answer: partial
    evidence: https://www.mailersend.com/legal/privacy-policy
    note: Funded by paid plans and states personal data is never sold, but third-party partners use cookies on the website for advertising on other sites.
  content_retention:
    answer: partial
    evidence: https://www.mailersend.com/whats-new/data-retention-add-on
    note: Activity data is kept for 7 or 30 days depending on the plan. A "Don't store content" option is available.
  tracking_off_by_default:
    answer: partial
    evidence: https://developers.mailersend.com/api/v1/email/domains
    note: Domain settings for open, click and content tracking are on by default and can be turned off.
  eu_data_location:
    answer: yes
    evidence: https://www.mailersend.com/legal/privacy-policy
    note: The privacy policy states data storage centers are in the European Union.
---
