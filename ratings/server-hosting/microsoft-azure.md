---
name: Microsoft Azure
description: Cloud computing platform from Microsoft offering virtual machines, Kubernetes, storage, databases and AI services in regions worldwide.
website: https://azure.microsoft.com/en-us
family: microsoft
aliases:
  - Azure
mainstream: true
jurisdiction: US
domain: portal.azure.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: Microsoft sites use third-party cookies, including social media and advertising cookies and analytics providers.
  no_ads:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement
    note: The privacy statement describes advertising cookies from partners such as LinkedIn and Xandr used to tailor ads.
  independent_audit:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-3
    note: Only the SOC 3 summary report is public; full SOC 2 and ISO audit reports are in the Service Trust Portal for customers.
  transparency_report:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Semi-annual reports with counts of law enforcement requests for consumer and enterprise customer data.
  user_notice:
    answer: yes
    evidence: https://www.microsoft.com/en-us/corporate-responsibility/reports/government-requests/customer-data
    note: Microsoft gives enterprise customers prior notice of third-party requests for their data, except where prohibited by law.
  port_25:
    answer: no
    evidence: https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-network/troubleshoot-outbound-smtp-connectivity
    note: Outbound port 25 is blocked on pay-as-you-go and most other subscription types; it is open only on Enterprise Agreement and MCA-E subscriptions.
  reverse_dns:
    answer: partial
    evidence: https://learn.microsoft.com/en-us/azure/dns/dns-reverse-dns-for-azure-services
    note: Reverse DNS is set through PowerShell or the CLI and only for public IPv4 addresses.
  ipv6:
    answer: yes
    evidence: https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/ipv6-overview
    note: There is no charge for public IPv6 addresses or prefixes.
  anonymous_payment:
    answer: no
    evidence: https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/change-credit-card
    note: Payment is by card or invoice. Cryptocurrency is not accepted.
---
