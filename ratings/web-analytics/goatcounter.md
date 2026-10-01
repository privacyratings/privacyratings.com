---
name: GoatCounter
description: Open source web analytics that shows aggregate visitor counts without cookies or stored IP addresses. Available as a hosted service at goatcounter.com or as a self-hosted binary.
website: https://www.goatcounter.com
source: https://github.com/arp242/goatcounter
domain: www.goatcounter.com
jurisdiction: IE
platforms:
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/arp242/goatcounter/blob/master/LICENSE
    note: EUPL-1.2, with a shortened list of compatible licenses.
  no_trackers:
    answer: yes
    evidence: https://www.goatcounter.com/help/privacy
    note: The website loads no third-party trackers, and the privacy policy states no information is shared with third parties.
  no_ads:
    answer: yes
    evidence: https://www.goatcounter.com/contribute
    note: Funded by donations and paid plans, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_cookies:
    answer: yes
    evidence: https://www.goatcounter.com/help/privacy
    note: Nothing is stored in the browser with cookies, localStorage, cache or other methods.
  no_personal_data:
    answer: yes
    evidence: https://www.goatcounter.com/help/sessions
    note: IP addresses and User-Agent headers are only held in memory for session counting and never stored to disk.
  self_hostable:
    answer: yes
    evidence: https://github.com/arp242/goatcounter#self-hosting-goatcounter
    note: Official binaries and instructions for self-hosting are provided.
---
