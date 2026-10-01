---
name: WordPress.com
description: Hosted website and blogging platform run by Automattic, built on the open source WordPress software, with web, Android and iOS apps.
website: https://wordpress.com
mainstream: true
domain: wordpress.com
jurisdiction: US
source: https://github.com/Automattic/wp-calypso
platforms:
  - web
  - android
  - ios
criteria:
  open_source:
    answer: partial
    evidence: https://raw.githubusercontent.com/Automattic/wp-calypso/trunk/LICENSE.md
    note: The Calypso web interface and mobile apps are GPL-2.0, but the WordPress.com hosting platform is closed source.
  no_trackers:
    answer: no
    evidence: https://automattic.com/privacy/
    note: The website loads Google Analytics, Hotjar and the Facebook pixel, and the privacy policy describes sharing data with advertising and analytics vendors.
  no_ads:
    answer: no
    evidence: https://wordpress.com/support/no-ads/
    note: Free sites show ads from advertising partners, and public site content is shared with third parties, including for AI training, unless the owner opts out.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparency.automattic.com/transparency-report/wordpress-com-transparency-report-jan-jun-2026/
    note: Automattic publishes twice-yearly reports with counts of information requests and disclosures.
  user_notice:
    answer: yes
    evidence: https://transparency.automattic.com/transparency-report/wordpress-com-transparency-report-jan-jun-2026/
    note: Policy is to notify users and give them a copy of legal requests unless prohibited by law or court order.
---
