---
name: Disroot
description: >-
  Volunteer-run platform from the Netherlands offering email and other open services.
website: https://disroot.org
source: https://git.disroot.org/Disroot-Ansible
smtp_host: disroot.org
pop3_host: disroot.org
imap_host: disroot.org
jurisdiction: NL
domain: disroot.org
mail_domain: disroot.org
criteria:
  open_source:
    answer: yes
    evidence: https://disroot.org/about
    note: Runs only free and open-source software such as Postfix, Dovecot and Roundcube. Deployment roles are published at git.disroot.org.
  no_trackers:
    answer: yes
    evidence: https://disroot.org/privacy_policy
    note: The privacy policy states that user behavior is not analyzed or profiled and that there are no advertisers.
  no_ads:
    answer: yes
    evidence: https://disroot.org/privacy_policy
    note: Funded by donations. No ads and no data sales.
  independent_audit:
    answer: no
    note: No independent audit is published.
  transparency_report:
    answer: no
    note: No transparency report or government request policy is published.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  e2ee:
    answer: partial
    evidence: https://disroot.org/services/email
    note: OpenPGP is possible with the Mailvelope browser extension or a desktop client. Not on by default.
  encrypted_storage:
    answer: no
    evidence: https://disroot.org/privacy_policy
    note: Mail is stored unencrypted unless the user encrypts it. An opt-in Lacre beta encrypts incoming mail with the user's own PGP key for a limited group of users.
  open_protocols:
    answer: yes
    evidence: https://disroot.org/services/email
    note: IMAP, POP3 and SMTP work with any client.
  custom_domains:
    answer: yes
    evidence: https://disroot.org/perks
    note: Available as a lifetime feature after a donation of the suggested amount.
  anonymous_signup:
    answer: no
    evidence: https://user.disroot.org/pwm/public/newuser
    note: An existing email address is required for verification during sign-up.
  srs:
    answer: no
    note: No published documentation on SRS for forwarded mail.
  arc:
    answer: no
    note: No published documentation on ARC signing or validation.
---
