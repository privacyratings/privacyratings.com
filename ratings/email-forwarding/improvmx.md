---
name: ImprovMX
description: Email forwarding service for custom domains, with aliases, catch-all addresses, forwarding rules and SMTP sending on paid plans.
website: https://improvmx.com
jurisdiction: US
domain: app.improvmx.com
criteria:
  open_source:
    answer: no
    evidence: https://improvmx.com/guides/why-are-you-not-open-source/
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://improvmx.com/transparency/privacy-policy/
    note: The website loads the Intercom chat widget, and the privacy policy describes receiving data from advertising networks such as Google and LinkedIn.
  no_ads:
    answer: yes
    evidence: https://improvmx.com/pricing/
    note: Funded by paid plans. The privacy policy states that personal information is not sold.
  independent_audit:
    answer: no
    evidence: https://improvmx.com/guides/are-you-soc2-or-iso27001-compliant/
    note: No independent audit is published. Annual penetration tests are described, but no report is public.
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
    answer: partial
    evidence: https://improvmx.com/transparency/security-and-reliability/
    note: Mail is stored temporarily for delivery and then deleted. Undelivered mail is kept when the full log level is chosen.
  open_protocols:
    answer: partial
    evidence: https://improvmx.com/guides/improvmx-imap-pop-and-incoming-protocols/
    note: SMTP sending is included on paid plans. There is no IMAP or POP3 because mail is forwarded to another mailbox.
  custom_domains:
    answer: yes
    evidence: https://improvmx.com/pricing/
    note: Works with custom domains on every plan, including the free one.
  anonymous_signup:
    answer: no
    note: An existing email address is required to create an account and receive forwarded mail.
  srs:
    answer: yes
    evidence: https://improvmx.com/guides/do-you-support-srs-sender-rewriting-scheme/
    note: The envelope sender of forwarded mail is rewritten to a domain ImprovMX controls.
  arc:
    answer: partial
    evidence: https://improvmx.com/guides/do-you-support-arc-authenticated-received-chain/
    note: Forwarded mail is ARC signed, but inbound ARC chains are not validated.
---
