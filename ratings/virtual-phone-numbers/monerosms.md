---
name: MoneroSMS
description: Prepaid US phone numbers for sending and receiving SMS, paid in Monero, with access through a web app, command-line client or API. Operated by VoidNetwork LLC.
website: https://monerosms.com
source: https://github.com/EgosOwn/monerosms-client
domain: monerosms.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/EgosOwn/monerosms-client/blob/master/LICENSE.txt
    note: GPL-3.0. Only part of the service is published.
  no_trackers:
    answer: yes
    evidence: https://api.monerosms.com/tos
    note: The privacy terms list only operational data and server logs, with no analytics, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://api.monerosms.com/tos
    note: Funded by prepaid Monero payments; the terms list no data sales or advertising.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    evidence: https://api.monerosms.com/tos
    note: No transparency report; the terms only state that data is shared to comply with valid legal demands.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
jurisdiction: US
---
