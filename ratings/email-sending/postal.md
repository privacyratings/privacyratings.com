---
name: Postal
description: Open-source mail delivery platform for running your own SMTP relay and email API, with web-based management, webhooks and click and open tracking.
website: https://docs.postalserver.io
source: https://github.com/postalserver/postal
license: MIT
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/postalserver/postal/blob/main/MIT-LICENCE
    note: MIT.
  no_ads:
    answer: yes
    evidence: https://github.com/postalserver/postal
    note: Free open source software with no ads.
  tracking_off_by_default:
    answer: yes
    evidence: https://docs.postalserver.io/features/click-and-open-tracking
    note: Tracking only works after a tracking domain is added to a mail server.
  eu_data_location:
    answer: yes
    evidence: https://docs.postalserver.io/
    note: Self-hosted, so message data stays on servers the operator chooses.
---
