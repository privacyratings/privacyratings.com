---
name: Brevo
description: Marketing and transactional email platform, formerly Sendinblue, with an SMTP relay, email API, SMS and a CRM. Data is hosted in the EU.
website: https://www.brevo.com
aliases:
  - Sendinblue
jurisdiction: FR
domain: brevo.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads HubSpot and TikTok scripts.
  no_ads:
    answer: partial
    evidence: https://www.brevo.com/legal/privacypolicy/
    note: Funded by paid plans and states personal data is not sold, but offers an opt-out of sharing for targeted advertising, and the website loads a TikTok pixel.
  content_retention:
    answer: partial
    evidence: https://help.brevo.com/hc/en-us/articles/4415743225746-Manage-the-retention-period-of-transactional-logs-and-email-previews
    note: Transactional logs and email previews are kept indefinitely by default. Previews can be turned off, and logs can be set to be deleted after 1 to 24 months.
  tracking_off_by_default:
    answer: partial
    evidence: https://help.brevo.com/hc/en-us/articles/11643306229906-Can-I-anonymize-the-tracking-of-opens-and-clicks-for-my-emails
    note: Opens and clicks are tracked per recipient by default. Tracking can be made anonymous for campaign and transactional mail.
  eu_data_location:
    answer: yes
    evidence: https://help.brevo.com/hc/en-us/articles/360001005510-Data-storage-location
    note: Data is hosted by OVH in France and Germany and on Google Cloud in Belgium.
---
