---
name: Cloudflare
description: Public DNS resolver from Cloudflare with DNS over HTTPS and TLS, DNSSEC validation, and privacy commitments examined by KPMG.
website: https://one.one.one.one
family: cloudflare
jurisdiction: US
domain: one.one.one.one
imported_from: awesome-privacy
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.cloudflare.onedotonedotonedotone/latest/
    note: The 1.1.1.1 Android app includes Google Firebase Analytics and Crashlytics.
  no_ads:
    answer: yes
    evidence: https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/
    note: Cloudflare commits not to sell resolver data or use it to target ads.
  independent_audit:
    answer: yes
    evidence: https://cf-assets.www.cloudflare.com/slt3lc6tev37/7tcP0k0xUM8iDCacah9ARy/5c6b296e2fc24813368f6e2b4e58fd3a/Cloudflare_1.1.1.1_Examination_Report.pdf
    note: Full KPMG examination report on the resolver's privacy controls.
  transparency_report:
    answer: yes
    evidence: https://www.cloudflare.com/transparency/
    note: Semi-annual reports with counts of legal requests and responses.
  user_notice:
    answer: yes
    evidence: https://cf-assets.www.cloudflare.com/slt3lc6tev37/zItVXCvbb4LZpYG4Uh10R/7b27bba39755f0a4344acb946977704d/2H_2025_Cloudflare_s_Transparency_Report_Legal-v2.pdf
    note: The transparency report states customers are notified of legal requests unless legally prohibited.
  encrypted_dns:
    answer: yes
    evidence: https://developers.cloudflare.com/1.1.1.1/encryption/
    note: DoH and DoT are supported.
  no_query_logs:
    answer: yes
    evidence: https://cf-assets.www.cloudflare.com/slt3lc6tev37/7tcP0k0xUM8iDCacah9ARy/5c6b296e2fc24813368f6e2b4e58fd3a/Cloudflare_1.1.1.1_Examination_Report.pdf
    note: Source IPs are truncated and deleted within 25 hours, confirmed by the KPMG examination.
  dnssec_validation:
    answer: yes
    evidence: https://developers.cloudflare.com/1.1.1.1/faq/
    note: 1.1.1.1 validates DNSSEC on every query.
imported_name: CloudFlare
---
