<!-- source: 38b6fc4b567c -->
# Współtworzenie

Wszystko odbywa się na GitHubie. Nie ma innego forum, czatu ani konta do założenia.

| Aby to zrobić | Użyj |
| --- | --- |
| Zaproponować aplikację lub usługę | [Otwórz zgłoszenie „Suggest”](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Zgłosić błędną odpowiedź lub niedziałający link | [Otwórz zgłoszenie „Correction”](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml) albo użyj opcji „Zgłoś poprawkę” na stronie dowolnej oceny |
| Zaproponować lub zmienić kryteria | [Otwórz zgłoszenie „Criteria change”](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Poprawić samodzielnie | Użyj opcji „Edytuj na GitHubie” na stronie dowolnej oceny albo otwórz pull request |
| Zadać pytanie lub przedyskutować wybór | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Edycja oceny

Każda aplikacja lub usługa to jeden plik Markdown w `ratings/<category>/<name>.md`. Początek pliku to YAML. Wszystko poniżej to opcjonalne uwagi w Markdown wyświetlane na stronie.

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

Zasady (sprawdzane automatycznie przez `npm test`):

- `answer` to jedna z wartości `yes`, `partial`, `no`, `unknown` lub `n/a`.
- `yes` i `partial` wymagają linku `evidence`. `no` wymaga `note` lub `evidence`.
- Dowód musi być źródłem pierwotnym: oficjalną dokumentacją, kodem źródłowym, plikiem licencji, raportem z audytu lub powtarzalnym testem. Nie recenzjami, wpisami na forach ani stronami marketingowymi bez szczegółów.
- Linki muszą zaczynać się od `https://` i nie mogą zawierać parametrów polecających ani śledzących.
- Kryteria automatyczne (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) są wypełniane przez testy. Nie ustawiaj ich ręcznie.
- `no_trackers` jest też sprawdzane przez [test trackerów](SCANS.md#website-trackers). Jeśli strona główna wczytuje tracker podmiotu trzeciego, odpowiedź zmienia się na „no” niezależnie od zawartości pliku.
- Pomiń każde kryterium, które nie ma jeszcze dowodów. Liczy się jako `unknown`.
- `jurisdiction` to kraj, w którym firma ma siedzibę prawną (a nie lokalizacja jej serwerów). Jeśli kraju brakuje, dodaj go do [`jurisdictions.yml`](jurisdictions.yml). Każda uwaga w tym pliku wymaga źródła.
- Tylko opiekunowie dodają `pick`, `pick_reason` i `disclosure`. Użyj `pick: 1` i `pick: 2`, aby ustalić kolejność dwóch wyborów. Zobacz [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` zachowuje nazwę, jaką wpis miał w Awesome Privacy po zmianie nazwy, aby comiesięczny import nie dodał go ponownie. Aby na stałe pominąć wpis z Awesome Privacy, dodaj go do [`import-skip.yml`](import-skip.yml) z uzasadnieniem.

Kryteria dla każdej kategorii i znaczenie każdej odpowiedzi znajdują się w [`criteria/`](criteria/) oraz na [stronie kryteriów](https://privacyratings.com/criteria/).

## Dodawanie aplikacji lub usługi

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

To polecenie tworzy plik, w którym każde kryterium ma wartość `unknown`. Uzupełnij to, co możesz udowodnić, usuń resztę, a następnie uruchom `npm test`.

## Styl pisania

- Prosty, neutralny język. Opisuj, co coś robi, a nie jakie jest świetne.
- Krótkie zdania. Opisy mają mniej niż 300 znaków.
- Bez pierwszej osoby, bez dat w tekście, bez twierdzeń marketingowych.
- Nazywaj rzeczy tak, jak robi to producent.

## Uruchamianie strony lokalnie

Wymaga Node.js 18 lub nowszego.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Dodawanie strony

Umieść plik Markdown z polami `title` i `description` w [`pages/`](pages/). Zostanie opublikowany pod adresem `/<file-name>/` wraz z kopią w Markdown, danymi strukturalnymi i wpisem w mapie strony.

## Dodawanie kategorii lub kryterium

1. Dodaj kategorię do [`categories.yml`](categories.yml) w odpowiedniej grupie.
2. Opcjonalnie dodaj `criteria/<category-id>.yml` z kryteriami specyficznymi dla kategorii. Skopiuj format z istniejącego pliku.
3. Utwórz `ratings/<category-id>/` i dodaj wpisy.
4. Zmiany kryteriów podlegają zasadom recenzji opisanym w [GOVERNANCE.md](GOVERNANCE.md).

## Tłumaczenia

Strona jest publikowana w 25 językach. Źródłem jest angielski, a każdy inny język znajduje się w `i18n/<code>/`:

| Plik | Zawiera |
| --- | --- |
| `ui.json` | Tekst interfejsu: nagłówki, przyciski i zdania z `{placeholders}` |
| `data.json` | Nazwy kategorii, kryteria, poradniki i uwagi o krajach |
| `entries.json` | Opisy ocen, uzasadnienia wyborów i ujawnienia |
| `pages/*.md` | Całe dokumenty, takie jak ten |

Każdy plik JSON przypisuje tekstowi angielskiemu jego tłumaczenie. Gdy tekst angielski się zmieni, stare tłumaczenie przestaje do niego pasować, więc wyświetlany jest tekst angielski, dopóki ktoś nie przetłumaczy nowego tekstu. Nieaktualne treści nigdy nie są wyświetlane.

1. Uruchom `npm run build`. Polecenie zapisuje bieżące angielskie listy w `i18n/source/`.
2. Uruchom `npm run i18n:check`, aby zobaczyć, czego brakuje w każdym języku, albo `node scripts/i18n-check.js de ui`, aby zobaczyć szczegóły dla jednego języka i pliku.
3. Dodaj lub popraw tłumaczenia, zachowując każdy `{placeholder}` dokładnie w niezmienionej postaci.
4. W przypadku dokumentu skopiuj tekst angielski z `i18n/source/pages/`, zachowaj jego pierwszą linię (`<!-- source: … -->`, która wiąże tłumaczenie z tą wersją tekstu angielskiego) i przetłumacz resztę.

Uwagi i dowody do poszczególnych odpowiedzi pozostają po angielsku. Porównania i większość pojedynczych ocen są dostępne tylko po angielsku; wybory, kategorie, poradniki, alternatywy, listy open source, jurysdykcje i dokumenty są tłumaczone. Menu języka i automatyczne przekierowanie korzystają z linków `hreflang` na każdej stronie.

## Lista kontrolna pull requesta

- [ ] `npm test` kończy się powodzeniem.
- [ ] Każda zmieniona odpowiedź prowadzi do dowodów.
- [ ] Jeśli pracujesz dla zmienianej usługi lub masz z nią powiązania, napisano o tym w pull requeście.
