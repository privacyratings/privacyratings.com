---
name: VirtualBox
description: Type 2 hypervisor from Oracle for x86-64 and ARM hosts, running on Windows, macOS, Linux and Solaris. It runs guest operating systems in virtual machines on a desktop or server.
website: https://www.virtualbox.org
source: https://github.com/VirtualBox/virtualbox
criteria:
  open_source:
    answer: yes
    evidence: https://www.virtualbox.org/wiki/Licensing_FAQ
    note: The base package is GPL-3.0 and runs on its own. The optional Extension Pack is proprietary under the PUEL.
  no_trackers:
    answer: partial
    evidence: https://www.virtualbox.org/manual/ch08.html#vboxmanage-updatecheck
    note: No third-party trackers were found, but an automatic update check that contacts Oracle is on by default and can be turned off.
  no_ads:
    answer: yes
    evidence: https://www.virtualbox.org/wiki/Licensing_FAQ
    note: Free base package, funded by Oracle through paid Extension Pack enterprise licenses, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
imported_from: awesome-privacy
jurisdiction: US
---
