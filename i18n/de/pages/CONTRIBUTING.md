<!-- source: 38b6fc4b567c -->
# Mitwirken

Alles geschieht auf GitHub. Es gibt kein anderes Forum, keinen Chat und kein Konto, für das man sich registrieren muss.

| Vorhaben | Weg |
| --- | --- |
| Eine App oder einen Dienst vorschlagen | [Ein „Suggest“-Issue eröffnen](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Eine falsche Antwort oder einen defekten Link melden | [Ein „Correction“-Issue eröffnen](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) oder auf einer beliebigen Bewertungsseite „Korrektur melden“ verwenden |
| Kriterien vorschlagen oder ändern | [Ein „Criteria change“-Issue eröffnen](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Selbst korrigieren | Auf einer beliebigen Bewertungsseite „Auf GitHub bearbeiten“ verwenden oder einen Pull-Request eröffnen |
| Eine Frage stellen oder über eine Empfehlung diskutieren | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Eine Bewertung bearbeiten

Jede App und jeder Dienst ist eine Markdown-Datei in `ratings/<category>/<name>.md`. Der Anfang der Datei ist YAML. Alles darunter sind optionale Markdown-Anmerkungen, die auf der Seite angezeigt werden.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # optional
platforms: [web, android, ios]                  # optional
jurisdiction: CH                                # optional, country code from jurisdictions.yml
mainstream: true                                # optional, adds an "alternatives to" page
aliases: [Example Office, Example Docs]         # optional, other names people search for
also_in: [macos-hardening]                      # optional, also list it in another category's table
alternatives_page: true                         # optional, adds an "alternatives to" page without mainstream
domain: mail.example.com                        # services only, used for automated tests
mail_domain: example.com                        # email categories only
imap_host: imap.example.com                     # email providers only; false if not offered
pop3_host: pop3.example.com                     # optional, found from SRV records when missing
smtp_host: smtp.example.com                     # optional, found from SRV records when missing
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/example/example/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_ads:
    answer: yes
    evidence: https://example.com/pricing
---

Optional notes in Markdown.
```

Regeln (automatisch geprüft durch `npm test`):

- `answer` ist eines von `yes`, `partial`, `no`, `unknown` oder `n/a`.
- `yes` und `partial` brauchen einen `evidence`-Link. `no` braucht eine `note` oder `evidence`.
- Belege müssen Primärquellen sein: offizielle Dokumentation, Quellcode, eine Lizenzdatei, ein Auditbericht oder ein reproduzierbarer Test. Keine Rezensionen, Forenbeiträge oder Marketingseiten ohne Details.
- Links müssen `https://` verwenden und dürfen keine Empfehlungs- oder Tracking-Parameter enthalten.
- Automatische Kriterien (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) werden durch Tests ausgefüllt. Nicht von Hand setzen.
- `no_trackers` wird außerdem durch den [Tracker-Test](SCANS.md#website-trackers) geprüft. Lädt die Startseite einen Drittanbieter-Tracker, wird die Antwort „no“, unabhängig davon, was in der Datei steht.
- Kriterien ohne Belege weglassen. Sie zählen als `unknown`.
- `jurisdiction` ist der Ort, an dem das Unternehmen rechtlich ansässig ist (nicht der Standort seiner Server). Fehlt ein Land, in [`jurisdictions.yml`](jurisdictions.yml) ergänzen. Jede Anmerkung dort braucht eine Quelle.
- Nur Maintainer fügen `pick`, `pick_reason` und `disclosure` hinzu. Mit `pick: 1` und `pick: 2` werden zwei Empfehlungen geordnet. Siehe [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` bewahrt den Namen, den ein Eintrag in Awesome Privacy hatte, nachdem er umbenannt wurde, damit der monatliche Import ihn nicht erneut hinzufügt. Um einen Awesome-Privacy-Eintrag dauerhaft auszuschließen, ihn mit Begründung in [`import-skip.yml`](import-skip.yml) eintragen.

Die Kriterien für jede Kategorie und die Bedeutung jeder Antwort stehen in [`criteria/`](criteria/) und auf der [Kriterienseite](https://privacyratings.com/criteria/).

## Eine App oder einen Dienst hinzufügen

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Dies erstellt eine Datei, die jedes Kriterium als `unknown` auflistet. Ausfüllen, was sich belegen lässt, den Rest löschen und dann `npm test` ausführen.

## Schreibstil

- Klare, neutrale Sprache. Beschreiben, was etwas tut, nicht wie großartig es ist.
- Kurze Sätze. Beschreibungen bleiben unter 300 Zeichen.
- Keine erste Person, keine Datumsangaben im Fließtext, keine Werbeaussagen.
- Dinge so benennen, wie der Hersteller es tut.

## Die Website lokal ausführen

Erfordert Node.js 18 oder neuer.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Eine Seite hinzufügen

Eine Markdown-Datei mit `title` und `description` in [`pages/`](pages/) ablegen. Sie wird unter `/<file-name>/` veröffentlicht, mit einer Markdown-Kopie, strukturierten Daten und einem Sitemap-Eintrag.

## Eine Kategorie oder ein Kriterium hinzufügen

1. Die Kategorie in [`categories.yml`](categories.yml) unter der passenden Gruppe hinzufügen.
2. Optional `criteria/<category-id>.yml` mit kategoriespezifischen Kriterien hinzufügen. Das Format aus einer bestehenden Datei übernehmen.
3. `ratings/<category-id>/` anlegen und Einträge hinzufügen.
4. Änderungen an Kriterien folgen den Prüfregeln in [GOVERNANCE.md](GOVERNANCE.md).

## Übersetzungen

Die Website erscheint in 25 Sprachen. Englisch ist die Quelle, jede andere Sprache liegt in `i18n/<code>/`:

| Datei | Enthält |
| --- | --- |
| `ui.json` | Oberflächentexte: Überschriften, Schaltflächen und Sätze mit `{placeholders}` |
| `data.json` | Kategorienamen, Kriterien, Ratgeber und Länderhinweise |
| `entries.json` | Bewertungsbeschreibungen, Begründungen für Empfehlungen und Offenlegungen |
| `pages/*.md` | Ganze Dokumente wie dieses |

Jede JSON-Datei ordnet dem englischen Text seine Übersetzung zu. Ändert sich der englische Text, passt die alte Übersetzung nicht mehr, und der englische Text erscheint, bis jemand den neuen Text übersetzt. Veraltetes wird nie angezeigt.

1. `npm run build` ausführen. Der Befehl schreibt die aktuellen englischen Listen nach `i18n/source/`.
2. `npm run i18n:check` ausführen, um zu sehen, was in jeder Sprache fehlt, oder `node scripts/i18n-check.js de ui` für die Details einer Sprache und Datei.
3. Übersetzungen hinzufügen oder korrigieren und dabei jeden `{placeholder}` genau so belassen, wie er ist.
4. Für ein Dokument den englischen Text aus `i18n/source/pages/` kopieren, die erste Zeile (`<!-- source: … -->`, die die Übersetzung an diese Version des englischen Textes bindet) beibehalten und den Rest übersetzen.

Hinweise und Belege zu einzelnen Antworten bleiben auf Englisch. Vergleiche und die meisten einzelnen Bewertungen gibt es nur auf Englisch; Empfehlungen, Kategorien, Ratgeber, Alternativen, Open-Source-Listen, Rechtsräume und Dokumente werden übersetzt. Das Sprachmenü und die automatische Weiterleitung nutzen die `hreflang`-Links auf jeder Seite.

## Checkliste für Pull-Requests

- [ ] `npm test` läuft erfolgreich durch.
- [ ] Jede geänderte Antwort verlinkt auf Belege.
- [ ] Wer für einen geänderten Dienst arbeitet oder mit ihm verbunden ist, hat dies im Pull-Request angegeben.
