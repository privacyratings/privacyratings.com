---
name: Riseup
description: Email, mailing list and VPN service run by an autonomous tech collective in Seattle for activists and social movements. Accounts need an invite, and the service is funded by donations.
website: https://riseup.net
jurisdiction: US
domain: riseup.net
mail_domain: riseup.net
imap_host: mail.riseup.net
pop3_host: mail.riseup.net
smtp_host: mail.riseup.net
criteria:
  open_source:
    answer: partial
    evidence: https://0xacab.org/riseuplabs
    note: The service runs on free software and some of Riseup's own tools are published, but the full service setup is not public.
  no_trackers:
    answer: yes
    evidence: https://riseup.net/en/about-us/policy/privacy-policy
    note: No third-party cookies or tracking of any kind, and no IP addresses are kept.
  no_ads:
    answer: yes
    evidence: https://riseup.net/en/donate
    note: Funded by donations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://riseup.net/en/canary
    note: Publishes a signed warrant canary updated four times a year, but no request counts.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: no
    note: No built-in end-to-end encryption. OpenPGP only works in third-party apps.
  encrypted_storage:
    answer: yes
    evidence: https://riseup.net/en/email
    note: Mail is stored encrypted per user and can only be unlocked with the user's password. Older accounts must opt in.
  open_protocols:
    answer: yes
    evidence: https://riseup.net/en/email/clients
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: no
    note: Not supported. Addresses use riseup.net.
  anonymous_signup:
    answer: yes
    evidence: https://riseup.net/en/about-us/policy/privacy-policy
    note: Sign-up needs an invite code, but no phone number or email address. A reset email is optional.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
