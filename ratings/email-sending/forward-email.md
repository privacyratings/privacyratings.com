---
name: Forward Email
description: Email service whose paid plans include outbound SMTP and an email API for sending from apps and websites with a custom domain. Message bodies are purged after delivery by default.
website: https://forwardemail.net
source: https://github.com/forwardemail/forwardemail.net
domain: forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: All code is public, including the outbound SMTP servers that run the service. Core mail storage and protocol code is MPL-2.0 and the rest is under the source-available Business Source License 1.1 (BUSL-1.1), which becomes MPL-2.0 four years after each release.
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
    note: Two independent Cure53 audits of the code and the infrastructure are published.
  transparency_report:
    answer: partial
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: The technical whitepaper (section 9.3) publishes the government request policy and commits to transparency reports with request counts. A report with counts is not published yet.
  user_notice:
    answer: yes
    evidence: https://forwardemail.net/technical-whitepaper.pdf
    note: Users are notified of requests when legally allowed, with notice after disclosure when advance notice is prohibited.
  content_retention:
    answer: yes
    evidence: https://forwardemail.net/en/privacy#outbound-smtp-emails
    note: Outbound mail is queued for up to about 30 days until it is delivered or fails permanently. The body is then purged by default, and can be kept for up to 30 days if the sender turns this on.
  tracking_off_by_default:
    answer: yes
    evidence: https://forwardemail.net/en/email-api#outbound-emails
    note: The email API and SMTP documentation describe no open or click tracking.
  enforced_tls:
    answer: yes
    evidence: https://forwardemail.net/en/faq#do-you-use-tls-encryption-for-email-forwarding
    note: Outbound delivery enforces the recipient domain's MTA-STS policy and retries later instead of sending without TLS.
  eu_data_location:
    answer: no
    evidence: https://forwardemail.net/en/faq#can-i-keep-my-email-processing-and-storage-in-the-eu-data-residency
    note: All processing and storage, including outbound SMTP, is in the United States. An EU location is not available.
---
