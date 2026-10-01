---
name: SMTP2GO
description: SMTP relay and email API for transactional and bulk email, with an EU data center in Amsterdam and optional email archiving.
website: https://www.smtp2go.com
jurisdiction: NZ
domain: smtp2go.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Google Tag Manager and the Microsoft Advertising tag.
  no_ads:
    answer: partial
    evidence: https://www.smtp2go.com/privacy/
    note: Funded by paid plans and states personal information is not sold, traded or rented, but the website loads the Microsoft Advertising tag.
  tracking_off_by_default:
    answer: yes
    evidence: https://support.smtp2go.com/hc/en-gb/articles/360003124714-Open-Tracking
    note: Open and click tracking are turned on for each SMTP user, IP address or API key.
  eu_data_location:
    answer: yes
    evidence: https://support.smtp2go.com/hc/en-gb/articles/12974008254873-EU-Data-Center
    note: Accounts for EU and UK customers can send only through the EU data center in Amsterdam, with inbound servers in London and Frankfurt.
---
