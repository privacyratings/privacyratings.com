---
name: Cloudflare Registrar
description: >-
  Domain registrar that charges registry cost with no markup, with free WHOIS redaction, transfer lock and one-click DNSSEC.
website: https://www.cloudflare.com/domains/
family: cloudflare
jurisdiction: US
domain: dash.cloudflare.com
pick: true
pick_reason: >-
  Registry cost with no markup on registration or renewal, free WHOIS redaction, security-key login, and automatic DNSSEC with Cloudflare DNS.
caveat: >-
  Domains registered with Cloudflare must use Cloudflare DNS, and not every domain extension is supported.
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_ads:
    answer: yes
    evidence: https://www.cloudflare.com/domains/
    note: Registrations are sold at cost, and the business is funded by paid Cloudflare plans. No ads.
  free_whois_privacy:
    answer: yes
    evidence: https://www.cloudflare.com/domains/
    note: WHOIS redaction is free and on by default.
  at_cost_renewals:
    answer: yes
    evidence: https://www.cloudflare.com/domains/
    note: Registration, transfer and renewal are priced at registry and ICANN cost.
  two_factor:
    answer: yes
    evidence: https://developers.cloudflare.com/fundamentals/user-profiles/2fa/
    note: Security keys and authenticator apps are supported.
  registry_lock:
    answer: yes
    evidence: https://www.cloudflare.com/domains/
    note: Domains are locked against transfer by default. Registry lock is available for Enterprise customers.
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
