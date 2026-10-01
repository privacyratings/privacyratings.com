<!-- source: 37558129142b -->
# Mi a CLOUD Act?

A **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** egy amerikai törvény, amely egyetlen kérdésre ad választ: hozzáférhetnek-e az amerikai hatóságok egy amerikai vállalat adataihoz, ha azokat egy másik országban tárolják? A válasz: igen.

## Mit tesz

1. **A hely nem számít.** Az amerikai joghatóság alá tartozó szolgáltatónak érvényes amerikai jogi eljárás alapján ki kell adnia a „birtokában, őrizetében vagy ellenőrzése alatt” lévő adatokat, függetlenül attól, hogy a világ mely pontján tárolják azokat. [Forrás: Amerikai Igazságügyi Minisztérium](https://www.justice.gov/criminal/cloud-act-resources)
2. **Megállapodások más országokkal.** Az USA adathozzáférési megállapodásokat köthet, amelyek lehetővé teszik a megbízható külföldi kormányok számára, hogy súlyos bűncselekmények esetén közvetlenül kérjenek adatokat amerikai szolgáltatóktól, a lassabb kölcsönös jogsegélyszerződéses (MLAT) eljárás megkerülésével. [Forrás: Amerikai Igazságügyi Minisztérium](https://www.justice.gov/criminal/cloud-act-resources)
3. **Lehetőség a védekezésre.** A szolgáltatók kérhetik a bíróságtól egy megkeresés visszavonását vagy módosítását, ha az ütközik egy olyan másik ország jogszabályaival, amellyel megállapodás van érvényben.

Megállapodás van hatályban az **Egyesült Királysággal** és **Ausztráliával**. Tárgyalásokat jelentettek be **Kanadával** és az **Európai Unióval**. [Forrás: Amerikai Igazságügyi Minisztérium](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Mit nem tesz

- Nem hoz létre új megfigyelési jogköröket, és nem szünteti meg a bírói végzés szükségességét. Az amerikai hatóságoknak továbbra is érvényes jogi eljárásra van szükségük, a kommunikáció tartalmához pedig általában házkutatási végzés kell.
- Nem kényszeríti a szolgáltatót olyan adatok visszafejtésére, amelyeket nem tud visszafejteni. A szolgáltatónál lévő adatokra vonatkozik. A csak a felhasználónál lévő kulcsokkal titkosított adatok titkosítva maradnak.
- Nem csak az amerikai adatközpontokra vonatkozik. Az európai szerverhely választása nem segít, ha az azt üzemeltető vállalat amerikai joghatóság alá tartozik.

## Kit érint

Minden amerikai joghatóság alá tartozó vállalatot: a Google-t, a Microsoftot, az Apple-t, az Amazont, a Cloudflare-t és a kisebb amerikai szolgáltatásokat, köztük a Forward Emailt is. Lásd: [az összes értékelt, egyesült államokbeli székhelyű szolgáltatás](/jurisdictions/united-states/).

Elérheti a **nem amerikai szolgáltatásokat is, ha amerikai felhőszolgáltatóknál tárolnak adatokat**, mivel maga a felhőszolgáltató is kaphat megkeresést. Ezért a hasznos kérdés nemcsak az, hogy „hol van a vállalat?”, hanem az is, hogy „milyen adatok léteznek, és kinél vannak a kulcsok?”

## Miért fontosabb a titkosítás és az adattakarékosság a helynél

A törvények változnak, és minden országban van mód az adatok kikényszerítésére. A legfontosabb az, hogy egy szolgáltató mit **tud** kiadni:

| Helyzet | Amihez egy megkeresés hozzáférhet |
| --- | --- |
| Olvasható szövegként tárolt levelek | A postafiók teljes tartalma |
| Tároláskor a szolgáltatónál lévő kulcsokkal titkosított levelek | Minden, mert a szolgáltató vissza tudja fejteni |
| A felhasználó jelszavából származtatott kulcsokkal titkosított levelek | Fiókadatok és kapcsolódási adatok, az üzenetek tartalma nem |
| Nincsenek naplók | Semmi a tevékenységről |

Valós példák:

- **A Proton (Svájc, minden Eyes-megállapodáson kívül)** legutóbbi éves jelentése szerint 9301 svájci jogi végzésből 8313-nak eleget tett, és kiadta a birtokában lévő fiókadatokat. [Forrás: a Proton átláthatósági jelentése](https://proton.me/legal/transparency)
- **A Proton VPN (ugyanaz a vállalat, ugyanaz az ország)** egynek sem tett eleget, mert nem őriz naplókat. [Forrás: a Proton átláthatósági jelentése](https://proton.me/legal/transparency)
- **A Tutát (Németország)** egy német bíró kötelezheti postafiókok kiadására vagy valós idejű megfigyelésére. A végpontok között titkosított levelek titkosítva maradnak. [Forrás: a Tuta átláthatósági jelentése](https://tuta.com/blog/transparency-report)

Ugyanaz a vállalat ugyanabban az országban nagyon eltérő eredményt ér el attól függően, milyen adatok léteznek. Ezért mutatja a Privacy Ratings minden oldalon a joghatóságot, de azt pontozza, mit tesznek ténylegesen a szolgáltatók. Lásd: [hogyan kezeljük a joghatóságot](/jurisdictions/).

## Hogyan vonatkozik a CLOUD Act a Forward Emailre

A Forward Email székhelye az Egyesült Államokban van, és a CLOUD Act hatálya alá tartozik. [Műszaki tanulmánya](https://forwardemail.net/technical-whitepaper.pdf) leírja, hogyan korlátozza a kialakítása azt, amihez egy megkeresés hozzáférhet:

- **Titkosított postafiókok.** Minden postafiók egy egyedileg titkosított SQLite-fájl. A tanulmány szerint a Forward Email nem fér hozzá az üzenetek tartalmához.
- **Az e-mailek tartalma és metaadatai nem kerülnek lemezre naplózásra.** A Forward Email nem vezet nyilvántartást arról, kinek írnak a felhasználók.
- **Korlátozott adatok.** Kiadható lehet az alapvető fiókinformáció (például a fiók e-mail-címe, a regisztráció dátuma és a fizetési adatok), valamint korlátozott IP-címnaplók, amelyeket biztonsági és visszaélés-megelőzési célból átmenetileg megőrizhetnek.
- **Csak érvényes jogi eljárás.** A megkeresésekhez idézés, bírósági végzés vagy házkutatási végzés kell. Az USA-n kívülről érkező megkereséseknek amerikai bíróságon, kölcsönös jogsegélyszerződésen vagy az amerikai jogi követelményeknek megfelelő CLOUD Act-megállapodáson keresztül kell érkezniük.
- **Értesítés és jogorvoslat.** A felhasználókat értesítik, ha a jog megengedi, a túlzottan tág megkereséseket pedig megtámadják.

A Forward Email tartja karban a Privacy Ratingst. Értékelése ugyanazokat a kritériumokat használja, mint bármely más szolgáltatóé. Lásd: [a Forward Email értékelése](/email-providers/forward-email/) és [az irányítási szabályok](/governance/).

## További olvasnivaló

- [Amerikai Igazságügyi Minisztérium: CLOUD Act-források](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: a 702. szakasz szerinti megfigyelés](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
