---
name: Picocrypt
description: Small open source file encryption tool for desktop that uses XChaCha20 and Argon2id, with optional keyfiles, Reed-Solomon error correction and plausible deniability. The original project is archived and no longer developed.
website: https://github.com/Picocrypt/Picocrypt
source: https://github.com/Picocrypt/Picocrypt
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://github.com/Picocrypt/Picocrypt/blob/main/LICENSE
    note: GPL-3.0.
  no_trackers:
    answer: yes
    evidence: https://github.com/Picocrypt/Picocrypt#readme
    note: The README states the app has no telemetry. The project has no website.
  no_ads:
    answer: yes
    evidence: https://github.com/Picocrypt/Picocrypt#readme
    note: Free volunteer project with no ads or paid tiers.
  independent_audit:
    answer: yes
    evidence: https://raw.githubusercontent.com/Picocrypt/storage/main/Picocrypt.Audit.Report.pdf
    note: Code audit by Radically Open Security, with the full report published.
---
