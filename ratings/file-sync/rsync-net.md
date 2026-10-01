---
name: rsync.net
description: Cloud storage for offsite backups, accessed over SSH with standard tools such as rsync, SFTP, rclone, restic and Borg. Accounts are stored on ZFS with snapshots.
website: https://www.rsync.net
jurisdiction: US
criteria:
  open_source:
    answer: partial
    evidence: https://www.rsync.net/resources/howto/unix.html
    note: Works with open source clients such as rsync, SFTP and Borg over SSH, but the service platform is not published.
  no_trackers:
    answer: yes
    evidence: https://www.rsync.net/resources/regulatory/privacy.html
    note: The privacy policy states no third-party analytics or trackers are used, and cookies are only set for account login.
  no_ads:
    answer: yes
    evidence: https://www.rsync.net/pricing.html
    note: Funded by paid storage plans. The privacy policy says personal information is not shared with any party.
  independent_audit:
    answer: partial
    evidence: https://www.rsync.net/resources/regulatory/sas70.html
    note: States its US datacenter locations are SSAE16 certified, but no audit report is public.
---
