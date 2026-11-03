---
name: Thundermail
description: Paid email, calendar and contacts service from MZLA Technologies, the Mozilla subsidiary that makes Thunderbird. Built on the Stalwart mail server, with data hosted in Germany. In beta and open only by invitation from a waitlist.
website: https://tb.pro
source: https://github.com/thunderbird/thunderbird-accounts
platforms: [web]
aliases: [Thunderbird Pro, tb.pro]
jurisdiction: US
domain: tb.pro
mail_domain: thundermail.com
imap_host: mail.thundermail.com
pop3_host: false
smtp_host: mail.thundermail.com
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/thunderbird/thunderbird-accounts/main/LICENSE
    note: The account service, webmail and deployment code are published under MPL-2.0. The mail server is Stalwart, which is AGPL-3.0 with some enterprise features under a source-available license.
  no_trackers:
    answer: no
    evidence: https://tb.pro/en-US/privacy/
    note: The home page loads no third-party trackers, but the privacy policy allows third-party analytics cookies. The account service sends sign-up and login events to PostHog under a hashed user ID.
  no_ads:
    answer: partial
    evidence: https://tb.pro/en-US/privacy/
    note: Funded by subscriptions, with no ads in the service. The privacy policy states that identifiers and browsing data are shared with analytics providers and social networks in the sense of US state privacy law.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    evidence: https://www.mozilla.org/en-US/about/policy/transparency/guidelines/
    note: No transparency report covers Thundermail. Mozilla's reports cover Mozilla Corporation, and MZLA is a separate company.
  user_notice:
    answer: no
    evidence: https://tb.pro/en-US/privacy/
    note: No published policy on notifying users about data requests. The privacy policy only says data may be disclosed to authorities in response to lawful requests.
  e2ee:
    answer: partial
    evidence: https://support.mozilla.org/en-US/kb/openpgp-thunderbird-howto-and-faq
    note: OpenPGP is built into the Thunderbird app but needs a key set up for each account. Files sent with Send are end-to-end encrypted.
  encrypted_storage:
    answer: partial
    evidence: https://raw.githubusercontent.com/thunderbird/mailstrom/main/pulumi/stalwart/s3.py
    note: Mail is stored on encrypted AWS disks and S3 buckets, with keys the provider holds. The privacy policy lists cases in which staff may access mail.
  open_protocols:
    answer: yes
    evidence: https://tb.pro/en-US/
    note: IMAP, SMTP and JMAP work with any client. POP3 is not offered.
  custom_domains:
    answer: yes
    evidence: https://tb.pro/en-US/
    note: The Early Bird plan includes up to three custom domains.
  anonymous_signup:
    answer: no
    evidence: https://tb.pro/en-US/waitlist/
    note: An existing email address is required to join the waitlist and verify the account. A paid subscription is also required.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
