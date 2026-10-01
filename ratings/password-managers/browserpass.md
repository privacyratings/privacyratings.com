---
name: Browserpass
description: >-
  Browser extension for pass, the standard Unix password manager. Passwords stay in GPG-encrypted files on your own computer.
website: https://github.com/browserpass/browserpass-extension
source: https://github.com/browserpass/browserpass-extension
license: ISC
platforms: [firefox, chromium, linux, macos, windows]
pick: 1
pick_reason: >-
  For people who want no password company at all. Every password is a GPG-encrypted file in a folder you control, synced with Git if you like, and Browserpass fills it into the browser.
caveat: >-
  Needs pass, GnuPG and the Browserpass native host installed first. Best for technical users on desktop.
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/browserpass/browserpass-extension/blob/master/LICENSE
    note: ISC.
  no_ads:
    answer: yes
    evidence: https://github.com/browserpass/browserpass-extension
    note: Volunteer project with no ads or paid tiers.
  e2ee_vault:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: Each password is a separate GPG-encrypted file.
  self_host_or_local:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: Passwords are stored as files in a local folder that can be synced with git.
  export:
    answer: yes
    evidence: https://www.passwordstore.org/
    note: Passwords are ordinary GPG files in a folder, so there is nothing to export.
  no_trackers:
    answer: yes
    evidence: https://github.com/browserpass/browserpass-extension#privacy
    note: Sends no telemetry, and usage metadata stays in local browser storage.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
