---
name: Hushmail
description: >-
  Paid email service with OpenPGP encryption from Hush Communications in Vancouver, Canada, where its servers are.
  Most plans are for healthcare, law and small business, and a Personal Use plan is sold to individuals.
website: https://www.hushmail.com
platforms: [web, ios]
jurisdiction: CA
domain: www.hushmail.com
mail_domain: hushmail.com
imap_host: imap.hushmail.com
pop3_host: pop.hushmail.com
smtp_host: smtp.hushmail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.hushmail.com/privacy
    note: The website loads Google Analytics, Google Ads and HubSpot tracking scripts. The privacy policy describes cookies used to understand how people use the services.
  no_ads:
    answer: partial
    evidence: https://www.hushmail.com/privacy
    note: Funded by paid plans, with no ads in the mail service and no scanning of mail for ads. The website loads Google Ads and HubSpot ad tags, and the privacy policy allows sharing non-identifying data with third parties for advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.hushmail.com/privacy
    note: The privacy policy explains that account data is disclosed only for an order enforceable in British Columbia or in an emergency. No request counts are published.
  user_notice:
    answer: no
    evidence: https://www.hushmail.com/privacy
    note: The privacy policy states that Hush will not tell users whether an order for their data exists.
  e2ee:
    answer: partial
    evidence: https://www.hushmail.com/hubfs/Hushmail-Authentication%20and%20Encryption.pdf
    note: OpenPGP encryption is on by default between Hushmail users, and other recipients read encrypted mail on a web page. In webmail and over IMAP and POP the encryption runs on Hushmail's servers. Only the iPhone app encrypts on the device.
  encrypted_storage:
    answer: no
    evidence: https://www.hushmail.com/privacy
    note: OpenPGP-encrypted messages are stored encrypted, but the privacy policy states that unencrypted email is stored unencrypted.
  open_protocols:
    answer: yes
    evidence: https://help.hushmail.com/article/684-pop-imap-and-smtp-server-hostnames-and-ports
    note: IMAP, POP3 and SMTP work with any client on every plan, including Personal Use.
  custom_domains:
    answer: partial
    evidence: https://www.hushmail.com/plans/personal
    note: Not on the Personal Use plan. A custom domain needs a Small Business, Healthcare or Law plan.
  anonymous_signup:
    answer: no
    evidence: https://help.hushmail.com/article/728-your-personal-information
    note: A free trial needs an alternate email address and a phone number. Paid plans also ask for billing details.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
