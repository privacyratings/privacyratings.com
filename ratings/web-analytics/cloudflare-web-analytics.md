---
name: Cloudflare Web Analytics
description: Free web analytics from Cloudflare that reports page views, visits and Core Web Vitals using a JavaScript beacon or Cloudflare's proxy, without cookies.
website: https://www.cloudflare.com/web-analytics/
family: cloudflare
domain: dash.cloudflare.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.cloudflare.com/privacypolicy/
    note: The Cloudflare website loads Google Tag Manager and uses cookies for interest-based advertising.
  no_ads:
    answer: yes
    evidence: https://www.cloudflare.com/web-analytics/
    note: Funded by paid Cloudflare plans. The product page states visitor data is not used to retarget visitors with ads.
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
  no_cookies:
    answer: yes
    evidence: https://www.cloudflare.com/web-analytics/
    note: No client-side state such as cookies or localStorage is used, and visitors are not fingerprinted.
  no_personal_data:
    answer: yes
    evidence: https://developers.cloudflare.com/web-analytics/about/
    note: The documentation states Web Analytics does not collect or use visitors' personal data.
  self_hostable:
    answer: no
    note: Hosted only.
---
