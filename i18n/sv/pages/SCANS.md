<!-- source: 16559ce369ce -->
# Automatiska tester

Hostade tjänster (kategorier med `type: service`) testas automatiskt när deras bedömningsfil har en `domain`. E-postleverantörer och vidarebefordringstjänster med en `mail_domain` får också ett e-posttest.

| Test | Vad det kontrollerar | Kriterium | Ja | Delvis | Nej |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-versioner, chiffer, certifikat och kända TLS-brister | `tls` | A+ eller A | A- eller B | C eller lägre |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Säkerhetshuvuden som CSP, HSTS och X-Frame-Options samt cookieflaggor | `security_headers` | A+ eller A | A-, B+ eller B | B- eller lägre |
| [Internet.nl webbplatstest](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS och säkerhetsalternativ | `web_standards` | 90 % eller mer | 70 % till 89 % | Under 70 % |
| [Internet.nl e-posttest](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS och DANE för e-postdomänen | `mail_standards` | 90 % eller mer | 70 % till 89 % | Under 70 % |
| [Hardenize](https://www.hardenize.com) | Säkerhetskonfiguration för DNS, e-post och webb | Endast länkad | | | |

## E-poststandarder

E-postleverantörer och vidarebefordringstjänster med en `mail_domain` får också dessa tester, som körs av [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Vad det kontrollerar | Kriterium | Ja |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-policy, MTA-STS-läge (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-validering, DANE TLSA på varje MX-värd (RFC 7672), samt BIMI och RFC 6186 SRV-poster i informationssyfte | `transport_security` | Alla sex tillämpas |
| IMAP `CAPABILITY` | Implicit TLS på 993 (RFC 8314), IMAP4rev1 eller IMAP4rev2, IDLE. Faller tillbaka på STARTTLS på 143 | `imap_standards` | Implicit TLS, IMAP4rev1/rev2 och IDLE |
| POP3 `CAPA` | Implicit TLS på 995, CAPA (RFC 2449), UIDL. Faller tillbaka på STLS på 110 | `pop3_standards` | Implicit TLS, CAPA och UIDL |
| SMTP `EHLO` | Inlämning över implicit TLS på 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Faller tillbaka på STARTTLS på 587 | `smtp_standards` | Implicit TLS och alla fyra tilläggen |

Servernamnen hämtas från `imap_host`, `pop3_host` och `smtp_host` i bedömningsfilen, eller från leverantörens RFC 6186 SRV-poster. Sätt en värd till `false` när leverantören inte erbjuder protokollet. Funktionerna är det som varje server annonserar före inloggning, och de fullständiga listorna visas på varje bedömningssida.

## Spårare på webbplatsen

Varje post med en webbplats, även appar, får ett spårartest som körs av [`scripts/trackers.js`](scripts/trackers.js). Det laddar startsidan utan att köra JavaScript och jämför värden för varje skript, ram, bild och stilmall, samt inbäddad kod, med en lista över kända spårnings- och analystjänster.

| Hittat | Effekt på `no_trackers` |
| --- | --- |
| Tredjepartsspårare som Google Analytics, Google Tag Manager, Meta Pixel, Hotjar eller HubSpot | Svaret blir ”nej”, oavsett vad bedömningsfilen säger |
| Cookiefri analys (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Ett ”ja” blir ”delvis” |
| Typsnitt, inbäddningar, felrapportering, supportchatt eller samtyckesverktyg | Listas på sidan, poängsätts inte |
| Ingenting | Svaret i bedömningsfilen används |

När webbplatsen är en sida på en kodvärd eller i en appbutik (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play och liknande) hoppas testet över, eftersom den sidan inte drivs av projektet.

Testet ser bara spårare som finns i själva sidan. Spårare som läggs till senare av skript, och telemetri i appar, kräver fortfarande belägg i bedömningsfilen, till exempel en integritetspolicy eller en rapport från [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS och ARC kan inte ses utifrån utan att skicka e-post, så de är kriterier som besvaras med belägg i stället för tester.

Automatiska kontroller som inte har körts ännu visas som ”Inte testad ännu” och räknas inte med i poängen, så att en leverantör aldrig får poängavdrag för ett test som inte har genomförts.

För SSL Labs används det svagaste betyget bland alla en domäns IP-adresser.

Hardenize erbjuder inte längre något offentligt API, så varje sida länkar till den offentliga rapporten i stället för att poängsätta den.

## Schema

[Scan-arbetsflödet](.github/workflows/scan.yml) körs varje dag och testar de 40 poster som har de äldsta resultaten (Internet.nl följer egna gränser, se nedan), så att varje tjänst testas regelbundet utan att de kostnadsfria API:erna överbelastas. Resultaten sparas i [`scans/`](scans/) som JSON, checkas in i repositoriet och publiceras med webbplatsen. Varje sida visar när dess tester senast kördes.

Ett misslyckat test behåller det tidigare resultatet och registrerar felet, så att ett tillfälligt avbrott inte ändrar poängen.

### Gränser för Internet.nl

Internet.nl:s batch-API används inom dess [användarvillkor](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Högst 2 batchförfrågningar under en period på 7 dagar. Webbplatstestet och e-posttestet är separata förfrågningar, så en fullständig omgång använder båda.
- Högst 5000 domäner per förfrågan. När fler domäner har testet går de med saknade eller äldsta resultat först, och resten väntar på en senare förfrågan.
- Inga förfrågningar för enskilda domäner, så `--only` hoppar över Internet.nl.

Varje förfrågan registreras i `scans/internetnl-requests.json`, som checkas in med resultaten även när en körning misslyckas. En körning som upptäcker att veckogränsen är nådd hoppar över Internet.nl och behåller de befintliga resultaten. Batcher tar flera timmar, så förfrågans status kontrolleras var 5:e minut, och en förfrågan som fortfarande pågår när körningen slutar hämtas av en senare körning i stället för att skickas igen. Internet.nl ignorerar `--limit`, och endast körningar på standardgrenen använder inloggningsuppgifterna för Internet.nl, så alla körningar delar en och samma logg.

Den här webbplatsen återanvänder testresultat från testverktyget [Internet.nl](https://internet.nl).

## Konfiguration

Alla inställningar är valfria repository-hemligheter (Settings › Secrets and variables › Actions):

| Hemlighet | Syfte |
| --- | --- |
| `SSLLABS_EMAIL` | E-postadress registrerad hos [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Utan den används v3-API:t. Registreringen kräver en e-postadress hos en organisation. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Konto för [Internet.nl batch-API](https://internet.nl/faqs/batch-and-dashboard/). Utan dem länkar sidorna till de offentliga Internet.nl-testerna och Internet.nl-kriterierna förblir ”okänt”. |
| `INTERNETNL_API` | Bas-URL för batch-API:t, för en [självhostad Internet.nl](https://github.com/internetstandards/Internet.nl)-instans. Standardvärdet är `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory kräver inget konto. Licensdata från GitHub använder arbetsflödets inbyggda token.

## Köra tester lokalt

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Vilken domän som testas

Fältet `domain` ska vara den huvudsakliga webbplatsen eller webbappen där människor loggar in, till exempel `mail.example.com` i stället för en marknadsföringssubdomän på en annan värd. Leverantörer kan föreslå en mer korrekt domän i en pull request.
