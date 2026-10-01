---
name: Forward Email
description: Email forwarding and alias service for custom domains. Mail is forwarded in memory to existing mailboxes or webhooks, with optional OpenPGP encryption, and paid plans add SMTP sending and encrypted IMAP mailboxes.
website: https://forwardemail.net
source: https://github.com/forwardemail/forwardemail.net
domain: forwardemail.net
mail_domain: forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: All code is public, including the MX forwarding servers that run the service. Core mail storage and protocol code is MPL-2.0 and the rest is under the source-available Business Source License 1.1 (BUSL-1.1), which becomes MPL-2.0 four years after each release.
  no_trackers:
    answer: partial
    evidence: https://forwardemail.net/en/privacy#analytics
    note: No third-party analytics. First-party anonymized analytics of page views and service usage is on by default, and Cloudflare Turnstile loads on sign-in and sign-up forms.
  no_ads:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Funded by paid plans. No ads, and the privacy policy states user data is not shared with third parties.
  independent_audit:
    answer: yes
    evidence: https://cure53.de/pentest-report_forward-email.pdf
    note: Two independent Cure53 audits of the code, including the MX servers, and the infrastructure are published.
  transparency_report:
    answer: partial
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: The technical whitepaper (section 9.3) publishes the government request policy and commits to transparency reports with request counts. A report with counts is not published yet.
  user_notice:
    answer: yes
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: Users are notified of requests when legally allowed, with notice after disclosure when advance notice is prohibited.
  e2ee:
    answer: partial
    evidence: https://forwardemail.net/en/faq#do-you-support-openpgpmime-end-to-end-encryption-e2ee-and-web-key-directory-wkd
    note: Forwarded mail is encrypted with OpenPGP when the recipient has an uploaded key or publishes one through Web Key Directory. Mail to webhooks and mail from senders with a DMARC reject policy is not encrypted.
  no_mail_storage:
    answer: yes
    evidence: https://forwardemail.net/en/faq#where-is-inbound-email-for-my-domain-processed-and-stored-and-for-how-long
    note: Forwarded mail is processed in memory and never written to disk. SMTP error logs keep the envelope and headers, not the body, for 7 days.
  open_protocols:
    answer: yes
    evidence: https://forwardemail.net/en/faq#do-you-support-receiving-email-with-imap
    note: IMAP, POP3 and SMTP work with any client on every paid plan, with no bridge app.
  custom_domains:
    answer: yes
    evidence: https://forwardemail.net/en/private-business-email
    note: Custom domains are supported on every plan, including the free plan.
  anonymous_signup:
    answer: partial
    evidence: https://forwardemail.net/en/faq#how-do-i-get-started-and-set-up-email-forwarding
    note: The free plan needs no account. Forwarding is set up with MX and TXT records on the domain, and the destination address in the TXT record is public unless encrypted. Paid plans need an account with an existing email address. No phone number is asked for.
  srs:
    answer: yes
    evidence: https://forwardemail.net/en/faq#how-do-i-set-up-srs-for-forward-email
    note: Applied automatically to all forwarded mail.
  arc:
    answer: yes
    evidence: https://forwardemail.net/en/faq#do-you-support-email-best-practices
    note: ARC is supported on all plans, with inbound chains validated and forwarded mail ARC-sealed.
---
