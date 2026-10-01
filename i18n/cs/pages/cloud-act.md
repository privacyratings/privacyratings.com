<!-- source: 37558129142b -->
# Co je CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** je americký zákon, který americkým úřadům umožňuje získat data od americké společnosti, když jsou tato data uložena v jiné zemi.

## Co dělá

1. **Na umístění nezáleží.** Poskytovatel, který podléhá americké jurisdikci, musí na základě platného amerického právního procesu vydat data, která má „v držení, úschově nebo pod kontrolou“, bez ohledu na to, kde na světě jsou uložena. [Zdroj: Ministerstvo spravedlnosti USA](https://www.justice.gov/criminal/cloud-act-resources)
2. **Dohody s jinými zeměmi.** USA mohou uzavírat dohody o přístupu k datům, které důvěryhodným zahraničním vládám umožňují žádat data přímo od amerických poskytovatelů u závažných trestných činů, bez pomalejšího postupu podle smluv o vzájemné právní pomoci (MLAT). [Zdroj: Ministerstvo spravedlnosti USA](https://www.justice.gov/criminal/cloud-act-resources)
3. **Možnost se bránit.** Poskytovatelé mohou požádat soud o zrušení nebo změnu žádosti, pokud je v rozporu se zákony jiné země, se kterou platí dohoda.

Dohody platí se **Spojeným královstvím** a **Austrálií**. Jednání byla oznámena s **Kanadou** a **Evropskou unií**. [Zdroj: Ministerstvo spravedlnosti USA](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Co nedělá

- Nevytváří nové sledovací pravomoci ani neruší potřebu soudního příkazu. Americké úřady stále potřebují platný právní proces a obsah komunikace obecně vyžaduje příkaz k prohlídce.
- Nenutí poskytovatele dešifrovat data, která dešifrovat nemůže. Vztahuje se na data, která poskytovatel má. Data šifrovaná klíči, které má jen uživatel, zůstávají šifrovaná.
- Netýká se jen datových center v USA. Volba evropského umístění serverů nepomůže, pokud společnost, která je provozuje, podléhá americké jurisdikci.

## Koho se týká

Každé společnosti, která podléhá americké jurisdikci: Google, Microsoft, Apple, Amazon, Cloudflare a menších amerických služeb, včetně Forward Email. Viz [všechny hodnocené služby se sídlem ve Spojených státech](/jurisdictions/united-states/).

Může zasáhnout i **neamerické služby, které ukládají data u amerických cloudových poskytovatelů**, protože žádost může dostat přímo cloudový poskytovatel. Užitečné otázky tedy jsou, kde společnost sídlí, jaká data existují a kdo drží klíče.

## Proč šifrování a minimum dat znamenají víc než umístění

Zákony se mění a každá země má způsob, jak si data vynutit. Rozhodující je, co poskytovatel **může** vydat:

| Situace | Kam žádost dosáhne |
| --- | --- |
| Pošta uložená jako prostý text | Vše ve schránce |
| Pošta šifrovaná v klidu klíči, které má poskytovatel | Vše, protože ji poskytovatel může dešifrovat |
| Pošta šifrovaná klíči odvozenými z hesla uživatele | Údaje o účtu a připojení, nikoli obsah zpráv |
| Neuchovávají se žádné záznamy | Nic o aktivitě |

Příklady:

- **Proton (Švýcarsko, mimo všechna uskupení Eyes)** podle své poslední výroční zprávy vyhověl 8 313 z 9 301 švýcarských právních příkazů a poskytl informace o účtech, které má. [Zdroj: zpráva o transparentnosti Proton](https://proton.me/legal/transparency)
- **Proton VPN (stejná společnost, stejná země)** nevyhověl žádnému, protože neuchovává žádné záznamy. [Zdroj: zpráva o transparentnosti Proton](https://proton.me/legal/transparency)
- **Tuta (Německo)** může německý soudce nařídit vydání schránek nebo jejich sledování v reálném čase. Pošta šifrovaná end-to-end zůstává šifrovaná. [Zdroj: zpráva o transparentnosti Tuta](https://tuta.com/blog/transparency-report)

Stejná společnost ve stejné zemi dosahuje odlišných výsledků podle toho, jaká data existují. Proto Privacy Ratings zobrazuje jurisdikci u každého hodnocení a hodnotí, co poskytovatelé dělají. Viz [jak se zachází s jurisdikcí](/jurisdictions/).

## Jak se CLOUD Act vztahuje na Forward Email

Forward Email sídlí ve Spojených státech a podléhá CLOUD Act. Jeho [technický whitepaper](https://forwardemail.net/technical-whitepaper.pdf) popisuje, jak jeho návrh omezuje, kam by žádost mohla dosáhnout:

- **Šifrované schránky.** Každá schránka je samostatně šifrovaný soubor SQLite. Whitepaper uvádí, že Forward Email nemá přístup k obsahu zpráv.
- **Žádné zaznamenávání obsahu ani metadat e-mailů na disk.** Forward Email nevede záznamy o tom, komu uživatelé píší.
- **Omezená data.** Vydat by šlo základní údaje o účtu (například e-mailovou adresu účtu, datum registrace a platební údaje) a omezené záznamy IP adres, které mohou být dočasně uchovávány kvůli zabezpečení a prevenci zneužití.
- **Pouze platný právní proces.** Žádosti vyžadují předvolání (subpoena), soudní příkaz nebo příkaz k prohlídce. Žádosti ze zahraničí musí přijít přes americký soud, smlouvu o vzájemné právní pomoci nebo dohodu podle CLOUD Act, která splňuje americké právní požadavky.
- **Oznámení a námitky.** Forward Email informuje uživatele, pokud to zákon dovoluje, a napadá příliš široké žádosti.

Forward Email spravuje Privacy Ratings. Jeho hodnocení používá stejná kritéria jako u každého jiného poskytovatele. Viz [hodnocení Forward Email](/email-providers/forward-email/) a [pravidla správy projektu](/governance/).

## Další četba

- [Ministerstvo spravedlnosti USA: zdroje ke CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: sledování podle oddílu 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
