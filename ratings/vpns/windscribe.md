---
name: Windscribe
description: VPN service from Canada with a limited free plan, open-source apps and browser extensions, and WireGuard, IKEv2 and OpenVPN support.
website: https://windscribe.com
jurisdiction: CA
source: https://github.com/Windscribe/Desktop-App
domain: windscribe.com
imported_from: awesome-privacy
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/Windscribe/Desktop-App/blob/master/LICENSE
    note: Apps are open source. The server side is not.
  no_trackers:
    answer: partial
    evidence: https://windscribe.com/privacy
    note: The website uses self-hosted Piwik analytics and no third-party trackers. The Android app has no known trackers on Exodus.
  no_ads:
    answer: yes
    evidence: https://windscribe.com/ethics
    note: Funded by paid plans. The ethics page rules out targeted advertising and selling user data.
  independent_audit:
    answer: yes
    evidence: https://drive.google.com/file/d/1EgNETLVm2oZdGJXZJmFSCDc7Ib72LIOw/view
    note: Full Packetlabs report on the server infrastructure and no-logs configuration.
  transparency_report:
    answer: yes
    evidence: https://windscribe.com/transparency
    note: Live counts of DMCA and law enforcement data requests and how many were complied with.
  user_notice:
    answer: no
    note: No published policy on notifying users about data requests.
  no_logs_audited:
    answer: yes
    evidence: https://drive.google.com/file/d/1EgNETLVm2oZdGJXZJmFSCDc7Ib72LIOw/view
    note: Packetlabs reviewed the no-logs policy on the VPN servers and confirmed the logging issues it found were fixed.
  anonymous_payment:
    answer: yes
    evidence: https://windscribe.com/knowledge-base/articles/which-cryptocurrencies-do-you-support
    note: Sign-up needs only a username and password. Monero and cash are accepted.
  open_source_clients:
    answer: yes
    evidence: https://github.com/Windscribe
    note: Desktop, Android, iOS and browser extension source code is published.
  modern_protocols:
    answer: yes
    evidence: https://windscribe.com/features/flexible-connectivity
    note: WireGuard is supported alongside IKEv2, OpenVPN and Stealth.
---
