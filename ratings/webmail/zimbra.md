---
name: Zimbra Collaboration
description: Self-hosted email and collaboration server from Synacor, with a web client for mail, calendar, contacts and files. An open-source edition and a commercial Network Edition with extra features are offered.
website: https://www.zimbra.com
source: https://github.com/Zimbra/zm-web-client
jurisdiction: US
criteria:
  open_source:
    answer: partial
    evidence: https://www.zimbra.com/product/licenses-and-terms-of-use/
    note: The open-source edition, including the web client, is public under CPAL-1.0 and GPL-2.0, but the commercial Network Edition adds closed-source features.
  no_trackers:
    answer: no
    note: The website loads Google Analytics, HubSpot and New Relic.
  no_ads:
    answer: yes
    evidence: https://www.zimbra.com/product/edition-comparison/
    note: Funded by commercial licenses and support. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  openpgp:
    answer: no
    note: OpenPGP is not supported. S/MIME is offered in the Network Edition.
  no_cloud_relay:
    answer: yes
    evidence: https://zimbra.github.io/installguides/latest/single.html
    note: Self-hosted. The web client talks to the Zimbra server where it is installed, with no vendor service involved.
  remote_content_blocked:
    answer: yes
    evidence: https://github.com/Zimbra/zm-web-client/blob/develop/WebRoot/js/zimbraMail/mail/ZmMailApp.js
    note: The zimbraPrefDisplayExternalImages preference is off by default, so external images load only on request.
  any_provider:
    answer: no
    note: The web client works only with a Zimbra server. Other IMAP and POP3 accounts can only be pulled into a Zimbra mailbox.
  self_hostable:
    answer: yes
    evidence: https://zimbra.github.io/installguides/latest/single.html
    note: Self-hosted software with an official installation guide.
aliases:
  - Zimbra
platforms:
  - web
---
