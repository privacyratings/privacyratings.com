---
name: GlassWire
description: Network monitor and firewall for Windows and Android that shows which apps use the network, alerts on new connections and can block apps from going online.
website: https://www.glasswire.com
jurisdiction: US
platforms:
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.glasswire.com/privacy/
    note: The website loads Google Tag Manager and Facebook scripts, and the privacy policy mentions advertising networks and analytics providers.
  no_ads:
    answer: yes
    evidence: https://www.glasswire.com/pricing/
    note: Free version with paid Premium plans; the privacy policy states personal data is not sold or rented.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
