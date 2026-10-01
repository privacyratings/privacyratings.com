---
name: Cloudflare Email Routing
description: Free Cloudflare service that forwards mail sent to addresses on a custom domain to existing inboxes or to Cloudflare Workers.
website: https://www.cloudflare.com/products/email-routing/
family: cloudflare
jurisdiction: US
domain: dash.cloudflare.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.cloudflare.com/privacypolicy/
    note: The website loads Google Tag Manager and uses cookies for interest-based advertising.
  no_ads:
    answer: yes
    evidence: https://www.cloudflare.com/privacypolicy/
    note: Funded by paid Cloudflare plans. The privacy policy states that personal information is not sold.
  independent_audit:
    answer: no
    note: No independent audit is published. Compliance reports are only available to customers.
  transparency_report:
    answer: yes
    evidence: https://www.cloudflare.com/transparency/
    note: Publishes counts of legal requests and how they were handled twice a year.
  user_notice:
    answer: yes
    evidence: https://cf-assets.www.cloudflare.com/slt3lc6tev37/zItVXCvbb4LZpYG4Uh10R/7b27bba39755f0a4344acb946977704d/2H_2025_Cloudflare_s_Transparency_Report_Legal-v2.pdf
    note: Customers are notified of legal requests for their information unless legally prohibited.
  e2ee:
    answer: no
    note: Not supported. Forwarded mail is not encrypted end to end.
  no_mail_storage:
    answer: yes
    evidence: https://www.cloudflare.com/products/email-routing/
    note: Cloudflare states that Email Routing does not store or access email content.
  open_protocols:
    answer: no
    note: No IMAP access. Mail is forwarded to existing inboxes, and SMTP sending belongs to the separate Email Sending product.
  custom_domains:
    answer: yes
    evidence: https://developers.cloudflare.com/email-service/
    note: Works only with custom domains and is free on all plans.
  anonymous_signup:
    answer: no
    note: A Cloudflare account with an existing email address is required.
  srs:
    answer: yes
    evidence: https://developers.cloudflare.com/email-service/reference/postmaster/#sender-rewriting
    note: The envelope sender of forwarded mail is rewritten with SRS.
  arc:
    answer: partial
    evidence: https://developers.cloudflare.com/email-service/reference/postmaster/#authenticated-received-chain-arc
    note: ARC is supported for forwarded mail. Validation of inbound ARC chains is not documented.
---
