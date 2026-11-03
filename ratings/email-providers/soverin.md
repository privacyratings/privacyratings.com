---
name: Soverin
description: Paid email service from Soverin B.V. in Amsterdam, the Netherlands, with custom domains, unlimited aliases and calendar and contact sync. There is no free plan and no advertising.
website: https://soverin.com
jurisdiction: NL
domain: soverin.com
mail_domain: soverin.nl
imap_host: imap.soverin.net
smtp_host: smtp.soverin.net
platforms: [web]
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://soverin.com/about/privacy
    note: The privacy statement says only session and optional login cookies are used, and no tracking cookies. The website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://soverin.com/resources/faq
    note: Funded by paid plans. Soverin states it will never use advertising as a source of income, and personal data is not sold.
  independent_audit:
    answer: no
    evidence: https://soverin.com/about/certifications
    note: No independent audit is published. Soverin states ISO 27001 certification, but the certificate is only sent on request and no report is public.
  transparency_report:
    answer: no
    evidence: https://soverin.com/about/general-terms-and-conditions
    note: No transparency report is published. The terms allow Soverin to hand user data to the police when a competent authority requests it.
  e2ee:
    answer: partial
    evidence: https://soverin.com/product/b2b-features
    note: OpenPGP encryption is listed as a webmail feature. It is not on by default, and no further documentation is published.
  encrypted_storage:
    answer: partial
    evidence: https://soverin.com/resources/faq
    note: Servers use disk encryption. Encryption of stored mail with a key only the user holds is not documented.
  open_protocols:
    answer: yes
    evidence: https://soverin.zammad.com/help/en-gb/12-email-apps-and-imap/38-imap-and-smtp-settings
    note: IMAP and SMTP work with any mail app. Calendar and contacts sync over CalDAV and CardDAV.
  custom_domains:
    answer: yes
    evidence: https://soverin.com/product/pricing
    note: Own domains can be connected at no extra charge, or registered through Soverin for a yearly fee.
  anonymous_signup:
    answer: no
    evidence: https://soverin.zammad.com/help/en-gb/16-faq-for-new-customers/75-questions-about-your-account
    note: The FAQ states that a mobile phone number is needed to sign up. The privacy statement describes the phone number as optional.
  srs:
    answer: yes
    evidence: https://soverin.com/product/technical-specs
    note: Forwarded mail uses SRS.
  arc:
    answer: partial
    evidence: https://soverin.com/product/technical-specs
    note: ARC is listed for forwarded mail. Validation of ARC chains on inbound mail is not documented.
---
