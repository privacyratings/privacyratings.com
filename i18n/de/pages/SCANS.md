<!-- source: 16559ce369ce -->
# Automatische Tests

Gehostete Dienste (Kategorien mit `type: service`) werden automatisch getestet, wenn ihre Bewertungsdatei eine `domain` enthält. E-Mail-Anbieter und Weiterleitungsdienste mit einer `mail_domain` erhalten zusätzlich einen E-Mail-Test.

| Test | Was geprüft wird | Kriterium | Ja | Teilweise | Nein |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-Versionen, Cipher, Zertifikate und bekannte TLS-Schwachstellen | `tls` | A+ oder A | A- oder B | C oder schlechter |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Sicherheits-Header wie CSP, HSTS und X-Frame-Options sowie Cookie-Flags | `security_headers` | A+ oder A | A-, B+ oder B | B- oder schlechter |
| [Internet.nl-Website-Test](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS und Sicherheitsoptionen | `web_standards` | 90 % oder mehr | 70 % bis 89 % | Unter 70 % |
| [Internet.nl-E-Mail-Test](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS und DANE für die Mail-Domain | `mail_standards` | 90 % oder mehr | 70 % bis 89 % | Unter 70 % |
| [Hardenize](https://www.hardenize.com) | DNS-, E-Mail- und Web-Sicherheitskonfiguration | Nur verlinkt | | | |

## E-Mail-Standards

E-Mail-Anbieter und Weiterleitungsdienste mit einer `mail_domain` erhalten außerdem diese Tests, ausgeführt von [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Was geprüft wird | Kriterium | Ja |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-Richtlinie, MTA-STS-Modus (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-Validierung, DANE TLSA auf jedem MX-Host (RFC 7672), dazu BIMI und SRV-Einträge nach RFC 6186 zur Information | `transport_security` | Alle sechs durchgesetzt |
| IMAP `CAPABILITY` | Implizites TLS auf 993 (RFC 8314), IMAP4rev1 oder IMAP4rev2, IDLE. Rückfall auf STARTTLS auf 143 | `imap_standards` | Implizites TLS, IMAP4rev1/rev2 und IDLE |
| POP3 `CAPA` | Implizites TLS auf 995, CAPA (RFC 2449), UIDL. Rückfall auf STLS auf 110 | `pop3_standards` | Implizites TLS, CAPA und UIDL |
| SMTP `EHLO` | Einlieferung über implizites TLS auf 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Rückfall auf STARTTLS auf 587 | `smtp_standards` | Implizites TLS und alle vier Erweiterungen |

Servernamen stammen aus `imap_host`, `pop3_host` und `smtp_host` in der Bewertungsdatei oder aus den SRV-Einträgen des Anbieters nach RFC 6186. Einen Host auf `false` setzen, wenn der Anbieter dieses Protokoll nicht anbietet. Die Fähigkeiten sind das, was jeder Server vor der Anmeldung ankündigt; die vollständigen Listen werden auf jeder Bewertungsseite angezeigt.

## Website-Tracker

Jeder Eintrag mit einer Website, auch Apps, erhält einen Tracker-Test, ausgeführt von [`scripts/trackers.js`](scripts/trackers.js). Er lädt die Startseite ohne JavaScript auszuführen und vergleicht jeden Host von Skripten, Frames, Bildern und Stylesheets sowie Inline-Code mit einer Liste bekannter Tracking- und Analysedienste.

| Gefunden | Auswirkung auf `no_trackers` |
| --- | --- |
| Drittanbieter-Tracker wie Google Analytics, Google Tag Manager, Meta Pixel, Hotjar oder HubSpot | Die Antwort wird „no“, unabhängig davon, was in der Bewertungsdatei steht |
| Cookielose Analyse (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Ein „yes“ wird zu „partial“ |
| Schriftarten, Einbettungen, Fehlerberichte, Support-Chat oder Einwilligungswerkzeuge | Auf der Seite aufgeführt, nicht bewertet |
| Nichts | Die Antwort in der Bewertungsdatei wird verwendet |

Ist die Website eine Seite eines Code-Hosts oder App-Stores (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play und ähnliche), wird der Test übersprungen, weil diese Seite nicht vom Projekt betrieben wird.

Der Test sieht nur Tracker, die direkt in die Seite geschrieben sind. Tracker, die später durch Skripte hinzugefügt werden, und Telemetrie in Apps brauchen weiterhin Belege in der Bewertungsdatei, etwa eine Datenschutzerklärung oder einen Bericht von [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS und ARC lassen sich von außen nicht erkennen, ohne E-Mails zu senden, daher sind sie Kriterien, die mit Belegen statt durch Tests beantwortet werden.

Automatische Prüfungen, die noch nicht gelaufen sind, erscheinen als „Noch nicht getestet“ und werden bei der Punktzahl nicht berücksichtigt, sodass ein Anbieter nie für einen Test abgewertet wird, der noch nicht stattgefunden hat.

Bei SSL Labs wird die schwächste Note über alle IP-Adressen einer Domain verwendet.

Hardenize bietet keine öffentliche API mehr an, daher verlinkt jede Seite auf den öffentlichen Bericht, statt ihn zu bewerten.

## Zeitplan

Der [Scan-Workflow](.github/workflows/scan.yml) läuft täglich und testet die 40 Einträge mit den ältesten Ergebnissen (für Internet.nl gelten eigene Grenzen, siehe unten), sodass jeder Dienst regelmäßig getestet wird, ohne die kostenlosen APIs zu überlasten. Die Ergebnisse werden als JSON in [`scans/`](scans/) gespeichert, in das Repository committet und mit der Website veröffentlicht. Jede Seite zeigt, wann ihre Tests zuletzt liefen.

Ein fehlgeschlagener Test behält das vorherige Ergebnis und protokolliert den Fehler, sodass ein vorübergehender Ausfall keine Punktzahl verändert.

### Grenzen für Internet.nl

Die Batch-API von Internet.nl wird im Rahmen ihrer [Nutzungsbedingungen](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) verwendet:

- Höchstens 2 Batch-Anfragen innerhalb von 7 Tagen. Der Website-Test und der E-Mail-Test sind getrennte Anfragen, eine vollständige Runde verbraucht also beide.
- Höchstens 5000 Domains pro Anfrage. Wenn mehr Domains den Test haben, kommen die mit fehlenden oder ältesten Ergebnissen zuerst, der Rest wartet auf eine spätere Anfrage.
- Keine Anfragen für einzelne Domains, daher überspringt `--only` Internet.nl.

Jede Anfrage wird in `scans/internetnl-requests.json` festgehalten, das auch bei einem fehlgeschlagenen Lauf mit den Ergebnissen committet wird. Ein Lauf, der die wöchentliche Grenze erreicht vorfindet, überspringt Internet.nl und behält die vorhandenen Ergebnisse. Batches dauern Stunden, daher wird der Status einer Anfrage alle 5 Minuten geprüft, und eine Anfrage, die am Ende eines Laufs noch läuft, wird von einem späteren Lauf abgeholt, statt erneut gesendet zu werden. Internet.nl ignoriert `--limit`, und nur Läufe auf dem Standard-Branch verwenden die Zugangsdaten für Internet.nl, sodass alle Läufe einen gemeinsamen Datensatz nutzen.

Diese Website verwendet Testergebnisse des Testwerkzeugs [Internet.nl](https://internet.nl) weiter.

## Konfiguration

Alle Einstellungen sind optionale Repository-Secrets (Settings › Secrets and variables › Actions):

| Secret | Zweck |
| --- | --- |
| `SSLLABS_EMAIL` | Bei der [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md) registrierte E-Mail-Adresse. Ohne sie wird die v3-API verwendet. Die Registrierung erfordert eine E-Mail-Adresse einer Organisation. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Konto für die [Internet.nl-Batch-API](https://internet.nl/faqs/batch-and-dashboard/). Ohne sie verlinken die Seiten auf die öffentlichen Internet.nl-Tests, und die Internet.nl-Kriterien bleiben „unknown“. |
| `INTERNETNL_API` | Basis-URL der Batch-API, für eine [selbst gehostete Internet.nl](https://github.com/internetstandards/Internet.nl)-Instanz. Standard ist `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory benötigt kein Konto. GitHub-Lizenzdaten nutzen das eingebaute Token des Workflows.

## Tests lokal ausführen

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Welche Domain getestet wird

Das Feld `domain` sollte die Hauptwebsite oder Web-App sein, bei der sich Menschen anmelden, zum Beispiel `mail.example.com` statt einer Marketing-Subdomain auf einem anderen Host. Hersteller können in einem Pull-Request eine genauere Domain vorschlagen.
