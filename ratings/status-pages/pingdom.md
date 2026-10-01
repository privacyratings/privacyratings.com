---
name: Pingdom
description: Hosted website uptime, page speed and transaction monitoring from SolarWinds, with real user monitoring and public status pages.
website: https://www.pingdom.com
mainstream: true
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  self_hosted:
    answer: no
    note: Hosted by the vendor only.
  no_trackers:
    answer: no
    note: The home page loads Optimizely and the X (Twitter) pixel.
  no_ads:
    answer: no
    evidence: https://www.solarwinds.com/legal/privacy
    note: The SolarWinds privacy policy says personal data, including purchased data, is used for tailored advertising on third-party websites.
  independent_audit:
    answer: partial
    evidence: https://www.solarwinds.com/trust-center
    note: SolarWinds shares SOC 2 and ISO 27001 reports only on request.
  no_visitor_tracking:
    answer: no
    evidence: https://status.pingdom.com
    note: Pingdom's own public status page loads Google Analytics and Google Tag Manager.
  history:
    answer: yes
    evidence: https://documentation.solarwinds.com/en/success_center/pingdom/content/topics/public-status-page.htm
    note: Public status pages share uptime check reports, with a page per check.
---
