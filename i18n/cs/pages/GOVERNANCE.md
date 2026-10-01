<!-- source: 63c0d07d1a26 -->
# Správa projektu

Jak se přijímají rozhodnutí, jak se vybírají naše volby a jak se řeší střet zájmů.

## Správci

Správci kontrolují a slučují pull requesty, třídí issues a moderují Discussions. Správci jsou uvedeni v souboru [`.github/CODEOWNERS`](.github/CODEOWNERS). Správcem se může stát kdokoli, kdo má za sebou řadu přesných a dobře podložených příspěvků.

## Jak se přijímají změny

1. Všechny změny procházejí pull requestem. Nikdo, ani správci, neposílá změny hodnocení přímo do `main`.
2. Každý pull request musí projít `npm test` (validace a sestavení).
3. Pull request schválí alespoň jeden správce.
4. Odpovědi potřebují důkazy z primárního zdroje: oficiální dokumentace, zdrojový kód, licenční soubory, zveřejněné zprávy z auditů nebo reprodukovatelné testy. Recenze, blogové příspěvky a marketingová tvrzení bez podrobností nejsou důkazy.
5. Pokud si zdroje odporují, platí nejnovější primární zdroj. Pokud to stále není jasné, odpověď je „neznámé“.

## Změny kritérií

Kritéria určují každé skóre, takže změny v `criteria/` vyžadují větší péči:

- Nejprve otevřete issue „Criteria change“ nebo diskuzi v Discussions.
- Pull request zůstává otevřený alespoň 7 dní pro veřejné připomínky.
- Musí ho schválit dva správci.
- Identifikátory kritérií se po zveřejnění nikdy nepřejmenovávají. Kritérium se vyřazuje odstraněním v pull requestu, který vysvětlí proč.

## Naše volby

- Každá kategorie může mít až dvě naše volby.
- Volba musí mít `pick_reason`, který výběr srozumitelně vysvětluje.
- Každá kategorie má nejvýše dvě volby, seřazené pomocí `pick: 1` a `pick: 2`.
- Naše volby jsou redakční. Zobrazují se odděleně a nikdy nemění skóre.
- Kdokoli může volbu zpochybnit v kategorii Discussions „Picks“. Na námitky se odpovídá veřejně.

## Střet zájmů

Privacy Ratings spravuje tým, který stojí za Forward Email. Položky spojené se správci jsou „spřízněné položky“. V současnosti to znamená Forward Email.

Pravidla pro spřízněné položky:

- Každá spřízněná položka nese `disclosure`, které se zobrazuje v horní části její stránky.
- Pull request, který zvyšuje skóre spřízněné položky nebo z ní dělá naši volbu, musí u každé změněné odpovědi odkazovat na důkazy a před sloučením zůstat otevřený alespoň 7 dní.
- Pull request, který snižuje skóre spřízněné položky s platnými důkazy, se slučuje jako kterýkoli jiný.
- Správci musí přidat upozornění ke každé položce, se kterou mají oni nebo jejich zaměstnavatel finanční či osobní spojení.

## Peníze

- Žádné affiliate odkazy. Validace odmítá URL s referral nebo sledovacími parametry.
- Žádná placená umístění, sponzorované položky ani placené recenze.
- Výrobci mohou navrhovat opravy jako kdokoli jiný, s důkazy, a musí uvést, že jsou výrobcem.

## Moderování

Issues, pull requesty a Discussions se řídí [Kodexem chování](CODE_OF_CONDUCT.md). Správci mohou zamknout nebo skrýt komentáře, které jsou urážlivé, mimo téma nebo propagační.
