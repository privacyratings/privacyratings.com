---
name: Proton VPN
description: VPN service from Proton in Switzerland with open-source apps on every platform and a free plan without ads.
website: https://protonvpn.com
family: proton
jurisdiction: CH
source: https://github.com/ProtonVPN/android-app
domain: protonvpn.com
criteria:
  transparency_report:
    answer: yes
    evidence: https://proton.me/legal/transparency
    note: Yearly counts of legal orders received, contested and complied with, including a separate Proton VPN section.
  open_source:
    answer: partial
    evidence: https://github.com/ProtonVPN/android-app/blob/master/LICENSE
    note: Apps are open source under GPL-3.0. The server side is not.
  no_trackers:
    answer: partial
    evidence: https://proton.me/legal/privacy
    note: Website analytics are self-hosted, and the apps send first-party crash reports that can be turned off in settings.
  no_ads:
    answer: yes
    evidence: https://protonvpn.com/pricing
    note: Funded by paid plans. The free plan has no ads.
  independent_audit:
    answer: yes
    evidence: https://drive.proton.me/urls/DZVEJZFYHM#FPSKdUEykprb
    note: Full Securitum no-logs audit report, repeated yearly.
  user_notice:
    answer: partial
    evidence: https://proton.me/legal/privacy
    note: Swiss law requires authorities to notify subjects of proceedings. Proton does not itself promise notice.
  no_logs_audited:
    answer: yes
    evidence: https://drive.proton.me/urls/DZVEJZFYHM#FPSKdUEykprb
    note: Securitum audits the VPN servers each year and found no activity or connection logging.
  anonymous_payment:
    answer: yes
    evidence: https://protonvpn.com/support/payment-options
    note: Cash and Bitcoin are accepted, and the privacy policy states no personal information is needed to create an account.
  open_source_clients:
    answer: yes
    evidence: https://github.com/ProtonVPN
    note: Apps for Windows, macOS, Linux, Android and iOS are open source.
  modern_protocols:
    answer: yes
    evidence: https://protonvpn.com/support/wireguard-privacy
    note: WireGuard is supported alongside OpenVPN and the Stealth protocol.
imported_from: awesome-privacy
---
