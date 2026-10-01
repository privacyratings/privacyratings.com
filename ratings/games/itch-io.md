---
name: itch.io
description: Desktop app for itch.io, an online marketplace for independent games, used to browse, download, install, update and launch games bought or claimed on the site.
website: https://itch.io/app
jurisdiction: US
source: https://github.com/itchio/itch
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/itchio/itch/blob/master/LICENSE
    note: The desktop app is MIT-licensed, but the itch.io service it depends on is closed source.
  no_trackers:
    answer: no
    evidence: https://itch.io/docs/legal/privacy-policy
    note: The website loads Google Analytics and Google Tag Manager (automated test), and the privacy policy names Google Analytics as a third party that collects data.
  no_ads:
    answer: yes
    evidence: https://itch.io/docs/creators/faq
    note: Funded by a share of game sales chosen by each creator. The FAQ states ads are never placed on creator pages.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
