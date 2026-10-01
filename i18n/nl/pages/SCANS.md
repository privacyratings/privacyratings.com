<!-- source: eecc9b0ced33 -->
# Geautomatiseerde tests

Gehoste diensten (categorieën met `type: service`) worden automatisch getest wanneer hun beoordelingsbestand een `domain` heeft. E-mailproviders en doorstuurdiensten met een `mail_domain` krijgen ook een e-mailtest.

| Test | Wat wordt gecontroleerd | Criterium | Ja | Gedeeltelijk | Nee |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-versies, ciphers, certificaten en bekende TLS-zwakheden | `tls` | A+ of A | A- of B | C of lager |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Beveiligingsheaders zoals CSP, HSTS en X-Frame-Options, en cookievlaggen | `security_headers` | A+ of A | A-, B+ of B | B- of lager |
| [Internet.nl-websitetest](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS en beveiligingsopties | `web_standards` | 90% of meer | 70% tot 89% | Lager dan 70% |
| [Internet.nl-e-mailtest](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS en DANE voor het maildomein | `mail_standards` | 90% of meer | 70% tot 89% | Lager dan 70% |
| [Hardenize](https://www.hardenize.com) | Configuratie van DNS-, e-mail- en webbeveiliging | Alleen gelinkt | | | |

## E-mailstandaarden

E-mailproviders en doorstuurdiensten met een `mail_domain` krijgen ook deze tests, uitgevoerd door [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Wat wordt gecontroleerd | Criterium | Ja |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-beleid, MTA-STS-modus (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-validatie, DANE TLSA op elke MX-host (RFC 7672), plus BIMI en RFC 6186-SRV-records ter informatie | `transport_security` | Alle zes afgedwongen |
| IMAP `CAPABILITY` | Impliciete TLS op 993 (RFC 8314), IMAP4rev1 of IMAP4rev2, IDLE. Valt terug op STARTTLS op 143 | `imap_standards` | Impliciete TLS, IMAP4rev1/rev2 en IDLE |
| POP3 `CAPA` | Impliciete TLS op 995, CAPA (RFC 2449), UIDL. Valt terug op STLS op 110 | `pop3_standards` | Impliciete TLS, CAPA en UIDL |
| SMTP `EHLO` | Verzending via impliciete TLS op 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Valt terug op STARTTLS op 587 | `smtp_standards` | Impliciete TLS en alle vier de extensies |

Servernamen komen uit `imap_host`, `pop3_host` en `smtp_host` in het beoordelingsbestand, of uit de RFC 6186-SRV-records van de provider. Stel een host in op `false` wanneer de provider dat protocol niet aanbiedt. Mogelijkheden zijn wat elke server vóór het inloggen aankondigt, en de volledige lijsten worden op elke beoordelingspagina getoond.

## Websitetrackers

Elke vermelding met een website, ook apps, krijgt een trackertest die wordt uitgevoerd door [`scripts/trackers.js`](scripts/trackers.js). Die laadt de startpagina zonder JavaScript uit te voeren en vergelijkt de host van elk script, frame, elke afbeelding en elk stylesheet, plus inline code, met een lijst van bekende tracking- en analyticsdiensten.

| Gevonden | Effect op `no_trackers` |
| --- | --- |
| Trackers van derden zoals Google Analytics, Google Tag Manager, Meta Pixel, Hotjar of HubSpot | Het antwoord wordt "nee", wat er ook in het beoordelingsbestand staat |
| Cookieloze analytics (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Een "ja" wordt "gedeeltelijk" |
| Lettertypen, insluitingen, foutrapportage, supportchat of toestemmingstools | Op de pagina vermeld, niet gescoord |
| Niets | Het antwoord in het beoordelingsbestand wordt gebruikt |

Wanneer de website een pagina op een codehost of in een appwinkel is (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play en vergelijkbaar), wordt de test overgeslagen, omdat die pagina niet door het project zelf wordt beheerd.

De test ziet alleen trackers die in de pagina zelf staan. Trackers die later door scripts worden toegevoegd, en telemetrie in apps, hebben nog steeds bewijs in het beoordelingsbestand nodig, zoals een privacybeleid of een rapport van [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS en ARC zijn van buitenaf niet te zien zonder mail te versturen, dus het zijn criteria die met bewijs worden beantwoord in plaats van met tests.

Geautomatiseerde controles die nog niet zijn uitgevoerd, worden getoond als "Nog niet getest" en tellen niet mee in de score, zodat een provider nooit lager wordt beoordeeld voor een test die nog niet heeft plaatsgevonden.

Voor SSL Labs wordt het zwakste cijfer over alle IP-adressen van een domein gebruikt.

Hardenize biedt geen openbare API meer, dus elke pagina linkt naar het openbare rapport in plaats van het te scoren.

## Schema

De [Scan-workflow](.github/workflows/scan.yml) draait elke dag en test de 40 vermeldingen met de oudste resultaten (voor Internet.nl gelden eigen limieten, zie hieronder), zodat elke dienst regelmatig wordt getest zonder de gratis API's te overbelasten. De resultaten worden als JSON opgeslagen in [`scans/`](scans/), gecommit in de repository en met de site gepubliceerd. Elke pagina toont wanneer de tests voor het laatst zijn uitgevoerd.

Een mislukte test behoudt het vorige resultaat en registreert de fout, zodat een tijdelijke storing een score niet verandert.

### Limieten voor Internet.nl

De batch-API van Internet.nl wordt gebruikt binnen de [gebruiksvoorwaarden](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Maximaal 2 batchverzoeken per 7 dagen. De websitetest en de e-mailtest zijn aparte verzoeken, dus één volledige ronde gebruikt ze allebei.
- Maximaal 5000 domeinen per verzoek. Als meer domeinen de test hebben, gaan de domeinen met ontbrekende of de oudste resultaten voor en wacht de rest op een later verzoek.
- Geen verzoeken voor één domein, dus `--only` slaat Internet.nl over.

Elk verzoek wordt vastgelegd in `scans/internetnl-requests.json`, dat met de resultaten wordt gecommit, ook als een run mislukt. Een run die vaststelt dat de weeklimiet is bereikt, slaat Internet.nl over en behoudt de bestaande resultaten. Batches duren uren, dus de status van een verzoek wordt elke 5 minuten gecontroleerd, en een verzoek dat nog loopt wanneer de run eindigt, wordt door een latere run opgehaald in plaats van opnieuw te worden verstuurd. Internet.nl negeert `--limit`, en alleen runs op de standaardbranch gebruiken de inloggegevens voor Internet.nl, zodat alle runs één register delen.

Deze website hergebruikt testresultaten die worden geleverd door de testtool van [Internet.nl](https://internet.nl).

## Configuratie

Alle instellingen zijn optionele repository-secrets (Settings › Secrets and variables › Actions):

| Secret | Doel |
| --- | --- |
| `SSLLABS_EMAIL` | E-mailadres geregistreerd bij de [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Zonder dit wordt de v3-API gebruikt. Voor registratie is een e-mailadres van een organisatie nodig. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Account voor de [batch-API van Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Zonder deze gegevens linken pagina's naar de openbare Internet.nl-tests en blijven de Internet.nl-criteria "onbekend". |
| `INTERNETNL_API` | Basis-URL van de batch-API, voor een [zelf gehoste Internet.nl](https://github.com/internetstandards/Internet.nl)-instantie. Standaard `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory heeft geen account nodig. Licentiegegevens van GitHub gebruiken het ingebouwde token van de workflow.

## Tests lokaal uitvoeren

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Welk domein wordt getest

Het veld `domain` moet de hoofdwebsite of webapp zijn waar mensen inloggen, bijvoorbeeld `mail.example.com` in plaats van een marketingsubdomein op een andere host. Leveranciers kunnen in een pull request een nauwkeuriger domein voorstellen.
