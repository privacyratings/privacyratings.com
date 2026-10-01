<!-- source: 206790af40f5 -->
# Warum es Privacy Ratings gibt

Datenschutz-Leitfäden helfen Millionen Menschen, bessere Apps und Dienste zu wählen. Viele leisten hervorragende Arbeit. Doch die meisten teilen dieselben Schwächen:

- **Unklare Regeln.** Ein Dienst wird aufgenommen oder weggelassen, und der Grund ist ein Forenthread, eine private Diskussion oder gar nicht veröffentlicht.
- **Nur bestanden oder nicht bestanden.** Eine Liste sagt „empfohlen“ oder gar nichts. Sie zeigt nicht, wie knapp etwas war oder was das Ergebnis ändern würde.
- **Behauptungen ohne Prüfung.** Beschreibungen sagen „verschlüsselt“ oder „keine Protokolle“, ohne auf etwas zu verlinken, das Lesende prüfen können.
- **Keine Tests.** Gehostete Dienste werden selten auf grundlegende Sicherheit geprüft, etwa TLS-Einstellungen, Sicherheits-Header oder E-Mail-Authentifizierung.
- **Getrennte Plattformen.** Vorschläge und Diskussionen finden in einem Forum oder auf einem Chatserver statt, der ein eigenes Konto und eigene Moderation braucht, getrennt vom eigentlichen Inhalt.
- **Langsame Änderungen.** Wenn sich ein Produkt ändert, bleiben Listen oft veraltet, weil ihre Aktualisierung von wenigen Menschen abhängt.

Privacy Ratings wurde gebaut, um jeden dieser Punkte zu beheben.

## Von Awesome-Listen zu einer gepflegten Ressource

Viele dieser Leitfäden begannen als GitHub-Listen. Das Format der „Awesome“-Listen, begonnen von [Sindre Sorhus](https://github.com/sindresorhus/awesome), machte es allen leicht, eine kuratierte Liste zu veröffentlichen, und es folgten Tausende Awesome-irgendwas-Listen, viele davon Forks voneinander. Listen wie [Awesome Privacy](https://github.com/lissy93/awesome-privacy) leisten wertvolle Arbeit, und viele Einträge hier wurden zuerst dort gelistet.

Das Format hat eine Schwäche: Die meisten Listen hängen von ein oder zwei Freiwilligen ab. Wenn eine Maintainerin oder ein Maintainer weiterzieht, wird es still um die Liste, sie wird archiviert oder zerfällt in Forks, die jeweils veralten. Lesende können nicht erkennen, welche Kopie aktuell ist, und nichts in einer Liste wird getestet oder bewertet.

**Privacy Ratings wird von einem Unternehmen unterstützt und betrieben, [Forward Email](https://forwardemail.net).** Es hängt nicht von Freiwilligen ab, die gehen oder das Repository archivieren könnten. Die Daten sind strukturiert statt in einer einzelnen README, sodass sie täglich automatisch validiert, bewertet und getestet werden können. Und weil alles Open Source und unter CC BY-SA lizenziert ist, kann die Community es jederzeit kopieren, prüfen und verbessern.

## Was anders ist

**Jede Regel ist öffentlich.** Jede Kategorie hat eine kurze Liste von Fragen mit einer Gewichtung von 1 bis 3. Die Fragen, die Bedeutung jeder Antwort und wie sie sich prüfen lässt, stehen alle im Ordner [`criteria/`](criteria/). Siehe [die Kriterien](https://privacyratings.com/criteria/).

**Jede Antwort hat Belege.** Ein „Ja“ oder „Teilweise“ muss auf eine Quelle verlinken, die jede Person prüfen kann: Dokumentation, Quellcode, eine Lizenzdatei oder einen Auditbericht. Alles ohne Belege zählt als „unbekannt“ und ergibt null Punkte. Ein Eintrag erhält nur dann eine Buchstabennote, wenn genug seiner Antworten durch Belege gestützt sind.

**Punktzahlen, nicht nur Listen.** Jeder Eintrag erhält eine Punktzahl von 0 bis 100, sodass Lesende sehen, wie Dienste im Vergleich abschneiden und wo genau jeder Schwächen hat.

**Automatische Sicherheitstests.** Gehostete Dienste werden regelmäßig mit Qualys SSL Labs, Mozilla HTTP Observatory und Internet.nl getestet (einschließlich des Internet.nl-E-Mail-Tests für E-Mail-Anbieter). Die Ergebnisse werden im Repository gespeichert und auf jeder Seite verlinkt. Siehe [SCANS.md](SCANS.md).

**Rechtsordnung offen dargestellt.** Jede Seite zeigt, wo das Unternehmen ansässig ist, ob dieses Land zu den Five, Nine oder Fourteen Eyes gehört, ob die DSGVO gilt und ob der US CLOUD Act es erreicht. Die Rechtsordnung wird angezeigt, aber nicht bewertet, weil das, was ein Anbieter herausgeben kann, vor allem davon abhängt, was er speichert und wer die Schlüssel besitzt. Siehe [Rechtsordnungen](https://privacyratings.com/jurisdictions/) und [den CLOUD Act](https://privacyratings.com/cloud-act/).

**Alles geschieht auf GitHub.** Vorschläge und Korrekturen sind GitHub-Issues. Änderungen sind Pull-Requests. Diskussionen finden in GitHub Discussions statt. Es gibt kein separates Forum, keinen Chatserver und kein Kontosystem. Jede Änderung an jeder Bewertung hat einen öffentlichen Verlauf.

**Offene Daten.** Bewertungen sind einfache Markdown- und YAML-Dateien, und der vollständige Datensatz wird als JSON veröffentlicht. Die Inhalte stehen unter CC BY-SA 4.0, sodass alle sie weiterverwenden können.

**Empfehlungen sind als Empfehlungen gekennzeichnet.** Die Maintainer wählen pro Kategorie eine oder zwei Empfehlungen und begründen jede. Empfehlungen werden getrennt angezeigt und verändern nie Punktzahlen, sodass Lesende redaktionelle Einschätzung immer von gemessenen Ergebnissen unterscheiden können.

## Wer es pflegt

Privacy Ratings wird von [Forward Email](https://forwardemail.net) unterstützt, finanziert und gepflegt, einem datenschutzorientierten E-Mail-Dienst, der hier ebenfalls bewertet wird. Das sichert die langfristige Pflege des Projekts und ist zugleich ein Interessenkonflikt, der deshalb offen behandelt wird:

- Forward Email wird nach denselben Kriterien bewertet wie jeder andere E-Mail-Anbieter.
- Sein Eintrag trägt eine Offenlegung, ebenso jeder Eintrag mit einer anderen Verbindung zu den Maintainern.
- Änderungen, die die Punktzahl eines verbundenen Eintrags erhöhen, müssen Belege verlinken und vor dem Mergen für eine öffentliche Prüfung offen bleiben. Siehe [GOVERNANCE.md](GOVERNANCE.md).
- Es gibt keine Affiliate-Links, bezahlten Platzierungen oder Sponsorings. Die Validierung lehnt Links mit Empfehlungsparametern ab.

Wenn eine Bewertung falsch aussieht, ein Issue oder einen Pull-Request mit Belegen eröffnen. Das ist der ganze Prozess.

## Danksagung

Viele Einträge wurden zuerst bei [Awesome Privacy](https://github.com/lissy93/awesome-privacy) gelistet, veröffentlicht unter CC0. Die Daten zum Mailserver-Hosting stammen von [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
