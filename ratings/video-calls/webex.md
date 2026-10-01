---
name: Webex
description: Cisco's video meeting and team messaging platform with desktop, mobile and browser apps, webinars and calling features.
website: https://www.webex.com
mainstream: true
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
  - android
  - ios
  - web
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://www.cisco.com/c/en/us/about/legal/privacy-full.html
    note: The Cisco privacy statement describes third-party cookies used for interest-based advertising on its websites.
  no_ads:
    answer: partial
    evidence: https://www.cisco.com/c/en/us/about/legal/privacy-full.html
    note: Funded by subscriptions with no ads in meetings, but Cisco works with third parties on interest-based advertising; Cisco states it does not sell personal data.
  independent_audit:
    answer: partial
    evidence: https://help.webex.com/en-us/article/pdz31w/Webex-Compliance-and-Certifications
    note: Webex lists ISO 27001 certification, but no audit report is public.
  e2ee:
    answer: partial
    evidence: https://help.webex.com/en-us/article/nsj2xpfb/Schedule-a-Webex-Meeting-with-end-to-end-encryption
    note: End-to-end encryption is available as a separate meeting type that must be chosen by the host or set by an administrator.
  no_account_needed:
    answer: partial
    evidence: https://help.webex.com/en-us/article/n665eiq/Join-a-Webex-Meeting-for-the-first-time-as-a-guest
    note: Guests can join from a link without an account; hosts need a Webex account.
  self_hostable:
    answer: partial
    evidence: https://help.webex.com/en-us/article/maj0a6/Proxy-Support-for-Hybrid-Data-Security-and-Webex-Video-Mesh
    note: Webex Video Mesh nodes can process meeting media on customer premises, but meetings still depend on the Webex cloud.
---
