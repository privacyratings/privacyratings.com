<!-- source: 16559ce369ce -->
# Test automatici

I servizi ospitati (categorie con `type: service`) vengono testati automaticamente quando il loro file di valutazione ha un `domain`. I provider email e i servizi di inoltro con un `mail_domain` ricevono anche un test email.

| Test | Cosa verifica | Criterio | Sì | Parziale | No |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Versioni TLS, cifrari, certificati e vulnerabilità TLS note | `tls` | A+ o A | A- o B | C o inferiore |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Header di sicurezza come CSP, HSTS e X-Frame-Options, e flag dei cookie | `security_headers` | A+ o A | A-, B+ o B | B- o inferiore |
| [Test del sito web di Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS e opzioni di sicurezza | `web_standards` | 90% o più | Dal 70% all'89% | Sotto il 70% |
| [Test email di Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS e DANE per il dominio email | `mail_standards` | 90% o più | Dal 70% all'89% | Sotto il 70% |
| [Hardenize](https://www.hardenize.com) | Configurazione di sicurezza DNS, email e web | Solo link | | | |

## Standard email

I provider email e i servizi di inoltro con un `mail_domain` ricevono anche questi test, eseguiti da [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Cosa verifica | Criterio | Sì |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, policy DMARC, modalità MTA-STS (RFC 8461), TLS-RPT (RFC 8460), validazione DNSSEC, DANE TLSA su ogni host MX (RFC 7672), più BIMI e record SRV RFC 6186 a titolo informativo | `transport_security` | Tutti e sei applicati |
| IMAP `CAPABILITY` | TLS implicito sulla 993 (RFC 8314), IMAP4rev1 o IMAP4rev2, IDLE. In alternativa STARTTLS sulla 143 | `imap_standards` | TLS implicito, IMAP4rev1/rev2 e IDLE |
| POP3 `CAPA` | TLS implicito sulla 995, CAPA (RFC 2449), UIDL. In alternativa STLS sulla 110 | `pop3_standards` | TLS implicito, CAPA e UIDL |
| SMTP `EHLO` | Invio tramite TLS implicito sulla 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. In alternativa STARTTLS sulla 587 | `smtp_standards` | TLS implicito e tutte e quattro le estensioni |

I nomi dei server provengono da `imap_host`, `pop3_host` e `smtp_host` nel file di valutazione, oppure dai record SRV RFC 6186 del provider. Imposta un host su `false` quando il provider non offre quel protocollo. Le funzionalità sono quelle che ogni server annuncia prima dell'accesso, e gli elenchi completi sono mostrati in ogni pagina di valutazione.

## Tracker del sito web

Ogni voce con un sito web, app comprese, riceve un test dei tracker eseguito da [`scripts/trackers.js`](scripts/trackers.js). Il test carica la home page senza eseguire JavaScript e confronta ogni host di script, frame, immagini e fogli di stile, oltre al codice inline, con un elenco di servizi di tracciamento e statistica noti.

| Rilevato | Effetto su `no_trackers` |
| --- | --- |
| Tracker di terze parti come Google Analytics, Google Tag Manager, Meta Pixel, Hotjar o HubSpot | La risposta diventa "no", qualunque cosa dica il file di valutazione |
| Statistiche senza cookie (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Un "sì" diventa "parziale" |
| Font, contenuti incorporati, segnalazione degli errori, chat di assistenza o strumenti di consenso | Elencati nella pagina, non valutati |
| Nulla | Viene usata la risposta presente nel file di valutazione |

Quando il sito web è una pagina di un servizio di hosting del codice o di un app store (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play e simili), il test viene saltato, perché quella pagina non è gestita dal progetto.

Il test vede solo i tracker scritti nella pagina stessa. I tracker aggiunti in seguito dagli script, e la telemetria all'interno delle app, richiedono comunque prove nel file di valutazione, come un'informativa sulla privacy o un report di [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS e ARC non possono essere osservati dall'esterno senza inviare posta, quindi sono criteri a cui si risponde con prove anziché con test.

I controlli automatici non ancora eseguiti vengono mostrati come "Non ancora testato" ed esclusi dal punteggio, così un provider non viene mai penalizzato per un test che non è ancora avvenuto.

Per SSL Labs viene usato il voto più basso tra tutti gli indirizzi IP di un dominio.

Hardenize non offre più un'API pubblica, quindi ogni pagina rimanda al suo report pubblico invece di assegnargli un punteggio.

## Programmazione

Il [workflow Scan](.github/workflows/scan.yml) viene eseguito ogni giorno e testa le 40 voci con i risultati più vecchi (Internet.nl segue i propri limiti, vedi sotto), così ogni servizio viene testato regolarmente senza sovraccaricare le API gratuite. I risultati vengono salvati in [`scans/`](scans/) come JSON, inseriti nel repository e pubblicati con il sito. Ogni pagina mostra quando sono stati eseguiti gli ultimi test.

Un test non riuscito mantiene il risultato precedente e registra l'errore, così un disservizio temporaneo non modifica un punteggio.

### Limiti di Internet.nl

L'API batch di Internet.nl viene usata nel rispetto delle sue [condizioni d'uso](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Al massimo 2 richieste batch in qualsiasi periodo di 7 giorni. Il test del sito web e il test dell'email sono richieste separate, quindi un ciclo completo le usa entrambe.
- Al massimo 5000 domini per richiesta. Quando più domini hanno il test, hanno la precedenza quelli con risultati mancanti o più vecchi e gli altri attendono una richiesta successiva.
- Nessuna richiesta per un singolo dominio, quindi `--only` salta Internet.nl.

Ogni richiesta viene registrata in `scans/internetnl-requests.json`, che viene inserito nel repository con i risultati anche quando un'esecuzione non riesce. Un'esecuzione che trova raggiunto il limite settimanale salta Internet.nl e mantiene i risultati esistenti. I batch richiedono ore, quindi lo stato della richiesta viene controllato ogni 5 minuti, e una richiesta ancora in corso al termine dell'esecuzione viene raccolta da un'esecuzione successiva invece di essere inviata di nuovo. Internet.nl ignora `--limit`, e solo le esecuzioni sul branch predefinito usano le credenziali di Internet.nl, quindi tutte le esecuzioni condividono un unico registro.

Questo sito web riutilizza i risultati dei test forniti dallo strumento di test [Internet.nl](https://internet.nl).

## Configurazione

Tutte le impostazioni sono secret facoltativi del repository (Settings › Secrets and variables › Actions):

| Secret | Scopo |
| --- | --- |
| `SSLLABS_EMAIL` | Email registrata presso la [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Senza di essa viene usata l'API v3. La registrazione richiede un indirizzo email aziendale. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Account per la [batch API di Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Senza di essi, le pagine rimandano ai test pubblici di Internet.nl e i criteri Internet.nl restano "unknown". |
| `INTERNETNL_API` | URL di base della batch API, per un'istanza [self-hosted di Internet.nl](https://github.com/internetstandards/Internet.nl). Il valore predefinito è `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory non richiede alcun account. I dati sulle licenze di GitHub usano il token integrato del workflow.

## Eseguire i test in locale

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Quale dominio viene testato

Il campo `domain` dovrebbe indicare il sito web principale o l'app web in cui le persone accedono, ad esempio `mail.example.com` anziché un sottodominio di marketing su un host diverso. I produttori possono suggerire un dominio più accurato con una pull request.
