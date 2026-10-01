---
name: Cloudflare DNS
description: >-
  Authoritative DNS hosting on Cloudflare's anycast network with a free plan, DNSSEC, an API and security-key login.
website: https://www.cloudflare.com/products/dns/
family: cloudflare
jurisdiction: US
domain: dash.cloudflare.com
pick: true
pick_reason: >-
  Free on every plan, one of the fastest DNS networks, a complete API, and hardware security key login. DNSSEC is automatic when the domain is also registered with Cloudflare Registrar.
caveat: >-
  Cloudflare sits in front of a large share of the web. Using it for DNS only (without proxying traffic) keeps site traffic off Cloudflare's servers.
criteria:
  open_source:
    answer: no
    note: The DNS service is closed source.
  no_ads:
    answer: yes
    evidence: https://www.cloudflare.com/plans/
    note: Funded by paid plans. No ads.
  dnssec:
    answer: yes
    evidence: https://developers.cloudflare.com/dns/dnssec/
    note: Enabled with one click. The DS record is added automatically for Cloudflare Registrar domains and manually at other registrars.
  api_access:
    answer: yes
    evidence: https://developers.cloudflare.com/api/
    note: The DNS API is available on every plan, including the free plan.
  two_factor:
    answer: yes
    evidence: https://developers.cloudflare.com/fundamentals/user-profiles/2fa/
    note: Security keys and authenticator apps.
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
