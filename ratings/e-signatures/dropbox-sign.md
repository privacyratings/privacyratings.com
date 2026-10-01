---
name: Dropbox Sign
description: Electronic signature service from Dropbox, formerly HelloSign, for sending and signing documents online, with an API for adding signatures to other apps.
website: https://sign.dropbox.com
mainstream: true
aliases:
  - HelloSign
domain: app.hellosign.com
jurisdiction: US
platforms:
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://sign.dropbox.com/about/privacy
    note: Uses Google Analytics, Heap and Google advertising features such as remarketing.
  no_ads:
    answer: partial
    evidence: https://sign.dropbox.com/about/privacy
    note: Funded by subscriptions. The privacy policy states that information is not sold, although the website uses remarketing to advertise Dropbox Sign.
  independent_audit:
    answer: partial
    evidence: https://trust.dropbox.com/
    note: Dropbox Sign has SOC 2 Type II and ISO 27001 audits. The reports are only available on request.
  transparency_report:
    answer: yes
    evidence: https://help.dropbox.com/transparency
    note: Dropbox publishes counts of government requests for user data. The report does not list Dropbox Sign separately.
  user_notice:
    answer: yes
    evidence: https://help.dropbox.com/transparency
    note: Dropbox states that it gives users notice of government requests for their information unless a non-disclosure order prohibits it.
---
