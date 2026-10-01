---
name: Outlook.com
description: >-
  Microsoft's free email service, also used for Hotmail and Live addresses.
website: https://outlook.live.com
family: microsoft
smtp_host: smtp-mail.outlook.com
pop3_host: outlook.office365.com
imap_host: outlook.office365.com
mainstream: true
jurisdiction: US
domain: outlook.live.com
mail_domain: outlook.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: The free service shows ads.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft collects usage and diagnostic data and uses data about users for personalized advertising.
  independent_audit:
    answer: no
    note: No independent audit of Outlook.com is published.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Publishes counts of government requests for consumer data, including Outlook.com, twice a year.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives prior notice to Outlook.com users whose data is requested, except where prohibited by law or in emergencies.
  e2ee:
    answer: no
    note: No end-to-end encryption. The Encrypt option for Microsoft 365 subscribers uses keys Microsoft holds.
  encrypted_storage:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/purview/encryption
    note: Data is encrypted at rest with keys Microsoft holds.
  open_protocols:
    answer: yes
    evidence: https://support.microsoft.com/en-us/outlook/pop-imap-and-smtp-settings-for-outlook-com
    note: IMAP, POP3 and SMTP work with other apps on free and paid accounts.
  custom_domains:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/microsoft-365/admin/setup/add-domain?view=o365-worldwide
    note: Custom domains are supported through Microsoft 365 business plans, not free Outlook.com accounts.
  anonymous_signup:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#mainmicrosoftaccountmodule
    note: Creating a Microsoft account asks for personal data such as a birthdate, and a phone number may be requested for verification.
  srs:
    answer: no
    evidence: https://learn.microsoft.com/en-us/exchange/reference/sender-rewriting-scheme
    note: Microsoft documents SRS for Microsoft 365 business mail, not for Outlook.com.
  arc:
    answer: no
    note: No published documentation on ARC for Outlook.com. Microsoft's ARC documentation covers Microsoft 365 business mail.
---
