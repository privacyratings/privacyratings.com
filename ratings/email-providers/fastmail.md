---
name: Fastmail
description: >-
  Paid email service from Australia with custom domains and standard protocols.
website: https://www.fastmail.com
smtp_host: smtp.fastmail.com
pop3_host: pop.fastmail.com
imap_host: imap.fastmail.com
jurisdiction: AU
domain: www.fastmail.com
mail_domain: fastmail.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.fastmail.com/policies/cookies-policy/
    note: The marketing website uses third-party marketing cookies, including PartnerStack, to measure paid ads. Logged-in pages have no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://www.fastmail.com/policies/privacy/
    note: Funded by paid plans. The privacy policy states that personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.fastmail.com/policies/transparency-report/
    note: Publishes yearly counts of valid and actioned law enforcement requests by origin and data type.
  user_notice:
    answer: yes
    evidence: https://www.fastmail.help/hc/en-us/articles/1500000277902-Information-for-law-enforcement
    note: Users are notified of legal requests for their data unless prohibited by law or notice would cause harm.
  e2ee:
    answer: no
    evidence: https://www.fastmail.com/features/security/
    note: No end-to-end encryption in Fastmail's own apps. PGP or S/MIME only works in third-party apps.
  encrypted_storage:
    answer: partial
    evidence: https://www.fastmail.com/features/security/
    note: Mail is stored on encrypted disks with keys Fastmail holds.
  open_protocols:
    answer: yes
    evidence: https://www.fastmail.help/hc/en-us/articles/1500000278342-Server-names-and-ports
    note: IMAP, POP3, SMTP, CalDAV and CardDAV work with any client.
  custom_domains:
    answer: yes
    evidence: https://www.fastmail.help/hc/en-us/articles/360058753394-Custom-domains-with-Fastmail
    note: Available on every plan above Basic.
  anonymous_signup:
    answer: partial
    evidence: https://www.fastmail.help/hc/en-us/articles/1500000277442-Trial-accounts
    note: No phone number is needed by default, but some trial accounts are asked to verify a mobile number by SMS.
  srs:
    answer: partial
    evidence: https://www.fastmail.help/hc/en-us/articles/360058753434-Set-up-mail-forwarding
    note: SRS is available as an option for forwarding, but regular forwarding does not rewrite the sender.
  arc:
    answer: yes
    evidence: https://www.fastmail.com/blog/what-is-arc/
    note: Validates ARC chains on inbound mail and adds ARC headers.
---
