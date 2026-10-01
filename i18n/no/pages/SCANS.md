<!-- source: 16559ce369ce -->
# Automatiske tester

Vertsbaserte tjenester (kategorier med `type: service`) testes automatisk når vurderingsfilen har et `domain`. E-postleverandører og videresendingstjenester med et `mail_domain` får også en e-posttest.

| Test | Hva den kontrollerer | Kriterium | Ja | Delvis | Nei |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-versjoner, chiffer, sertifikater og kjente TLS-svakheter | `tls` | A+ eller A | A- eller B | C eller lavere |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Sikkerhetshoder som CSP, HSTS og X-Frame-Options, og flagg på informasjonskapsler | `security_headers` | A+ eller A | A-, B+ eller B | B- eller lavere |
| [Internet.nl nettstedstest](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS og sikkerhetsinnstillinger | `web_standards` | 90 % eller mer | 70 % til 89 % | Under 70 % |
| [Internet.nl e-posttest](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS og DANE for e-postdomenet | `mail_standards` | 90 % eller mer | 70 % til 89 % | Under 70 % |
| [Hardenize](https://www.hardenize.com) | Sikkerhetskonfigurasjon for DNS, e-post og nett | Bare lenket | | | |

## E-poststandarder

E-postleverandører og videresendingstjenester med et `mail_domain` får også disse testene, som kjøres av [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Hva den kontrollerer | Kriterium | Ja |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-policy, MTA-STS-modus (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-validering, DANE TLSA på alle MX-verter (RFC 7672), samt BIMI og RFC 6186 SRV-poster til informasjon | `transport_security` | Alle seks håndhevet |
| IMAP `CAPABILITY` | Implisitt TLS på 993 (RFC 8314), IMAP4rev1 eller IMAP4rev2, IDLE. Faller tilbake til STARTTLS på 143 | `imap_standards` | Implisitt TLS, IMAP4rev1/rev2 og IDLE |
| POP3 `CAPA` | Implisitt TLS på 995, CAPA (RFC 2449), UIDL. Faller tilbake til STLS på 110 | `pop3_standards` | Implisitt TLS, CAPA og UIDL |
| SMTP `EHLO` | Innsending over implisitt TLS på 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Faller tilbake til STARTTLS på 587 | `smtp_standards` | Implisitt TLS og alle fire utvidelsene |

Servernavnene hentes fra `imap_host`, `pop3_host` og `smtp_host` i vurderingsfilen, eller fra leverandørens RFC 6186 SRV-poster. Sett en vert til `false` når leverandøren ikke tilbyr den protokollen. Funksjonene er det hver server oppgir før innlogging, og de fullstendige listene vises på hver vurderingsside.

## Sporere på nettstedet

Hver oppføring med et nettsted, også apper, får en sporertest som kjøres av [`scripts/trackers.js`](scripts/trackers.js). Den laster inn forsiden uten å kjøre JavaScript og sammenligner verten for hvert skript, hver ramme, hvert bilde og hvert stilark, samt innebygd kode, med en liste over kjente sporings- og analysetjenester.

| Funnet | Virkning på `no_trackers` |
| --- | --- |
| Tredjepartssporere som Google Analytics, Google Tag Manager, Meta Pixel, Hotjar eller HubSpot | Svaret blir «nei», uansett hva vurderingsfilen sier |
| Analyse uten informasjonskapsler (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Et «ja» blir «delvis» |
| Skrifter, innbygginger, feilrapportering, støttechat eller samtykkeverktøy | Vises på siden, gir ikke poeng |
| Ingenting | Svaret i vurderingsfilen brukes |

Når nettstedet er en side hos en kodevert eller appbutikk (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play og lignende), hoppes testen over, fordi den siden ikke drives av prosjektet.

Testen ser bare sporere som er skrevet inn i selve siden. Sporere som legges til senere av skript, og telemetri i apper, krever fortsatt bevis i vurderingsfilen, for eksempel en personvernerklæring eller en rapport fra [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS og ARC kan ikke ses utenfra uten å sende e-post, så de er kriterier som besvares med bevis i stedet for tester.

Automatiske kontroller som ikke har kjørt ennå, vises som «Ikke testet ennå» og holdes utenfor poengsummen, slik at en leverandør aldri trekkes for en test som ikke er gjennomført.

For SSL Labs brukes den svakeste karakteren blant alle IP-adressene til et domene.

Hardenize tilbyr ikke lenger et offentlig API, så hver side lenker til den offentlige rapporten i stedet for å gi poeng for den.

## Tidsplan

[Skanne-arbeidsflyten](.github/workflows/scan.yml) kjører hver dag og tester de 40 oppføringene med de eldste resultatene (Internet.nl følger egne grenser, se nedenfor), slik at alle tjenester testes jevnlig uten å overbelaste de gratis API-ene. Resultatene lagres i [`scans/`](scans/) som JSON, legges inn i kodelageret og publiseres med nettstedet. Hver side viser når testene sist ble kjørt.

En mislykket test beholder det forrige resultatet og registrerer feilen, så et midlertidig avbrudd endrer ikke en poengsum.

### Grenser for Internet.nl

Batch-API-et til Internet.nl brukes innenfor [bruksvilkårene](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Høyst 2 batchforespørsler i løpet av 7 dager. Nettstedstesten og e-posttesten er separate forespørsler, så én full runde bruker begge.
- Høyst 5000 domener per forespørsel. Når flere domener har testen, går de med manglende eller eldste resultater først, og resten venter på en senere forespørsel.
- Ingen forespørsler for enkeltdomener, så `--only` hopper over Internet.nl.

Hver forespørsel registreres i `scans/internetnl-requests.json`, som legges inn i kodelageret sammen med resultatene selv når en kjøring mislykkes. En kjøring som finner at ukegrensen er nådd, hopper over Internet.nl og beholder de eksisterende resultatene. Batcher tar flere timer, så statusen for forespørselen sjekkes hvert 5. minutt, og en forespørsel som fortsatt pågår når kjøringen avsluttes, hentes av en senere kjøring i stedet for å sendes på nytt. Internet.nl ignorerer `--limit`, og bare kjøringer på standardgrenen bruker påloggingsinformasjonen for Internet.nl, så alle kjøringer deler én registrering.

Dette nettstedet gjenbruker testresultater levert av testverktøyet [Internet.nl](https://internet.nl).

## Konfigurasjon

Alle innstillinger er valgfrie hemmeligheter i kodelageret (Settings › Secrets and variables › Actions):

| Hemmelighet | Formål |
| --- | --- |
| `SSLLABS_EMAIL` | E-postadresse registrert hos [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Uten den brukes v3-API-et. Registrering krever en e-postadresse fra en organisasjon. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Konto for [Internet.nl batch-API-et](https://internet.nl/faqs/batch-and-dashboard/). Uten disse lenker sidene til de offentlige Internet.nl-testene, og Internet.nl-kriteriene forblir «ukjent». |
| `INTERNETNL_API` | Grunn-URL for batch-API-et, for en [selvhostet Internet.nl](https://github.com/internetstandards/Internet.nl)-instans. Standard er `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory krever ingen konto. Lisensdata fra GitHub bruker arbeidsflytens innebygde token.

## Kjøre tester lokalt

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # bare DNS-kontroller for e-post
npm run test:unit                              # protokolltester mot lokale testservere
npm run build
```

## Hvilket domene som testes

Feltet `domain` bør være hovednettstedet eller nettappen der folk logger inn, for eksempel `mail.example.com` i stedet for et markedsføringsunderdomene på en annen vert. Leverandører kan foreslå et mer nøyaktig domene i en pull request.
