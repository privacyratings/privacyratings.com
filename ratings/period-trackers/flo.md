---
name: Flo
description: Period, ovulation and pregnancy tracking app with cycle predictions, symptom logging and health content, funded by Flo Premium subscriptions. An Anonymous Mode removes name and email from the account.
website: https://flo.health
aliases:
  - Flo Period Tracker
mainstream: true
jurisdiction: GB
platforms:
  - android
  - ios
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: no
    evidence: https://reports.exodus-privacy.eu.org/en/reports/org.iggymedia.periodtracker/latest/
    note: The Exodus report finds AppsFlyer, Google Firebase Analytics and Sentry in the Android app.
  no_ads:
    answer: partial
    evidence: https://flo.health/privacy-policy
    note: Funded by subscriptions with no in-app ads or data sales, but with consent device identifiers are shared with AppsFlyer and ad partners such as Meta and Google Ads to target Flo's own ads.
  independent_audit:
    answer: partial
    evidence: https://flo.health/privacy-portal/certification
    note: Flo holds ISO 27001 and ISO 27701 certifications and cites a third-party privacy audit, but no full audit report is public.
  local_storage:
    answer: no
    evidence: https://flo.health/privacy-portal
    note: Cycle data is stored on Flo's servers, encrypted at rest but not end-to-end encrypted.
  no_account_needed:
    answer: partial
    evidence: https://flo.health/product-tour/anonymous-mode
    note: An account is created on Flo's servers, but Anonymous Mode lets it be used without a name, email or other identifiers.
---
The FTC settled allegations that Flo shared users' health information with outside data analytics providers after promising to keep it private. The order requires Flo to get users' consent before sharing health information and to obtain an independent review of its privacy practices. See the [FTC press release](https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about) and [case page](https://www.ftc.gov/legal-library/browse/cases-proceedings/192-3133-flo-health-inc).
