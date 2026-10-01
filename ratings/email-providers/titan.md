---
name: Titan
description: Business email service for custom domains, sold through hosting and domain providers rather than directly. Includes webmail, mobile apps and a free plan with fewer features.
website: https://titan.email
jurisdiction: KY
domain: app.titan.email
mail_domain: titan.email
imap_host: imap.titan.email
pop3_host: pop.titan.email
smtp_host: smtp.titan.email
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://support.titan.email/hc/en-us/articles/360038535773-Titan-Privacy-Policy
    note: The website loads Google Tag Manager, and the privacy policy allows third-party cookies to track visitor behavior.
  no_ads:
    answer: yes
    evidence: https://support.titan.email/hc/en-us/articles/360038535773-Titan-Privacy-Policy
    note: Funded by paid plans sold through partners. The privacy policy states cookie data is not sold or shared with third parties.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://support.titan.email/hc/en-us/articles/52034516413977-Submit-a-Legal-Request
    note: Publishes a policy for legal requests, but no request counts.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: no
    note: Not supported.
  encrypted_storage:
    answer: no
    note: Encryption at rest for stored mail is not documented beyond a general claim that messages are encrypted.
  open_protocols:
    answer: yes
    evidence: https://support.titan.email/hc/en-us/articles/900000215446-Configure-Titan-on-other-apps-using-IMAP-POP
    note: IMAP, POP3 and SMTP work with other apps once third-party access is turned on in settings.
  custom_domains:
    answer: yes
    evidence: https://support.titan.email/hc/en-us/articles/26786062519321-Titan-Email-Pricing
    note: The service is built for custom domains and is sold through domain and hosting partners.
  anonymous_signup:
    answer: no
    evidence: https://support.titan.email/hc/en-us/articles/26786062519321-Titan-Email-Pricing
    note: Titan is only sold through partner providers, which require an account with personal contact details.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
