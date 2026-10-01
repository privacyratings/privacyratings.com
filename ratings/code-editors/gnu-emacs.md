---
name: GNU Emacs
description: Extensible text editor from the GNU Project, programmable in Emacs Lisp, with packages for code editing, Org mode, email, Git and more.
website: https://www.gnu.org/software/emacs/
aliases:
  - Emacs
source: https://savannah.gnu.org/projects/emacs
jurisdiction: US
platforms:
  - windows
  - macos
  - linux
criteria:
  open_source:
    answer: yes
    evidence: https://cgit.git.savannah.gnu.org/cgit/emacs.git/tree/COPYING
    note: GPL-3.0-or-later.
  no_trackers:
    answer: yes
    evidence: https://savannah.gnu.org/projects/emacs
    note: No telemetry or analytics in the source code, and the gnu.org website loads no third-party scripts.
  no_ads:
    answer: yes
    evidence: https://my.fsf.org/donate
    note: GNU project supported by the Free Software Foundation through donations, with no ads.
  independent_audit:
    answer: no
    note: No independent audit is published.
---
