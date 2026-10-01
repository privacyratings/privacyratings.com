---
name: Microsoft Exchange Server
description: Microsoft's on-premises mail, calendar and contacts server for Windows Server, used by organizations with Outlook clients. Sold as a subscription edition.
website: https://www.microsoft.com/en-us/microsoft-365/exchange/exchange-server
family: microsoft
aliases:
  - Exchange
mainstream: true
jurisdiction: US
platforms:
  - windows
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.microsoft.com/en-us/privacy/privacystatement#maincookiessimilartechnologiesmodule
    note: Microsoft websites use third-party cookies and web beacons, including for personalized ads. The server sends diagnostic data to Microsoft through the Emergency Mitigation service unless it is disabled.
  no_ads:
    answer: yes
    evidence: https://www.microsoft.com/en-us/microsoft-365/exchange/exchange-server
    note: Funded by server and client access licenses. The server shows no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
