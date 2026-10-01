---
name: AWS End User Messaging SMS
description: Amazon Web Services API for sending SMS, MMS and voice messages, formerly Amazon Pinpoint SMS. Amazon SNS also sends SMS through it.
website: https://aws.amazon.com/end-user-messaging/
aliases:
  - Amazon SNS SMS
  - Amazon Pinpoint SMS
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
  eu_data_location:
    answer: yes
    evidence: https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html
    note: Available in several EU regions, including Frankfurt, Ireland, Paris, Milan, Spain and Stockholm.
---
