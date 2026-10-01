---
name: Blocked.org
description: Open Rights Group tool that checks whether a website is blocked by the filters of UK mobile and broadband Internet service providers.
website: https://www.blocked.org.uk
source: https://github.com/OpenRightsGroup/blocked-org-uk
domain: www.blocked.org.uk
imported_from: awesome-privacy
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/OpenRightsGroup/blocked-org-uk/blob/master/LICENSE-code
    note: Front end is GPL-3.0; the API and backend are published as openrightsgroup/Blocking-Middleware under GPL-3.0.
  no_trackers:
    answer: partial
    evidence: https://www.openrightsgroup.org/privacy-policy/
    note: Self-hosted Matomo analytics is on by default, with an opt-out and Do Not Track support; no third-party analytics.
  no_ads:
    answer: yes
    evidence: https://action.openrightsgroup.org/make-one-donation-support-blocked
    note: Funded by donations to Open Rights Group, which states it never sells personal data.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: partial
    evidence: https://www.openrightsgroup.org/privacy-policy/
    note: The privacy policy states unwarranted law enforcement requests are refused, but no request counts are published.
  user_notice:
    answer: yes
    evidence: https://www.openrightsgroup.org/privacy-policy/
    note: The privacy policy promises to notify affected users of law enforcement requests unless legally prohibited.
jurisdiction: GB
---
