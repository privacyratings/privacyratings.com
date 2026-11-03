---
name: WEB.DE
description: Free, ad-supported email service from 1&1 Mail & Media in Germany, with webmail, mobile apps, calendar and cloud storage. Paid plans remove third-party ads and ad tracking.
website: https://web.de
aliases:
  - WEB.DE FreeMail
  - WEB.DE Mail
platforms: [web, android, ios]
mainstream: true
jurisdiction: DE
domain: web.de
mail_domain: web.de
imap_host: imap.web.de
pop3_host: pop3.web.de
smtp_host: smtp.web.de
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://agb-server.web.de/datenschutz
    note: The home page loads a Criteo pixel, and the privacy policy describes usage analysis and personalized advertising based on consent.
  no_ads:
    answer: no
    evidence: https://agb-server.web.de/datenschutz
    note: The free service is funded by advertising, including personalized ads. With consent, mail from commercial senders is analyzed to build an interest profile.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://web.de/impressum/
    note: A yearly DSA transparency report, shared with GMX, counts only orders under the EU Digital Services Act. Other law enforcement requests are not counted.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://hilfe.web.de/sicherheit/pgp/einfuehrung.html
    note: OpenPGP encryption works through the Mailvelope browser extension and the WEB.DE apps, and is off by default. The help pages say new setup in webmail is not possible at the moment.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented.
  open_protocols:
    answer: yes
    evidence: https://hilfe.web.de/pop-imap/index.html
    note: IMAP, POP3 and SMTP work with other apps once enabled in settings.
  custom_domains:
    answer: yes
    evidence: https://produkte.web.de/homepage-mail/persoenliche-domains/e-mail-adressen-anlegen/
    note: Paid Domain & Mail plans add a custom domain with up to 500 addresses in the WEB.DE mailbox.
  anonymous_signup:
    answer: no
    evidence: https://hilfe.web.de/account/logindaten/registrierung.html
    note: Registration asks for name, date of birth and postal address, and requires a German or Swiss mobile number confirmed by SMS.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
