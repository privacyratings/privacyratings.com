---
name: Netlify
description: Platform for building and deploying websites and web apps from Git, with a global CDN, serverless and edge functions, forms and deploy previews.
website: https://www.netlify.com
mainstream: true
jurisdiction: US
domain: app.netlify.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source. The Netlify CLI is open source, but the platform is not.
  no_trackers:
    answer: no
    evidence: https://www.netlify.com/privacy/
    note: The website loads Google Tag Manager, HubSpot and DoubleClick, and the privacy statement describes interest-based advertising cookies.
  no_ads:
    answer: no
    evidence: https://www.netlify.com/privacy/
    note: The privacy statement says it uses services that deliver interest-based ads and may transfer personal information to business partners for their use.
  independent_audit:
    answer: partial
    evidence: https://www.netlify.com/security/
    note: SOC 2 Type 2 reports are only available to Enterprise customers; the ISO 27001 certificate is public.
  transparency_report:
    answer: partial
    evidence: https://www.netlify.com/pdf/netlify-dpa.pdf
    note: The data processing addendum sets out how public authority requests are handled, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.netlify.com/pdf/netlify-dpa.pdf
    note: The data processing addendum promises to notify customers of public authority requests unless legally prohibited.
---
