<!-- source: 2f40b8f7e8ef -->
# Czym jest CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** to amerykańska ustawa, która odpowiada na jedno pytanie: czy amerykańskie organy mogą uzyskać dane od amerykańskiej firmy, gdy te dane są przechowywane w innym kraju? Odpowiedź brzmi: tak.

## Co robi

1. **Lokalizacja nie ma znaczenia.** Dostawca podlegający jurysdykcji USA musi przekazać dane znajdujące się w jego „posiadaniu, pieczy lub pod jego kontrolą” na podstawie ważnego amerykańskiego nakazu prawnego, niezależnie od tego, gdzie na świecie dane są przechowywane. [Źródło: Departament Sprawiedliwości USA](https://www.justice.gov/criminal/cloud-act-resources)
2. **Umowy z innymi krajami.** USA mogą zawierać umowy o dostępie do danych, które pozwalają zaufanym rządom zagranicznym w sprawach poważnych przestępstw żądać danych bezpośrednio od amerykańskich dostawców, z pominięciem wolniejszej procedury traktatów o wzajemnej pomocy prawnej (MLAT). [Źródło: Departament Sprawiedliwości USA](https://www.justice.gov/criminal/cloud-act-resources)
3. **Możliwość sprzeciwu.** Dostawcy mogą zwrócić się do sądu o uchylenie lub zmianę żądania, gdy jest ono sprzeczne z prawem innego kraju, z którym obowiązuje umowa.

Umowy obowiązują z **Wielką Brytanią** i **Australią**. Ogłoszono negocjacje z **Kanadą** i **Unią Europejską**. [Źródło: Departament Sprawiedliwości USA](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Czego nie robi

- Nie tworzy nowych uprawnień do inwigilacji ani nie znosi wymogu nakazu. Amerykańskie organy nadal potrzebują ważnego nakazu prawnego, a treść komunikacji co do zasady wymaga nakazu przeszukania.
- Nie zmusza dostawcy do odszyfrowania danych, których nie może odszyfrować. Obejmuje dane, które dostawca posiada. Dane zaszyfrowane kluczami, które ma tylko użytkownik, pozostają zaszyfrowane.
- Nie dotyczy tylko centrów danych w USA. Wybór europejskiej lokalizacji serwera nie pomaga, jeśli firma, która go obsługuje, podlega jurysdykcji USA.

## Kogo dotyczy

Każdej firmy podlegającej jurysdykcji USA: Google, Microsoft, Apple, Amazon, Cloudflare oraz mniejszych amerykańskich usług, w tym Forward Email. Zobacz [wszystkie oceniane usługi z siedzibą w Stanach Zjednoczonych](/jurisdictions/united-states/).

Może też sięgać do **usług spoza USA, które przechowują dane u amerykańskich dostawców chmury**, ponieważ sam dostawca chmury może otrzymać żądanie. Dlatego przydatne pytanie brzmi nie tylko „gdzie jest firma?”, ale też „jakie dane istnieją i kto ma klucze?”.

## Dlaczego szyfrowanie i minimalizacja danych są ważniejsze niż lokalizacja

Przepisy się zmieniają, a każdy kraj ma sposób, by wymusić wydanie danych. Najważniejsze jest to, co dostawca **może** przekazać:

| Sytuacja | Do czego może sięgnąć żądanie |
| --- | --- |
| Poczta przechowywana otwartym tekstem | Wszystko w skrzynce |
| Poczta szyfrowana w spoczynku kluczami dostawcy | Wszystko, bo dostawca może ją odszyfrować |
| Poczta szyfrowana kluczami wyprowadzonymi z hasła użytkownika | Dane konta i dane połączeń, ale nie treść wiadomości |
| Brak logów | Nic o aktywności |

Prawdziwe przykłady:

- **Proton (Szwajcaria, poza wszystkimi układami Eyes)** zastosował się do 8313 z 9301 szwajcarskich nakazów prawnych według najnowszego rocznego raportu, przekazując posiadane informacje o kontach. [Źródło: raport przejrzystości Proton](https://proton.me/legal/transparency)
- **Proton VPN (ta sama firma, ten sam kraj)** nie zastosował się do żadnego, ponieważ nie przechowuje logów. [Źródło: raport przejrzystości Proton](https://proton.me/legal/transparency)
- **Tuta (Niemcy)** może otrzymać od niemieckiego sędziego nakaz przekazania skrzynek lub monitorowania ich w czasie rzeczywistym. Poczta szyfrowana end-to-end pozostaje zaszyfrowana. [Źródło: raport przejrzystości Tuta](https://tuta.com/blog/transparency-report)

Ta sama firma w tym samym kraju osiąga bardzo różne wyniki w zależności od tego, jakie dane istnieją. Dlatego Privacy Ratings pokazuje jurysdykcję na każdej stronie, ale punktuje to, co dostawcy faktycznie robią. Zobacz, [jak traktowana jest jurysdykcja](/jurisdictions/).

## Jak CLOUD Act dotyczy Forward Email

Forward Email ma siedzibę w Stanach Zjednoczonych i podlega CLOUD Act. Jego [dokument techniczny](https://forwardemail.net/technical-whitepaper.pdf) opisuje, jak konstrukcja usługi ogranicza to, do czego może sięgnąć żądanie:

- **Szyfrowane skrzynki.** Każda skrzynka to indywidualnie zaszyfrowany plik SQLite. Według dokumentu technicznego Forward Email nie ma dostępu do treści wiadomości.
- **Brak zapisywania na dysku treści ani metadanych poczty.** Forward Email nie przechowuje informacji o tym, do kogo piszą użytkownicy.
- **Ograniczone dane.** Ujawnić można podstawowe informacje o koncie (np. adres e-mail konta, datę rejestracji i dane płatności) oraz ograniczone logi adresów IP, które mogą być tymczasowo przechowywane ze względów bezpieczeństwa i zapobiegania nadużyciom.
- **Tylko ważne nakazy prawne.** Żądania wymagają wezwania sądowego (subpoena), postanowienia sądu lub nakazu przeszukania. Żądania spoza USA muszą przejść przez amerykański sąd, traktat o wzajemnej pomocy prawnej lub umowę na podstawie CLOUD Act spełniającą amerykańskie wymogi prawne.
- **Powiadomienia i sprzeciw.** Użytkownicy są powiadamiani, gdy pozwala na to prawo, a zbyt szerokie żądania są kwestionowane.

Forward Email utrzymuje Privacy Ratings. Jego ocena opiera się na tych samych kryteriach co ocena każdego innego dostawcy. Zobacz [ocenę Forward Email](/email-providers/forward-email/) i [zasady zarządzania](/governance/).

## Dalsza lektura

- [Departament Sprawiedliwości USA: materiały o CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: transgraniczna wymiana danych na podstawie CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: inwigilacja na podstawie sekcji 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
