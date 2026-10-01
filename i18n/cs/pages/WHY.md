<!-- source: df34a6a5c6c4 -->
# Proč Privacy Ratings existuje

Průvodci soukromím pomáhají milionům lidí vybrat si lepší aplikace a služby a mnozí odvádějí výbornou práci. Většina z nich také sdílí stejné slabiny:

- **Nejasná pravidla.** Služba je uvedena nebo vynechána a důvodem je vlákno na fóru, soukromá diskuze, nebo není zveřejněn vůbec.
- **Jen vyhovuje, nebo nevyhovuje.** Seznam říká „doporučeno“, nebo neříká nic. Neukazuje, jak blízko něco bylo, ani co by výsledek změnilo.
- **Tvrzení bez ověření.** Popisy uvádějí „šifrováno“ nebo „bez záznamů“, aniž by odkazovaly na cokoli, co si čtenář může ověřit.
- **Žádné testování.** Hostované služby se jen zřídka kontrolují z hlediska základního zabezpečení, jako je nastavení TLS, bezpečnostní hlavičky nebo ověřování e-mailu.
- **Oddělené platformy.** Návrhy a debaty probíhají na fóru nebo chatovém serveru, který vyžaduje vlastní účet a moderování, odděleně od samotného obsahu.
- **Pomalé změny.** Když se produkt změní, seznamy často zůstávají zastaralé, protože jejich aktualizace závisí na několika lidech.

Privacy Ratings vzniklo, aby každou z těchto slabin odstranilo.

## Od „awesome“ seznamů ke spravovanému zdroji

Mnoho z těchto průvodců začalo jako seznamy na GitHubu. Formát „awesome“ seznamů, který zavedl [Sindre Sorhus](https://github.com/sindresorhus/awesome), umožnil komukoli snadno zveřejnit kurátorovaný seznam a následovaly tisíce seznamů awesome-něco, mnohé z nich forky jeden druhého. Seznamy jako [Awesome Privacy](https://github.com/lissy93/awesome-privacy) odvádějí cennou práci a mnoho zdejších položek bylo poprvé uvedeno právě tam.

Tento formát má slabinu: většina seznamů závisí na jednom nebo dvou dobrovolnících. Když správce odejde, seznam utichne, je archivován nebo se rozpadne na forky, z nichž každý postupně zastarává. Čtenáři nepoznají, která kopie je aktuální, a nic v seznamu není testováno ani hodnoceno.

**Privacy Ratings podporuje a provozuje firma, [Forward Email](https://forwardemail.net).** Nezávisí na dobrovolnících, kteří mohou odejít nebo repozitář archivovat. Data jsou ve strukturovaných souborech místo jediného souboru README, takže je skripty každý den validují, bodují a testují. Kód je open source a obsah je pod licencí CC BY-SA, takže ho kdokoli může zkopírovat, zkontrolovat a vylepšit.

## Co je jinak

**Každé pravidlo je veřejné.** Každá kategorie má krátký seznam otázek s váhou od 1 do 3. Otázky, význam každé odpovědi a způsob jejího ověření jsou ve složce [`criteria/`](criteria/). Viz [kritéria](https://privacyratings.com/criteria/).

**Odpovědi potřebují důkazy.** Odpověď „ano“ nebo „částečně“ musí odkazovat na zdroj, který si může ověřit kdokoli: dokumentaci, zdrojový kód, licenční soubor nebo zprávu z auditu. Cokoli bez důkazů se počítá jako „neznámé“ a získá nula bodů. Položka dostane známku, jen když je dostatek jejích odpovědí podložen důkazy.

**Skóre od 0 do 100.** Každá položka získá skóre, takže vidíte, jak si služby stojí v porovnání a kde která zaostává.

**Automatické bezpečnostní testy.** Workflow Scan pravidelně testuje hostované služby pomocí Qualys SSL Labs, Mozilla HTTP Observatory a Internet.nl (u poskytovatelů e-mailu včetně e-mailového testu Internet.nl). Výsledky ukládá do repozitáře a každá stránka na ně odkazuje. Viz [SCANS.md](SCANS.md).

**Jurisdikce otevřeně.** Každé hodnocení ukazuje, kde společnost sídlí, zda daná země patří do Five, Nine nebo Fourteen Eyes, zda se uplatní GDPR a zda se na ni vztahuje americký CLOUD Act. Skóre jurisdikci nezahrnuje, protože co může poskytovatel vydat, závisí hlavně na tom, co uchovává a kdo drží klíče. Viz [jurisdikce](https://privacyratings.com/jurisdictions/) a [CLOUD Act](https://privacyratings.com/cloud-act/).

**Příspěvky probíhají na GitHubu.** Návrhy a opravy jsou issues na GitHubu, změny jsou pull requesty a debaty probíhají v GitHub Discussions. Neexistuje žádné samostatné fórum, chatový server ani systém účtů a Git uchovává veřejnou historii každé změny každého hodnocení.

**Otevřená data.** Hodnocení jsou prosté soubory Markdown a YAML a sestavení zveřejňuje celou datovou sadu jako JSON. Obsah je licencován pod CC BY-SA 4.0, takže ho může kdokoli znovu použít.

**Naše volby jsou označeny jako volby.** Správci vybírají v každé kategorii jednu nebo dvě volby a každou zdůvodňují. Naše volby se zobrazují odděleně a nikdy nemění skóre, takže můžete rozlišit redakční úsudek od naměřených výsledků.

## Kdo projekt spravuje

Privacy Ratings podporuje, financuje a spravuje [Forward Email](https://forwardemail.net), e-mailová služba zaměřená na soukromí, která je zde také hodnocena. Toto financování zajišťuje dlouhodobou údržbu projektu. Je to také střet zájmů a projekt ho řeší otevřeně:

- Skóre Forward Email používá stejná kritéria jako u každého jiného poskytovatele e-mailu.
- Jeho položka nese upozornění, stejně jako každá položka s jiným spojením se správci.
- Změny, které zvyšují skóre spřízněné položky, musí odkazovat na důkazy a před sloučením zůstat otevřené k veřejné kontrole. Viz [GOVERNANCE.md](GOVERNANCE.md).
- Žádné affiliate odkazy, placená umístění ani sponzorství. Validace odmítá odkazy s referral parametry.

Pokud se vám hodnocení zdá chybné, celý postup spočívá v tom, že otevřete issue nebo pull request s důkazy.

## Poděkování

Mnoho položek bylo poprvé uvedeno z [Awesome Privacy](https://github.com/lissy93/awesome-privacy), vydaného pod CC0. Údaje o hostingu poštovních serverů pocházejí z [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
