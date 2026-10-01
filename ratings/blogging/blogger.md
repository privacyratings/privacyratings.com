---
name: Blogger
description: Free hosted blogging service from Google, with blogs on blogspot.com or a custom domain, tied to a Google account.
website: https://www.blogger.com
mainstream: true
domain: www.blogger.com
jurisdiction: US
platforms:
  - web
  - android
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.blogger/latest/
    note: The Android app contains Google Firebase Analytics, and Google uses Blogger activity for its own analytics and advertising.
  no_ads:
    answer: no
    evidence: https://policies.google.com/privacy
    note: Google is funded by advertising and its privacy policy covers using data to show personalized ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: yes
    evidence: https://transparencyreport.google.com/user-data/overview
    note: Google publishes twice-yearly counts of government requests for user data and how often data is disclosed.
  user_notice:
    answer: yes
    evidence: https://policies.google.com/terms/information-requests
    note: Google emails the user before disclosing data to a government agency unless legally prohibited or in emergencies.
---
