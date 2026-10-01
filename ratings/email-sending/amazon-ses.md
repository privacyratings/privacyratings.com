---
name: Amazon SES
description: Amazon Simple Email Service, an email API and SMTP relay on AWS for sending and receiving email, billed per message.
website: https://aws.amazon.com/ses/
aliases:
  - Amazon Simple Email Service
  - AWS SES
mainstream: true
jurisdiction: US
domain: aws.amazon.com
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    note: The website loads Amplitude, DoubleClick and Marketo scripts.
  no_ads:
    answer: partial
    evidence: https://aws.amazon.com/compliance/data-privacy-faq/
    note: Customer content is not used for marketing or advertising, but the website loads DoubleClick advertising scripts to promote AWS.
  independent_audit:
    answer: partial
    evidence: https://aws.amazon.com/compliance/soc-faqs/
    note: A SOC 3 summary report is public. The full SOC 2 report is only available to customers through AWS Artifact.
  transparency_report:
    answer: yes
    evidence: https://aws.amazon.com/compliance/data-privacy-faq/
    note: Amazon regularly publishes a report on the types and volume of information requests it receives.
  user_notice:
    answer: yes
    evidence: https://aws.amazon.com/compliance/data-privacy-faq/
    note: AWS gives customers notice of demands for their content unless legally prohibited.
  tracking_off_by_default:
    answer: yes
    evidence: https://docs.aws.amazon.com/ses/latest/dg/faqs-metrics.html
    note: Open and click tracking only apply to mail sent with a configuration set that publishes those events.
  enforced_tls:
    answer: yes
    evidence: https://docs.aws.amazon.com/ses/latest/dg/security-protocols.html
    note: TLS is opportunistic by default. A configuration set with the TLS policy set to Require drops mail that cannot be sent over TLS.
  eu_data_location:
    answer: yes
    evidence: https://docs.aws.amazon.com/general/latest/gr/ses.html
    note: Available in several EU regions, including Frankfurt, Ireland, Paris, Milan and Stockholm.
---
