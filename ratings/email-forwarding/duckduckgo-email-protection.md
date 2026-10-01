---
name: DuckDuckGo Email Protection
description: Free email alias service from DuckDuckGo that gives out @duck.com addresses and forwards mail to an existing inbox after removing email trackers.
website: https://duckduckgo.com/email/
jurisdiction: US
domain: duckduckgo.com
mail_domain: duck.com
imap_host: false
pop3_host: false
smtp_host: false
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/duckduckgo/duckduckgo-privacy-extension/blob/main/LICENSE.md
    note: The DuckDuckGo browser extension that creates Duck Addresses is Apache-2.0, but the forwarding service is closed source.
  no_trackers:
    answer: yes
    evidence: https://duckduckgo.com/privacy
    note: The privacy policy states that DuckDuckGo does not track users, and the website loads no third-party trackers.
  no_ads:
    answer: partial
    evidence: https://duckduckgo.com/duckduckgo-help-pages/company/how-duckduckgo-makes-money
    note: Email Protection is free and shows no ads. DuckDuckGo is funded by search ads based on the search query rather than user profiles.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: no
    note: Not supported. Forwarded mail is not encrypted end to end.
  no_mail_storage:
    answer: yes
    evidence: https://duckduckgo.com/email/privacy
    note: Mail is processed in memory to remove trackers and forwarded without being written to disk.
  open_protocols:
    answer: no
    note: No IMAP or SMTP access. Mail is forwarded to an existing inbox and replies go through the Duck Address.
  custom_domains:
    answer: no
    note: Not supported. Addresses are on duck.com.
  anonymous_signup:
    answer: no
    evidence: https://duckduckgo.com/email/privacy
    note: An existing email address is required to receive forwarded mail.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
