---
name: Forward Email
description: Email service whose paid plans include outbound SMTP, which can send newsletters and mailing lists from a list tool such as listmonk. Newsletter sending needs approval for each domain. Subscriber lists and campaigns are managed in the separate tool.
website: https://forwardemail.net
source: https://github.com/forwardemail/forwardemail.net
domain: forwardemail.net
jurisdiction: US
disclosure: Privacy Ratings is maintained by the team behind Forward Email. This entry is scored by the same criteria as every other entry in this category, and changes to it are reviewed under the published conflict-of-interest rules.
platforms:
  - web
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/forwardemail/forwardemail.net/blob/master/LICENSE.md
    note: The whole service, including the outbound SMTP servers, is public. Core mail storage and protocol code is MPL-2.0 and the rest is BUSL-1.1, a source-available license that is not OSI-approved.
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
---

Newsletters and mailing lists are sent over Forward Email's SMTP service ([FAQ](https://forwardemail.net/en/faq#do-you-support-newsletters-or-mailing-lists-for-marketing-related-email)). Each domain is reviewed manually before newsletter sending is approved. Subscriber management, sign-up forms and campaign scheduling come from a separate tool, such as [listmonk](https://forwardemail.net/en/guides/newsletter-with-listmonk).
