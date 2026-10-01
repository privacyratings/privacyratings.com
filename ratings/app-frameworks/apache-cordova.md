---
name: Apache Cordova
description: Apache Software Foundation framework for building mobile apps with HTML, CSS and JavaScript, packaged in a native webview with plugins for device APIs.
website: https://cordova.apache.org
aliases:
  - Cordova
  - PhoneGap
source: https://github.com/apache/cordova
jurisdiction: US
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/apache/cordova-cli/blob/master/LICENSE
    note: Apache-2.0-licensed.
  no_trackers:
    answer: yes
    evidence: https://privacy.apache.org/policies/privacy-policy-public.html
    note: No third-party trackers, and the CLI has no telemetry. The Apache Software Foundation's self-hosted Matomo uses no cookies and anonymizes IP addresses.
  no_ads:
    answer: yes
    evidence: https://www.apache.org/foundation/sponsorship.html
    note: Developed under the Apache Software Foundation, funded by sponsorships and donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
platforms:
  - linux
  - macos
  - windows
  - android
  - ios
---
