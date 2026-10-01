---
name: Apache Guacamole
description: Clientless remote desktop gateway that runs on a server and gives browser-based access to machines over VNC, RDP, SSH and Telnet using HTML5, with no plugin or client software needed.
website: https://guacamole.apache.org
source: https://github.com/apache/guacamole-server
jurisdiction: US
platforms:
  - linux
  - web
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/apache/guacamole-server/blob/main/LICENSE
    note: Apache-2.0 for the server and web client.
  no_trackers:
    answer: yes
    evidence: https://github.com/apache/guacamole-client
    note: No telemetry or analytics in the source code, and the website loads no trackers.
  no_ads:
    answer: yes
    evidence: https://www.apache.org/foundation/sponsorship.html
    note: Free software from the non-profit Apache Software Foundation, funded by sponsors and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
