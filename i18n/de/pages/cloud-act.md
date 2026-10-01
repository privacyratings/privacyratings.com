<!-- source: 37558129142b -->
# Was ist der CLOUD Act?

Der **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** ist ein US-Gesetz, das eine Frage beantwortet: Können US-Behörden Daten von einem US-Unternehmen erhalten, wenn diese Daten in einem anderen Land gespeichert sind? Die Antwort lautet Ja.

## Was er bewirkt

1. **Der Speicherort spielt keine Rolle.** Ein Anbieter, der der US-Rechtshoheit unterliegt, muss Daten in seinem „Besitz, Gewahrsam oder unter seiner Kontrolle“ auf ein gültiges US-Rechtsverfahren hin herausgeben, unabhängig davon, wo auf der Welt die Daten gespeichert sind. [Quelle: US-Justizministerium](https://www.justice.gov/criminal/cloud-act-resources)
2. **Abkommen mit anderen Ländern.** Die USA können Abkommen über Datenzugriff schließen, mit denen vertrauenswürdige ausländische Regierungen bei schweren Straftaten Daten direkt bei US-Anbietern anfordern können, ohne das langsamere Verfahren über Rechtshilfeabkommen (MLAT). [Quelle: US-Justizministerium](https://www.justice.gov/criminal/cloud-act-resources)
3. **Eine Möglichkeit zum Widerspruch.** Anbieter können ein Gericht bitten, eine Anfrage aufzuheben oder zu ändern, wenn sie mit den Gesetzen eines anderen Landes kollidiert, mit dem ein Abkommen besteht.

Abkommen sind mit dem **Vereinigten Königreich** und **Australien** in Kraft. Verhandlungen wurden mit **Kanada** und der **Europäischen Union** angekündigt. [Quelle: US-Justizministerium](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Was er nicht bewirkt

- Er schafft keine neuen Überwachungsbefugnisse und hebt die Notwendigkeit eines Durchsuchungsbeschlusses nicht auf. US-Behörden brauchen weiterhin ein gültiges Rechtsverfahren, und für Kommunikationsinhalte ist in der Regel ein Durchsuchungsbeschluss nötig.
- Er zwingt einen Anbieter nicht, Daten zu entschlüsseln, die er nicht entschlüsseln kann. Er betrifft die Daten, die der Anbieter hat. Daten, die mit Schlüsseln verschlüsselt sind, die nur der Nutzer besitzt, bleiben verschlüsselt.
- Er gilt nicht nur für Rechenzentren in den USA. Ein europäischer Serverstandort hilft nicht, wenn das Unternehmen, das ihn betreibt, der US-Rechtshoheit unterliegt.

## Wen er betrifft

Jedes Unternehmen, das der US-Rechtshoheit unterliegt: Google, Microsoft, Apple, Amazon, Cloudflare und kleinere US-Dienste, darunter Forward Email. Siehe [alle bewerteten Dienste mit Sitz in den Vereinigten Staaten](/jurisdictions/united-states/).

Er kann auch **Nicht-US-Dienste erreichen, die Daten bei US-Cloud-Anbietern speichern**, da der Cloud-Anbieter selbst eine Anfrage erhalten kann. Deshalb lautet die sinnvolle Frage nicht nur „Wo sitzt das Unternehmen?“, sondern auch „Welche Daten gibt es, und wer besitzt die Schlüssel?“

## Warum Verschlüsselung und Datensparsamkeit wichtiger sind als der Standort

Gesetze ändern sich, und jedes Land hat einen Weg, Daten zu erzwingen. Am wichtigsten ist, was ein Anbieter herausgeben **kann**:

| Situation | Was eine Anfrage erreichen kann |
| --- | --- |
| E-Mails im Klartext gespeichert | Alles im Postfach |
| E-Mails im Ruhezustand mit Schlüsseln des Anbieters verschlüsselt | Alles, weil der Anbieter sie entschlüsseln kann |
| E-Mails mit Schlüsseln verschlüsselt, die aus dem Passwort des Nutzers abgeleitet sind | Kontodaten und Verbindungsdaten, nicht die Nachrichteninhalte |
| Keine Protokolle gespeichert | Nichts über Aktivitäten |

Echte Beispiele:

- **Proton (Schweiz, außerhalb aller Eyes-Vereinbarungen)** ist in seinem jüngsten Jahresbericht 8.313 von 9.301 Schweizer rechtlichen Anordnungen nachgekommen und hat dabei vorhandene Kontoinformationen herausgegeben. [Quelle: Transparenzbericht von Proton](https://proton.me/legal/transparency)
- **Proton VPN (dasselbe Unternehmen, dasselbe Land)** ist keiner nachgekommen, weil es keine Protokolle speichert. [Quelle: Transparenzbericht von Proton](https://proton.me/legal/transparency)
- **Tuta (Deutschland)** kann von einem deutschen Richter verpflichtet werden, Postfächer herauszugeben oder in Echtzeit zu überwachen. Ende-zu-Ende-verschlüsselte E-Mails bleiben verschlüsselt. [Quelle: Transparenzbericht von Tuta](https://tuta.com/blog/transparency-report)

Dasselbe Unternehmen im selben Land kommt zu sehr unterschiedlichen Ergebnissen, je nachdem, welche Daten vorhanden sind. Deshalb zeigt Privacy Ratings die Rechtsordnung auf jeder Seite, bewertet aber, was Anbieter tatsächlich tun. Siehe [wie mit der Rechtsordnung umgegangen wird](/jurisdictions/).

## Wie der CLOUD Act für Forward Email gilt

Forward Email hat seinen Sitz in den Vereinigten Staaten und unterliegt dem CLOUD Act. Sein [technisches Whitepaper](https://forwardemail.net/technical-whitepaper.pdf) beschreibt, wie sein Design begrenzt, was eine Anfrage erreichen könnte:

- **Verschlüsselte Postfächer.** Jedes Postfach ist eine einzeln verschlüsselte SQLite-Datei. Laut Whitepaper kann Forward Email nicht auf Nachrichteninhalte zugreifen.
- **Keine Protokollierung von E-Mail-Inhalten oder Metadaten auf Festplatte.** Forward Email speichert keine Aufzeichnungen darüber, wem Nutzer schreiben.
- **Begrenzte Daten.** Offengelegt werden könnten grundlegende Kontoinformationen (etwa die E-Mail-Adresse des Kontos, das Registrierungsdatum und Zahlungsdaten) sowie begrenzte IP-Adress-Protokolle, die zur Sicherheit und Missbrauchsabwehr vorübergehend gespeichert werden können.
- **Nur gültige Rechtsverfahren.** Anfragen brauchen eine Vorladung (Subpoena), einen Gerichtsbeschluss oder einen Durchsuchungsbeschluss. Anfragen von außerhalb der USA müssen über ein US-Gericht, ein Rechtshilfeabkommen oder ein CLOUD-Act-Abkommen kommen, das die US-Rechtsanforderungen erfüllt.
- **Benachrichtigung und Anfechtung.** Nutzer werden benachrichtigt, wenn das Gesetz es erlaubt, und zu weit gefasste Anfragen werden angefochten.

Forward Email pflegt Privacy Ratings. Seine Bewertung folgt denselben Kriterien wie die jedes anderen Anbieters. Siehe [die Bewertung von Forward Email](/email-providers/forward-email/) und [die Governance-Regeln](/governance/).

## Weiterführende Literatur

- [US-Justizministerium: Ressourcen zum CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Grenzüberschreitender Datenaustausch nach dem CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: Überwachung nach Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
