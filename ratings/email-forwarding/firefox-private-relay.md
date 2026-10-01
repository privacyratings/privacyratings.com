---
name: Firefox Private Relay
description: Email masking service from Mozilla that creates aliases and forwards mail to a real inbox. Works on the web and through a Firefox add-on.
website: https://relay.firefox.com
family: mozilla
mail_domain: mozmail.com
imap_host: false
pop3_host: false
smtp_host: false
jurisdiction: US
source: https://github.com/mozilla/fx-private-relay
domain: relay.firefox.com
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mozilla/fx-private-relay/blob/main/LICENSE
    note: MPL-2.0.
  no_trackers:
    answer: no
    evidence: https://github.com/mozilla/fx-private-relay/blob/main/METRICS.md
    note: The Relay website and extension use Google Analytics unless the browser sends Do Not Track.
  no_ads:
    answer: yes
    evidence: https://relay.firefox.com/premium/
    note: Funded by the Premium subscription. Relay shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://www.mozilla.org/en-US/about/policy/transparency/
    note: Mozilla publishes counts of government and legal requests for user data twice a year.
  user_notice:
    answer: yes
    evidence: https://www.mozilla.org/en-US/about/policy/transparency/
    note: Mozilla notifies affected users of requests unless legally prohibited, and after any required delay ends.
  e2ee:
    answer: no
    note: Not supported. Relay has no PGP or other end-to-end encryption for forwarded mail.
  no_mail_storage:
    answer: partial
    evidence: https://www.mozilla.org/en-US/privacy/subscription-services/#relay
    note: Mail is not stored after delivery. Undeliverable mail is kept for up to three days.
  open_protocols:
    answer: no
    note: No IMAP or SMTP access. Mail is forwarded to an existing inbox and replies go through the mask.
  custom_domains:
    answer: no
    evidence: https://relay.firefox.com/premium/
    note: Own domains are not supported. Premium offers a custom subdomain of mozmail.com.
  anonymous_signup:
    answer: no
    note: A Mozilla account with an existing email address is required.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
imported_from: awesome-privacy
---
