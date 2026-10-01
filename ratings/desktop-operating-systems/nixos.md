---
name: NixOS
description: A Linux distribution built on the Nix package manager, where the whole system is configured declaratively and upgrades can be rolled back.
website: https://nixos.org
source: https://github.com/NixOS/nixpkgs
jurisdiction: NL
platforms:
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://raw.githubusercontent.com/NixOS/nixpkgs/master/COPYING
    note: Nixpkgs and NixOS are MIT-licensed; packaged software keeps its own licenses.
  no_trackers:
    answer: yes
    evidence: https://nixos.org/privacy/
    note: The privacy policy lists only server logs, with no analytics on the website and no telemetry in the operating system.
  no_ads:
    answer: yes
    evidence: https://nixos.org/backing/
    note: Funded by donations and sponsorships to the NixOS Foundation, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
