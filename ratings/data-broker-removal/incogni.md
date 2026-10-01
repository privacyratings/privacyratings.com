---
name: Incogni
description: Paid service, part of the same group as Surfshark, that sends removal requests to data brokers and people-search sites on a subscriber's behalf and repeats them regularly. It needs the subscriber's name, addresses and contact details to work.
website: https://incogni.com
domain: incogni.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://incogni.com/legal/cookie-policy
    note: The cookie policy lists Google Analytics and Google Ads cookies for analytics and marketing, and the website loads Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://incogni.com/legal/privacy-policy
    note: Funded by subscriptions. The privacy policy states customer personal information is not and has never been sold.
  independent_audit:
    answer: yes
    evidence: https://blog.incogni.com/wp-content/uploads/2025/08/Incogni-ISAE-3000-Report-FInal.pdf
    note: Deloitte published a full ISAE 3000 limited assurance report on data broker removals and on customer data not being sold. It is not a security audit.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
---
