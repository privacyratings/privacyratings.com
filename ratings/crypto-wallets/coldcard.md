---
name: COLDCARD
description: Bitcoin-only hardware wallet from Coinkite designed for air-gapped signing using a microSD card or NFC, with secure elements, PIN protection and multisig support.
website: https://coldcard.com
source: https://github.com/Coldcard/firmware
jurisdiction: CA
criteria:
  open_source:
    answer: yes
    source_available: true
    evidence: https://github.com/Coldcard/firmware/blob/master/COPYING-CC
    note: All firmware code is public under the MIT license with the Commons Clause, a source-available combination that is not OSI-approved.
  no_trackers:
    answer: no
    note: The coldcard.com website loads Google Analytics through Google Tag Manager.
  no_ads:
    answer: yes
    evidence: https://coinkite.com/privacy
    note: Funded by hardware sales. The privacy policy states personal information is not sold or rented to third parties.
  independent_audit:
    answer: no
    evidence: https://coldcard.com/security/status
    note: No independent audit is published. The security status page lists only scoped reviews and states no complete independent audit of the firmware is established.
---
