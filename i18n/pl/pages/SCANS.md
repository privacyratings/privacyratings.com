<!-- source: 16559ce369ce -->
# Testy automatyczne

Usługi hostowane (kategorie z `type: service`) są testowane automatycznie, gdy ich plik oceny zawiera pole `domain`. Dostawcy poczty i usługi przekierowania z polem `mail_domain` otrzymują też test poczty.

| Test | Co sprawdza | Kryterium | Tak | Częściowo | Nie |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Wersje TLS, szyfry, certyfikaty i znane luki TLS | `tls` | A+ lub A | A- lub B | C lub niżej |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Nagłówki bezpieczeństwa, takie jak CSP, HSTS i X-Frame-Options, oraz flagi plików cookie | `security_headers` | A+ lub A | A-, B+ lub B | B- lub niżej |
| [Test stron Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS i opcje bezpieczeństwa | `web_standards` | 90% lub więcej | Od 70% do 89% | Poniżej 70% |
| [Test poczty Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS i DANE dla domeny pocztowej | `mail_standards` | 90% lub więcej | Od 70% do 89% | Poniżej 70% |
| [Hardenize](https://www.hardenize.com) | Konfiguracja bezpieczeństwa DNS, poczty i WWW | Tylko link | | | |

## Standardy poczty e-mail

Dostawcy poczty i usługi przekierowania z polem `mail_domain` otrzymują też te testy, uruchamiane przez [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Test | Co sprawdza | Kryterium | Tak |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, politykę DMARC, tryb MTA-STS (RFC 8461), TLS-RPT (RFC 8460), walidację DNSSEC, DANE TLSA na każdym hoście MX (RFC 7672), a informacyjnie także BIMI i rekordy SRV RFC 6186 | `transport_security` | Wszystkie sześć egzekwowane |
| IMAP `CAPABILITY` | Implicit TLS na 993 (RFC 8314), IMAP4rev1 lub IMAP4rev2, IDLE. W razie potrzeby próbuje STARTTLS na 143 | `imap_standards` | Implicit TLS, IMAP4rev1/rev2 i IDLE |
| POP3 `CAPA` | Implicit TLS na 995, CAPA (RFC 2449), UIDL. W razie potrzeby próbuje STLS na 110 | `pop3_standards` | Implicit TLS, CAPA i UIDL |
| SMTP `EHLO` | Wysyłanie przez implicit TLS na 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. W razie potrzeby próbuje STARTTLS na 587 | `smtp_standards` | Implicit TLS i wszystkie cztery rozszerzenia |

Nazwy serwerów pochodzą z pól `imap_host`, `pop3_host` i `smtp_host` w pliku oceny albo z rekordów SRV RFC 6186 dostawcy. Ustaw host na `false`, gdy dostawca nie oferuje danego protokołu. Możliwości to funkcje, które każdy serwer ogłasza przed zalogowaniem, a pełne listy są pokazywane na stronie każdej oceny.

## Trackery na stronie

Każdy wpis ze stroną internetową, łącznie z aplikacjami, przechodzi test trackerów uruchamiany przez [`scripts/trackers.js`](scripts/trackers.js). Test wczytuje stronę główną bez uruchamiania JavaScriptu i porównuje hosty wszystkich skryptów, ramek, obrazów i arkuszy stylów, a także kod osadzony, z listą znanych usług śledzących i analitycznych.

| Wykryto | Wpływ na `no_trackers` |
| --- | --- |
| Trackery podmiotów trzecich, takie jak Google Analytics, Google Tag Manager, Meta Pixel, Hotjar lub HubSpot | Odpowiedź zmienia się na „nie”, niezależnie od pliku oceny |
| Analityka bez plików cookie (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | „Tak” zmienia się na „częściowo” |
| Czcionki, osadzenia, raportowanie błędów, czat wsparcia lub narzędzia do zgód | Wymienione na stronie, bez punktacji |
| Nic | Używana jest odpowiedź z pliku oceny |

Gdy strona internetowa jest stroną hostingu kodu lub sklepu z aplikacjami (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play i podobne), test jest pomijany, ponieważ ta strona nie jest prowadzona przez projekt.

Test widzi tylko trackery zapisane w samej stronie. Trackery dodawane później przez skrypty oraz telemetria w aplikacjach nadal wymagają dowodów w pliku oceny, takich jak polityka prywatności lub raport [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS i ARC nie są widoczne z zewnątrz bez wysłania poczty, dlatego są kryteriami z odpowiedziami popartymi dowodami, a nie testami.

Automatyczne testy, które jeszcze się nie odbyły, są oznaczone jako „Jeszcze nie testowano” i pomijane w wyniku, więc dostawca nigdy nie traci punktów za test, który się nie odbył.

W przypadku SSL Labs używany jest najsłabszy stopień spośród wszystkich adresów IP domeny.

Hardenize nie oferuje już publicznego API, dlatego każda strona zawiera link do jego publicznego raportu zamiast punktacji.

## Harmonogram

[Workflow Scan](.github/workflows/scan.yml) działa codziennie i testuje 40 wpisów z najstarszymi wynikami (Internet.nl podlega własnym limitom, opisanym poniżej), dzięki czemu każda usługa jest testowana regularnie bez przeciążania darmowych API. Wyniki są zapisywane w [`scans/`](scans/) jako JSON, commitowane do repozytorium i publikowane wraz ze stroną. Każda strona pokazuje, kiedy ostatnio uruchomiono jej testy.

Nieudany test zachowuje poprzedni wynik i zapisuje błąd, więc chwilowa awaria nie zmienia wyniku.

### Limity Internet.nl

Batch API Internet.nl jest używane zgodnie z jego [warunkami korzystania](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Najwyżej 2 żądania wsadowe w ciągu dowolnych 7 dni. Test strony internetowej i test poczty e-mail to osobne żądania, więc jedna pełna runda wykorzystuje oba.
- Najwyżej 5000 domen na żądanie. Gdy test ma więcej domen, pierwszeństwo mają te bez wyników lub z najstarszymi wynikami, a pozostałe czekają na późniejsze żądanie.
- Brak żądań dla pojedynczej domeny, więc `--only` pomija Internet.nl.

Każde żądanie jest zapisywane w `scans/internetnl-requests.json`, który jest commitowany razem z wynikami nawet wtedy, gdy uruchomienie się nie powiedzie. Uruchomienie, które stwierdzi osiągnięcie tygodniowego limitu, pomija Internet.nl i zachowuje dotychczasowe wyniki. Przetwarzanie wsadowe trwa godzinami, więc status żądania jest sprawdzany co 5 minut, a żądanie, które nadal trwa w chwili zakończenia uruchomienia, jest odbierane przez późniejsze uruchomienie zamiast być wysyłane ponownie. Internet.nl ignoruje `--limit`, a dane logowania do Internet.nl są używane tylko przez uruchomienia na domyślnej gałęzi, więc wszystkie uruchomienia korzystają z jednego rejestru.

Ta witryna ponownie wykorzystuje wyniki testów dostarczone przez narzędzie testowe [Internet.nl](https://internet.nl).

## Konfiguracja

Wszystkie ustawienia to opcjonalne sekrety repozytorium (Settings › Secrets and variables › Actions):

| Sekret | Przeznaczenie |
| --- | --- |
| `SSLLABS_EMAIL` | Adres e-mail zarejestrowany w [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Bez niego używane jest API v3. Rejestracja wymaga firmowego adresu e-mail. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Konto w [Internet.nl batch API](https://internet.nl/faqs/batch-and-dashboard/). Bez nich strony zawierają linki do publicznych testów Internet.nl, a kryteria Internet.nl pozostają „nieznane”. |
| `INTERNETNL_API` | Bazowy URL batch API dla [samodzielnie hostowanej instancji Internet.nl](https://github.com/internetstandards/Internet.nl). Domyślnie `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory nie wymaga konta. Dane o licencjach z GitHuba korzystają z wbudowanego tokenu workflow.

## Uruchamianie testów lokalnie

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Która domena jest testowana

Pole `domain` powinno wskazywać główną stronę lub aplikację webową, w której ludzie się logują, np. `mail.example.com`, a nie marketingową subdomenę na innym hoście. Producenci mogą zaproponować dokładniejszą domenę w pull requeście.
