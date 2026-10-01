---
name: Plunk
description: Open-source email platform for transactional email, campaigns and automations, hosted in the EU or self-hosted with Docker.
website: https://www.useplunk.com
source: https://github.com/useplunk/plunk
license: AGPL-3.0
domain: useplunk.com
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/useplunk/plunk/blob/main/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://www.useplunk.com/privacy
    note: The privacy policy states no Google Analytics, Meta pixel or other third-party tracking scripts are used, with only a login cookie.
  no_ads:
    answer: yes
    evidence: https://www.useplunk.com/privacy
    note: Funded by per-email pricing. The privacy policy states data is never sold.
  eu_data_location:
    answer: yes
    evidence: https://www.useplunk.com/privacy
    note: The hosted service stores data with Hetzner in Germany and sends mail through Amazon SES. Self-hosting is also supported.
---
