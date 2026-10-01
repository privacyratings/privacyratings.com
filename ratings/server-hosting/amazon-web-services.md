---
name: Amazon Web Services
description: Cloud computing platform from Amazon offering virtual servers (EC2), storage, databases and hundreds of other services in regions worldwide.
website: https://aws.amazon.com
aliases:
  - AWS
  - EC2
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
  port_25:
    answer: partial
    evidence: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html
    note: Outbound port 25 to public addresses is blocked by default, and customers can request removal of the restriction.
  reverse_dns:
    answer: partial
    evidence: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html
    note: Reverse DNS can be set for Elastic IP addresses, which are IPv4 only.
  ipv6:
    answer: yes
    evidence: https://aws.amazon.com/vpc/pricing/
    note: IPv6 addresses can be assigned to instances, and only public IPv4 addresses carry an hourly charge.
  anonymous_payment:
    answer: no
    evidence: https://repost.aws/knowledge-center/accepted-payment-methods
    note: Payment is by card or direct debit. Cryptocurrency is not accepted.
---
