---
name: Cloudflare Workers
description: Serverless platform that runs JavaScript, TypeScript, Python and WebAssembly on Cloudflare's global network, and hosts static sites and full-stack apps, including those formerly on Cloudflare Pages.
website: https://www.cloudflare.com/products/workers/
family: cloudflare
aliases:
  - Cloudflare Pages
jurisdiction: US
domain: dash.cloudflare.com
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: The platform is closed source. The workerd runtime and the Wrangler CLI are open source.
  no_trackers:
    answer: no
    evidence: https://www.cloudflare.com/privacypolicy/
    note: The website loads Google Tag Manager and Intercom, and the privacy policy describes advertising cookies.
  no_ads:
    answer: partial
    evidence: https://www.cloudflare.com/privacypolicy/
    note: Funded by paid plans and does not sell personal information, but marketing and advertising partners receive website data to advertise Cloudflare's services.
  independent_audit:
    answer: partial
    evidence: https://developers.cloudflare.com/fundamentals/reference/policies-compliances/compliance-docs/
    note: SOC 2, ISO 27001 and PCI reports exist but are only available to account administrators in the dashboard.
  transparency_report:
    answer: yes
    evidence: https://www.cloudflare.com/transparency/
    note: Semi-annual reports with counts of legal requests and responses.
  user_notice:
    answer: yes
    evidence: https://cf-assets.www.cloudflare.com/slt3lc6tev37/zItVXCvbb4LZpYG4Uh10R/7b27bba39755f0a4344acb946977704d/2H_2025_Cloudflare_s_Transparency_Report_Legal-v2.pdf
    note: The transparency report states customers are notified of legal requests unless legally prohibited.
---
