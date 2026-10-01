---
name: Njalla
description: Domain service run by njalla.srl in Costa Rica. Njalla registers domains in its own name and grants customers full usage rights, and accepts cryptocurrency.
website: https://njal.la/domains/
jurisdiction: CR
domain: njal.la
criteria:
  open_source:
    answer: no
    note: Closed source.
  no_trackers:
    answer: yes
    evidence: https://njal.la/tos/
    note: The terms say no data is collected beyond the email or XMPP address and password, and the website loads only its own scripts.
  no_ads:
    answer: yes
    evidence: https://njal.la/pricing/
    note: Funded by paid domain registrations. No ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  free_whois_privacy:
    answer: yes
    evidence: https://njal.la/faq/
    note: Njalla owns every domain on the customer's behalf, so the customer's details never appear in WHOIS, at no extra cost.
  at_cost_renewals:
    answer: yes
    evidence: https://njal.la/pricing/
    note: Each extension has one flat yearly price for registration and renewal.
  two_factor:
    answer: yes
    evidence: https://njal.la/static/CACHE/js/njalla.84ac836b6fcb.js
    note: The site code supports TOTP one-time passwords and WebAuthn security keys for login.
  registry_lock:
    answer: no
    evidence: https://njal.la/faq/
    note: Neither a transfer lock setting nor a registry lock service is documented.
---
