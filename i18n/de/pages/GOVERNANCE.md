<!-- source: e696176d1bdb -->
# Governance

Wie Entscheidungen getroffen, Empfehlungen ausgewählt und Interessenkonflikte behandelt werden.

## Maintainer

Maintainer prüfen und mergen Pull-Requests, sichten Issues und moderieren die Discussions. Die Maintainer sind in [`.github/CODEOWNERS`](.github/CODEOWNERS) aufgeführt. Jede Person kann Maintainer werden, nachdem sie genaue, gut belegte Beiträge geleistet hat.

## Wie Änderungen angenommen werden

1. Alle Änderungen laufen über einen Pull-Request. Niemand, auch kein Maintainer, pusht Bewertungsänderungen direkt auf `main`.
2. Jeder Pull-Request muss `npm test` bestehen (Validierung und Build).
3. Mindestens ein Maintainer genehmigt den Pull-Request.
4. Antworten brauchen Belege aus einer Primärquelle: offizielle Dokumentation, Quellcode, Lizenzdateien, veröffentlichte Auditberichte oder reproduzierbare Tests. Rezensionen, Blogbeiträge und Werbeaussagen ohne Details sind keine Belege.
5. Widersprechen sich Quellen, gilt die neueste Primärquelle. Bleibt es unklar, lautet die Antwort „unknown“.

## Änderungen an Kriterien

Kriterien bestimmen jede Punktzahl, daher brauchen Änderungen an `criteria/` mehr Sorgfalt:

- Zuerst ein „Criteria change“-Issue oder eine Discussion eröffnen.
- Der Pull-Request bleibt mindestens 7 Tage für öffentliche Kommentare offen.
- Er braucht die Genehmigung von zwei Maintainern.
- Kriterien-IDs werden nach der Veröffentlichung nie umbenannt. Ein Kriterium wird ausgemustert, indem es in einem Pull-Request mit Begründung entfernt wird.

## Empfehlungen

- Jede Kategorie kann bis zu zwei Empfehlungen haben.
- Eine Empfehlung braucht einen `pick_reason`, der die Wahl in einfachen Worten erklärt.
- Jede Kategorie hat höchstens zwei Empfehlungen, geordnet mit `pick: 1` und `pick: 2`.
- Empfehlungen sind redaktionell. Sie werden getrennt angezeigt und verändern nie Punktzahlen.
- Jede Person kann eine Empfehlung in der Discussions-Kategorie „Picks“ anfechten. Einwände werden öffentlich beantwortet.

## Interessenkonflikte

Privacy Ratings wird vom Team hinter Forward Email gepflegt. Einträge, die mit den Maintainern verbunden sind, sind „verbundene Einträge“. Derzeit betrifft das Forward Email.

Regeln für verbundene Einträge:

- Jeder verbundene Eintrag trägt eine `disclosure`, die oben auf seiner Seite angezeigt wird.
- Ein Pull-Request, der die Punktzahl eines verbundenen Eintrags erhöht oder ihn zur Empfehlung macht, muss für jede geänderte Antwort Belege verlinken und vor dem Mergen mindestens 7 Tage offen bleiben.
- Ein Pull-Request, der die Punktzahl eines verbundenen Eintrags mit gültigen Belegen senkt, wird wie jeder andere gemergt.
- Maintainer müssen jedem Eintrag eine Offenlegung hinzufügen, mit dem sie oder ihr Arbeitgeber finanziell oder persönlich verbunden sind.

## Geld

- Keine Affiliate-Links. Die Validierung lehnt URLs mit Empfehlungs- oder Tracking-Parametern ab.
- Keine bezahlten Platzierungen, gesponserten Einträge oder bezahlten Rezensionen.
- Hersteller können wie alle anderen Korrekturen mit Belegen einreichen und müssen angeben, dass sie der Hersteller sind.

## Moderation

Issues, Pull-Requests und Discussions folgen dem [Verhaltenskodex](CODE_OF_CONDUCT.md). Maintainer können Kommentare sperren oder ausblenden, die beleidigend, themenfremd oder werbend sind.
