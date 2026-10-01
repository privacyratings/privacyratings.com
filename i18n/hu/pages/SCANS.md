<!-- source: eecc9b0ced33 -->
# Automatikus tesztek

A hosztolt szolgáltatásokat (a `type: service` típusú kategóriákban) automatikusan teszteljük, ha az értékelőfájljukban szerepel `domain`. A `mail_domain` mezővel rendelkező e-mail-szolgáltatók és továbbítószolgáltatások e-mail-tesztet is kapnak.

| Teszt | Mit ellenőriz | Kritérium | Igen | Részben | Nem |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | TLS-verziók, titkosítócsomagok, tanúsítványok és ismert TLS-hibák | `tls` | A+ vagy A | A- vagy B | C vagy rosszabb |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Biztonsági fejlécek, például CSP, HSTS és X-Frame-Options, valamint sütijelzők | `security_headers` | A+ vagy A | A-, B+ vagy B | B- vagy rosszabb |
| [Internet.nl webhelyteszt](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS és biztonsági beállítások | `web_standards` | 90% vagy több | 70–89% | 70% alatt |
| [Internet.nl e-mail-teszt](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS és DANE a levelezési domainhez | `mail_standards` | 90% vagy több | 70–89% | 70% alatt |
| [Hardenize](https://www.hardenize.com) | DNS-, e-mail- és webbiztonsági konfiguráció | Csak hivatkozás | | | |

## E-mail-szabványok

A `mail_domain` mezővel rendelkező e-mail-szolgáltatók és továbbítószolgáltatások ezeket a teszteket is megkapják, amelyeket a [`scripts/mail-tests.js`](scripts/mail-tests.js) futtat:

| Teszt | Mit ellenőriz | Kritérium | Igen |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, DMARC-szabályzat, MTA-STS mód (RFC 8461), TLS-RPT (RFC 8460), DNSSEC-érvényesítés, DANE TLSA minden MX-hoszton (RFC 7672), valamint tájékoztató jelleggel BIMI és RFC 6186 SRV-rekordok | `transport_security` | Mind a hat kikényszerítve |
| IMAP `CAPABILITY` | Implicit TLS a 993-as porton (RFC 8314), IMAP4rev1 vagy IMAP4rev2, IDLE. Tartalékként STARTTLS a 143-as porton | `imap_standards` | Implicit TLS, IMAP4rev1/rev2 és IDLE |
| POP3 `CAPA` | Implicit TLS a 995-ös porton, CAPA (RFC 2449), UIDL. Tartalékként STLS a 110-es porton | `pop3_standards` | Implicit TLS, CAPA és UIDL |
| SMTP `EHLO` | Beküldés implicit TLS-en a 465-ös porton, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Tartalékként STARTTLS az 587-es porton | `smtp_standards` | Implicit TLS és mind a négy bővítmény |

A szerverneveket az értékelőfájl `imap_host`, `pop3_host` és `smtp_host` mezőiből, vagy a szolgáltató RFC 6186 SRV-rekordjaiból vesszük. Ha a szolgáltató nem kínál egy protokollt, állítsa a hosztot `false` értékre. A képességek azok, amelyeket az egyes szerverek a bejelentkezés előtt közölnek; a teljes listák minden értékelő oldalon láthatók.

## Webhelyek nyomkövetői

Minden webhellyel rendelkező bejegyzés, az alkalmazásokat is beleértve, nyomkövető-tesztet kap, amelyet a [`scripts/trackers.js`](scripts/trackers.js) futtat. A teszt JavaScript futtatása nélkül tölti be a kezdőlapot, és minden szkript, keret, kép és stíluslap hosztját, valamint a beágyazott kódot összeveti az ismert nyomkövető és analitikai szolgáltatások listájával.

| Találat | Hatás a `no_trackers` értékre |
| --- | --- |
| Külső nyomkövetők, például Google Analytics, Google Tag Manager, Meta Pixel, Hotjar vagy HubSpot | A válasz „no” lesz, függetlenül attól, mi áll az értékelőfájlban |
| Süti nélküli analitika (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | A „yes” válaszból „partial” lesz |
| Betűtípusok, beágyazások, hibajelentés, ügyfélszolgálati chat vagy hozzájáruláskezelő eszközök | Az oldalon listázva, nem pontozva |
| Semmi | Az értékelőfájlban szereplő válasz érvényes |

Ha a webhely egy kódtároló vagy alkalmazásbolt oldala (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play és hasonlók), a teszt kimarad, mert azt az oldalt nem a projekt üzemelteti.

A teszt csak az oldalba közvetlenül beírt nyomkövetőket látja. A szkriptek által később hozzáadott nyomkövetőkhöz és az alkalmazásokon belüli telemetriához továbbra is bizonyíték kell az értékelőfájlban, például adatvédelmi szabályzat vagy [Exodus Privacy](https://reports.exodus-privacy.eu.org)-jelentés.

Az SRS és az ARC kívülről, levélküldés nélkül nem látható, ezért ezek teszt helyett bizonyítékkal megválaszolt kritériumok.

A még le nem futott automatikus ellenőrzések „Még nincs tesztelve” jelzéssel jelennek meg, és kimaradnak a pontszámból, így egy szolgáltató soha nem kap pontlevonást egy meg sem történt teszt miatt.

Az SSL Labs esetében a domain összes IP-címe közül a leggyengébb osztályzat számít.

A Hardenize már nem kínál nyilvános API-t, ezért minden oldal a nyilvános jelentésére hivatkozik ahelyett, hogy pontozná.

## Ütemezés

A [Scan workflow](.github/workflows/scan.yml) naponta fut, és a legrégebbi eredményekkel rendelkező 40 bejegyzést teszteli (az Internet.nl saját korlátokat követ, lásd lent), így minden szolgáltatást rendszeresen tesztelünk az ingyenes API-k túlterhelése nélkül. Az eredmények JSON formátumban a [`scans/`](scans/) mappába kerülnek, bekerülnek a tárolóba, és a webhellyel együtt jelennek meg. Minden oldal mutatja, mikor futottak utoljára a tesztjei.

Egy sikertelen teszt megtartja az előző eredményt, és rögzíti a hibát, így egy átmeneti kiesés nem változtatja meg a pontszámot.

### Az Internet.nl korlátai

Az Internet.nl kötegelt API-ját a [felhasználási feltételei](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) szerint használjuk:

- Legfeljebb 2 kötegelt kérés bármely 7 napon belül. A webhelyteszt és az e-mail-teszt külön kérés, így egy teljes kör mindkettőt felhasználja.
- Kérésenként legfeljebb 5000 domain. Ha több domainre vonatkozik a teszt, a hiányzó vagy legrégebbi eredményűek kerülnek sorra először, a többi egy későbbi kérésre vár.
- Egyetlen domainre vonatkozó kérés nincs, ezért a `--only` kihagyja az Internet.nl-t.

Minden kérés rögzítésre kerül a `scans/internetnl-requests.json` fájlban, amely az eredményekkel együtt akkor is bekerül a tárolóba, ha egy futás sikertelen. Az a futás, amely azt észleli, hogy a heti korlát elfogyott, kihagyja az Internet.nl-t, és megtartja a meglévő eredményeket. A kötegek órákig tartanak, ezért a kérés állapotát 5 percenként ellenőrizzük, és a futás végén még folyamatban lévő kérést egy későbbi futás gyűjti be ahelyett, hogy újra elküldené. Az Internet.nl figyelmen kívül hagyja a `--limit` beállítást, és csak az alapértelmezett ágon futó futások használják az Internet.nl hitelesítő adatait, így minden futás egy közös nyilvántartást használ.

Ez a webhely az [Internet.nl](https://internet.nl) tesztelőeszköz által biztosított teszteredményeket használja fel újra.

## Konfiguráció

Minden beállítás opcionális tárolótitok (Settings › Secrets and variables › Actions):

| Titok | Cél |
| --- | --- |
| `SSLLABS_EMAIL` | Az [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md) szolgáltatásnál regisztrált e-mail-cím. Enélkül a v3 API-t használjuk. A regisztrációhoz szervezeti e-mail-cím kell. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Fiók az [Internet.nl batch API-hoz](https://internet.nl/faqs/batch-and-dashboard/). Ezek nélkül az oldalak a nyilvános Internet.nl tesztekre hivatkoznak, és az Internet.nl kritériumok „unknown” értéken maradnak. |
| `INTERNETNL_API` | A batch API alap-URL-je egy [saját üzemeltetésű Internet.nl](https://github.com/internetstandards/Internet.nl) példányhoz. Alapértelmezés: `https://batch.internet.nl/api/batch/v2`. |

A Mozilla HTTP Observatoryhoz nem kell fiók. A GitHub-licencadatokhoz a workflow beépített tokenjét használjuk.

## Tesztek helyi futtatása

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Melyik domaint teszteljük

A `domain` mező a fő webhely vagy webalkalmazás legyen, ahol a felhasználók bejelentkeznek, például `mail.example.com`, nem pedig egy másik hoszton lévő marketing-aldomain. A gyártók pull requestben javasolhatnak pontosabb domaint.
