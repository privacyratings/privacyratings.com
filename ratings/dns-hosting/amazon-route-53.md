---
name: Amazon Route 53
description: Authoritative DNS hosting and domain registration service from Amazon Web Services, with health checks, routing policies and pay-per-use pricing.
website: https://aws.amazon.com/route53/
mainstream: true
jurisdiction: US
domain: console.aws.amazon.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://aws.amazon.com/legal/cookies/
    note: AWS websites set cookies from third parties including The Trade Desk, Oracle BlueKai and LinkedIn.
  no_ads:
    answer: no
    evidence: https://aws.amazon.com/privacy/
    note: The privacy notice says cookies and identifiers are used to advertise to visitors on third-party websites.
  independent_audit:
    answer: partial
    evidence: https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/whitepapers/compliance/AWS_SOC3_Report.pdf
    note: Only the SOC 3 summary report is public; SOC 1 and SOC 2 reports are available to customers in AWS Artifact.
  transparency_report:
    answer: yes
    evidence: https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/security/pdfs/Amazon_Government_Request_Report_H1_2026.pdf
    note: Semi-annual reports with counts of government requests to Amazon and AWS and how they were answered.
  user_notice:
    answer: yes
    evidence: https://www.amazon.com/gp/help/customer/display.html?nodeId=GYSDRGWQ2C2CRYEF
    note: Amazon notifies customers before disclosing content unless prohibited or there is clear indication of illegal conduct.
  dnssec:
    answer: partial
    evidence: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html
    note: DNSSEC signing is supported but needs a customer-managed AWS KMS key for the key-signing key.
  api_access:
    answer: yes
    evidence: https://docs.aws.amazon.com/Route53/latest/APIReference/Welcome.html
    note: Every AWS account can manage hosted zones and records through the Route 53 API.
  two_factor:
    answer: yes
    evidence: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
    note: Passkeys, security keys and authenticator apps are supported.
---
