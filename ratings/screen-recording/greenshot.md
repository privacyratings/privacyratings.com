---
name: Greenshot
description: Open-source screenshot tool for Windows that captures a region, window or full screen and adds annotations, highlighting and redaction before saving, printing or exporting.
website: https://getgreenshot.org
source: https://github.com/greenshot/greenshot
platforms:
  - windows
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/greenshot/greenshot/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: no
    evidence: https://getgreenshot.org/privacy-policy/
    note: The website uses Google Analytics and Google AdSense cookies.
  no_ads:
    answer: no
    evidence: https://getgreenshot.org/privacy-policy/
    note: The app has no ads, but the project is partly funded by Google AdSense ads on its website that use third-party cookies for interest-based ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  local_by_default:
    answer: yes
    evidence: https://github.com/greenshot/greenshot
    note: Screenshots are saved to local files or the clipboard. Uploading to online services is an optional export destination.
  no_account_needed:
    answer: yes
    evidence: https://getgreenshot.org/downloads/
    note: No account is needed.
---
