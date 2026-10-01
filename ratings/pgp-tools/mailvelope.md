---
name: Mailvelope
description: Browser extension that adds OpenPGP encryption to webmail services such as Gmail, Outlook.com and many others. Business editions integrate with Google Workspace and Nextcloud.
website: https://mailvelope.com
source: https://github.com/mailvelope/mailvelope
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/mailvelope/mailvelope/blob/master/LICENSE
    note: AGPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://mailvelope.com/en/privacy-policy
    note: The website uses hosted Plausible, a cookieless analytics service, and the extension asks for consent before sending anonymous usage statistics.
  no_ads:
    answer: yes
    evidence: https://mailvelope.com/en/privacy-policy
    note: Funded by business subscriptions, donations and grants. The privacy policy states data is not sold and there are no ads.
  independent_audit:
    answer: yes
    evidence: https://mailvelope.com/pdf/0xche_mailvelope_report_V3.pdf
    note: Full audit report by 0xche on the browser extension, with retest.
jurisdiction: DE
---
