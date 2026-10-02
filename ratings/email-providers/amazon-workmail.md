---
name: Amazon WorkMail
description: >-
  Paid business email and calendar service on AWS for custom domains, billed per user. AWS has announced the end of support for WorkMail and no longer accepts new customers.
website: https://aws.amazon.com/workmail/
aliases:
  - AWS WorkMail
jurisdiction: US
platforms: [web]
domain: aws.amazon.com
imap_host: imap.mail.us-east-1.awsapps.com
pop3_host: false
smtp_host: smtp.mail.us-east-1.awsapps.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://aws.amazon.com/legal/cookies/
    note: AWS websites allow cookies from third parties including Google, LinkedIn and The Trade Desk for ads and reporting.
  no_ads:
    answer: partial
    evidence: https://aws.amazon.com/compliance/data-privacy-faq/
    note: Funded by per-user fees, and customer content is not used for marketing or advertising. The AWS website uses third-party cookies to show AWS ads on other sites.
  independent_audit:
    answer: partial
    evidence: https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/whitepapers/compliance/AWS_SOC3_Report.pdf
    note: WorkMail is in scope of AWS SOC audits. Only the SOC 3 summary report is public. The full SOC 2 report is only available to customers.
  transparency_report:
    answer: yes
    evidence: https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/security/pdfs/Amazon_Government_Request_Report_H1_2026.pdf
    note: Semi-annual reports with counts of government requests to Amazon and AWS and how they were answered.
  user_notice:
    answer: yes
    evidence: https://aws.amazon.com/compliance/data-privacy-faq/
    note: AWS gives customers notice of demands for their content unless legally prohibited.
  e2ee:
    answer: partial
    evidence: https://docs.aws.amazon.com/workmail/latest/userguide/send_encrypted_email.html
    note: S/MIME works in Outlook and some mobile mail apps with a certificate from a third party. Not in the web app and not on by default.
  encrypted_storage:
    answer: partial
    evidence: https://docs.aws.amazon.com/workmail/latest/adminguide/data-protection.html
    note: Mailboxes are encrypted at rest with AWS KMS keys. The organization can choose its own KMS key, but AWS decrypts mail when users access it.
  open_protocols:
    answer: yes
    evidence: https://docs.aws.amazon.com/workmail/latest/userguide/using_IMAP.html
    note: IMAP and SMTP work with other apps over implicit TLS. POP3 is not supported.
  custom_domains:
    answer: yes
    evidence: https://aws.amazon.com/workmail/faqs/
    note: Existing domains can be added after ownership is verified.
  anonymous_signup:
    answer: no
    evidence: https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html
    note: An AWS account requires an email address, a phone number that receives a PIN and a valid payment method.
---
