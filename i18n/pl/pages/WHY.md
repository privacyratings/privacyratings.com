<!-- source: 206790af40f5 -->
# Dlaczego istnieje Privacy Ratings

Poradniki o prywatności pomagają milionom ludzi wybierać lepsze aplikacje i usługi. Wiele z nich wykonuje świetną pracę. Większość ma jednak te same słabości:

- **Niejasne zasady.** Usługa trafia na listę lub nie, a powodem jest wątek na forum, prywatna dyskusja albo nic, co zostało opublikowane.
- **Tylko „tak” albo „nie”.** Lista mówi „polecane” albo nie mówi nic. Nie pokazuje, jak blisko coś było ani co zmieniłoby wynik.
- **Twierdzenia bez weryfikacji.** Opisy mówią „szyfrowane” lub „bez logów”, nie prowadząc do niczego, co czytelnik mógłby sprawdzić.
- **Brak testów.** Usługi hostowane rzadko są sprawdzane pod kątem podstawowego bezpieczeństwa, takiego jak ustawienia TLS, nagłówki bezpieczeństwa czy uwierzytelnianie poczty.
- **Osobne platformy.** Propozycje i dyskusje toczą się na forum lub serwerze czatu, który wymaga osobnego konta i moderacji, z dala od właściwej treści.
- **Powolne zmiany.** Gdy produkt się zmienia, listy często pozostają nieaktualne, bo ich aktualizacja zależy od kilku osób.

Privacy Ratings powstał, aby rozwiązać każdy z tych problemów.

## Od list „awesome” do utrzymywanego zasobu

Wiele z tych poradników zaczynało jako listy na GitHubie. Format list „awesome”, zapoczątkowany przez [Sindre Sorhusa](https://github.com/sindresorhus/awesome), ułatwił każdemu publikowanie wyselekcjonowanych list, a za nim poszły tysiące list awesome-coś, z których wiele to forki innych. Listy takie jak [Awesome Privacy](https://github.com/lissy93/awesome-privacy) wykonują cenną pracę, a wiele wpisów w tym serwisie pojawiło się najpierw tam.

Ten format ma słabość: większość list zależy od jednego lub dwóch wolontariuszy. Gdy opiekun odchodzi, lista zamiera, trafia do archiwum albo dzieli się na forki, z których każdy się dezaktualizuje. Czytelnicy nie wiedzą, która kopia jest aktualna, a nic na liście nie jest testowane ani punktowane.

**Privacy Ratings jest wspierany i prowadzony przez firmę, [Forward Email](https://forwardemail.net).** Nie zależy od wolontariuszy, którzy mogą odejść lub zarchiwizować repozytorium. Dane mają strukturę zamiast jednego pliku README, więc mogą być codziennie automatycznie walidowane, punktowane i testowane. A ponieważ wszystko jest otwartoźródłowe i udostępnione na licencji CC BY-SA, społeczność zawsze może to skopiować, sprawdzić i ulepszyć.

## Co jest inne

**Każda zasada jest publiczna.** Każda kategoria ma krótką listę pytań z wagą od 1 do 3. Pytania, znaczenie każdej odpowiedzi i sposób jej sprawdzenia znajdują się w folderze [`criteria/`](criteria/). Zobacz [kryteria](https://privacyratings.com/criteria/).

**Każda odpowiedź ma dowody.** Odpowiedź „tak” lub „częściowo” musi prowadzić do źródła, które każdy może sprawdzić: dokumentacji, kodu źródłowego, pliku licencji lub raportu z audytu. Wszystko bez dowodów liczy się jako „nieznane” i otrzymuje zero punktów. Wpis otrzymuje stopień literowy dopiero wtedy, gdy wystarczająca część jego odpowiedzi jest poparta dowodami.

**Wyniki, a nie tylko listy.** Każdy wpis otrzymuje wynik od 0 do 100, więc czytelnicy widzą, jak usługi wypadają na tle innych i gdzie dokładnie każda z nich ma braki.

**Automatyczne testy bezpieczeństwa.** Usługi hostowane są regularnie testowane za pomocą Qualys SSL Labs, Mozilla HTTP Observatory i Internet.nl (w tym testu poczty Internet.nl dla dostawców poczty). Wyniki są zapisywane w repozytorium i podlinkowane na każdej stronie. Zobacz [SCANS.md](SCANS.md).

**Jawna jurysdykcja.** Każda strona pokazuje, gdzie firma ma siedzibę, czy ten kraj należy do Five, Nine lub Fourteen Eyes, czy obowiązuje RODO i czy sięga do niej amerykański CLOUD Act. Jurysdykcja jest pokazywana, ale nie punktowana, ponieważ to, co dostawca może przekazać, zależy głównie od tego, co przechowuje i kto ma klucze. Zobacz [jurysdykcje](https://privacyratings.com/jurisdictions/) i [CLOUD Act](https://privacyratings.com/cloud-act/).

**Wszystko dzieje się na GitHubie.** Propozycje i poprawki to zgłoszenia (issues) na GitHubie. Zmiany to pull requesty. Dyskusje toczą się w GitHub Discussions. Nie ma osobnego forum, serwera czatu ani systemu kont. Każda zmiana każdej oceny ma publiczną historię.

**Otwarte dane.** Oceny to zwykłe pliki Markdown i YAML, a pełny zbiór danych jest publikowany jako JSON. Treść jest udostępniona na licencji CC BY-SA 4.0, więc każdy może ją ponownie wykorzystać.

**Wybory są oznaczone jako wybory.** Opiekunowie wskazują jeden lub dwa wybory w każdej kategorii i uzasadniają każdy z nich. Wybory są pokazywane oddzielnie i nigdy nie zmieniają wyników, więc czytelnik zawsze odróżni ocenę redakcyjną od zmierzonych wyników.

## Kto to utrzymuje

Privacy Ratings jest wspierany, finansowany i utrzymywany przez [Forward Email](https://forwardemail.net), usługę poczty e-mail nastawioną na prywatność, która również jest tu oceniana. Zapewnia to długoterminowe utrzymanie projektu, ale jest też konfliktem interesów, dlatego jest traktowany jawnie:

- Forward Email jest punktowany według tych samych kryteriów co każdy inny dostawca poczty.
- Jego wpis zawiera ujawnienie, podobnie jak każdy wpis mający inne powiązanie z opiekunami.
- Zmiany podnoszące wynik wpisu powiązanego muszą zawierać linki do dowodów i pozostać otwarte do publicznej recenzji przed scaleniem. Zobacz [GOVERNANCE.md](GOVERNANCE.md).
- Nie ma linków afiliacyjnych, płatnych miejsc ani sponsoringu. Walidacja odrzuca linki z parametrami polecającymi.

Jeśli ocena wygląda na błędną, otwórz zgłoszenie lub pull request z dowodami. To cały proces.

## Podziękowania

Wiele wpisów pochodzi pierwotnie z [Awesome Privacy](https://github.com/lissy93/awesome-privacy), udostępnionego na licencji CC0. Dane o hostingu serwerów poczty pochodzą z [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
