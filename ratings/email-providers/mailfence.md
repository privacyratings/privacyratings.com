---
name: Mailfence
description: Email service from Belgium with built-in OpenPGP encryption and signing, plus calendar, contacts and document storage.
website: https://mailfence.com
smtp_host: smtp.mailfence.com
imap_host: imap.mailfence.com
mail_domain: mailfence.com
jurisdiction: BE
domain: mailfence.com
imported_from: awesome-privacy
pop3_host: pop.mailfence.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://mailfence.com/en/privacy.jsp
    note: The privacy policy states that only authentication cookies are used and no Google Analytics or other trackers.
  no_ads:
    answer: yes
    evidence: https://mailfence.com/en/privacy.jsp
    note: Funded by paid plans. No ads, and user data is not sold or shared.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://blog.mailfence.com/transparency-report-and-warrant-canary/
    note: Publishes counts of legal requests and disclosures every six months, with a warrant canary.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://mailfence.com/en/end-to-end-encryption.jsp
    note: OpenPGP and password-protected messages are built into the webmail, but encryption is not on by default.
  encrypted_storage:
    answer: no
    evidence: https://mailfence.com/en/threat-model.jsp
    note: Only messages encrypted with OpenPGP stay unreadable on the server. Encryption of other stored mail is not documented.
  open_protocols:
    answer: partial
    evidence: https://mailfence.com/en/faq.jsp
    note: IMAP, POP3 and SMTP need the Entry plan or higher. The free and Base plans are webmail and app only.
  custom_domains:
    answer: yes
    evidence: https://mailfence.com/en/faq.jsp
    note: Available from the Entry plan up.
  anonymous_signup:
    answer: no
    evidence: https://mailfence.com/en/privacy.jsp
    note: An existing external email address is required to receive the activation code.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
