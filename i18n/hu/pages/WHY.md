<!-- source: df34a6a5c6c4 -->
# Miért létezik a Privacy Ratings?

Az adatvédelmi útmutatók emberek millióinak segítenek jobb alkalmazásokat és szolgáltatásokat választani. Sokan kiváló munkát végeznek. A legtöbbjüknek azonban ugyanazok a gyengeségei:

- **Homályos szabályok.** Egy szolgáltatás felkerül a listára vagy kimarad, és az ok egy fórumszál, egy zárt megbeszélés, vagy egyáltalán nincs közzétéve.
- **Csak megfelelt vagy nem felelt meg.** Egy lista vagy azt mondja, „ajánlott”, vagy semmit. Nem mutatja meg, mennyire volt közel valami, vagy mi változtatná meg az eredményt.
- **Állítások ellenőrzés nélkül.** A leírások azt mondják, „titkosított” vagy „nincsenek naplók”, de semmire sem hivatkoznak, amit az olvasó ellenőrizhetne.
- **Nincs tesztelés.** A hosztolt szolgáltatások alapvető biztonságát, például a TLS-beállításokat, a biztonsági fejléceket vagy az e-mail-hitelesítést, ritkán ellenőrzik.
- **Külön platformok.** A javaslatok és viták egy fórumon vagy csevegőszerveren zajlanak, amelyhez külön fiók és moderálás kell, elkülönülve a tényleges tartalomtól.
- **Lassú változás.** Ha egy termék megváltozik, a listák gyakran elavultak maradnak, mert a frissítésük néhány emberen múlik.

A Privacy Ratings e problémák mindegyikének megoldására készült.

## Az awesome listáktól a karbantartott forrásig

Sok ilyen útmutató GitHub-listaként indult. Az „awesome” listaformátum, amelyet [Sindre Sorhus](https://github.com/sindresorhus/awesome) indított el, bárki számára egyszerűvé tette egy válogatott lista közzétételét, és több ezer awesome-valami lista követte, sok közülük egymás forkja. Az olyan listák, mint az [Awesome Privacy](https://github.com/lissy93/awesome-privacy), értékes munkát végeznek, és sok itteni bejegyzés először ott szerepelt.

A formátumnak van egy gyengesége: a legtöbb lista egy-két önkéntesen múlik. Ha egy karbantartó továbbáll, a lista elcsendesedik, archiválják, vagy forkokra szakad, amelyek mind elavulnak. Az olvasók nem tudják eldönteni, melyik példány az aktuális, és a listákban semmit sem tesztelnek vagy pontoznak.

**A Privacy Ratingst egy vállalkozás, a [Forward Email](https://forwardemail.net) támogatja és működteti.** Nem függ olyan önkéntesektől, akik elmehetnek vagy archiválhatják a tárolót. Az adatok egyetlen README helyett strukturáltak, így naponta automatikusan validálhatók, pontozhatók és tesztelhetők. És mivel minden nyílt forráskódú és CC BY-SA licencű, a közösség mindig lemásolhatja, ellenőrizheti és javíthatja.

## Miben más

**Minden szabály nyilvános.** Minden kategóriához tartozik egy rövid kérdéslista, 1-től 3-ig terjedő súlyokkal. A kérdések, az egyes válaszok jelentése és ellenőrzésük módja mind a [`criteria/`](criteria/) mappában található. Lásd: [a kritériumok](https://privacyratings.com/criteria/).

**Minden válaszhoz bizonyíték tartozik.** Az „igen” vagy „részben” válasznak bárki által ellenőrizhető forrásra kell hivatkoznia: dokumentációra, forráskódra, licencfájlra vagy auditjelentésre. Ami bizonyíték nélküli, „ismeretlen”-nek számít, és nulla pontot ér. Egy bejegyzés csak akkor kap betűosztályzatot, ha válaszainak elegendő része bizonyítékkal alátámasztott.

**Pontszámok, nem csak listák.** Minden bejegyzés 0 és 100 közötti pontszámot kap, így az olvasók láthatják, hogyan viszonyulnak egymáshoz a szolgáltatások, és pontosan hol maradnak el.

**Automatikus biztonsági tesztek.** A hosztolt szolgáltatásokat ütemezetten teszteljük a Qualys SSL Labs, a Mozilla HTTP Observatory és az Internet.nl segítségével (e-mail-szolgáltatóknál az Internet.nl e-mail-tesztjét is beleértve). Az eredmények a tárolóba kerülnek, és minden oldalról elérhetők. Lásd: [SCANS.md](SCANS.md).

**Nyíltan kezelt joghatóság.** Minden oldal mutatja, hol van a vállalat székhelye, tagja-e az ország a Five, Nine vagy Fourteen Eyes szövetségnek, vonatkozik-e rá a GDPR, és elér-e hozzá az amerikai CLOUD Act. A joghatóságot mutatjuk, de nem pontozzuk, mert hogy egy szolgáltató mit adhat ki, az főleg attól függ, mit őriz meg és kinél vannak a kulcsok. Lásd: [joghatóságok](https://privacyratings.com/jurisdictions/) és [a CLOUD Act](https://privacyratings.com/cloud-act/).

**Minden a GitHubon történik.** A javaslatok és javítások GitHub-hibajegyek. A változtatások pull requestek. A viták a GitHub Discussionsben zajlanak. Nincs külön fórum, csevegőszerver vagy fiókrendszer. Minden értékelés minden változtatásának nyilvános előzménye van.

**Nyílt adatok.** Az értékelések egyszerű Markdown- és YAML-fájlok, a teljes adatkészlet pedig JSON formátumban is elérhető. A tartalom CC BY-SA 4.0 licencű, így bárki újrafelhasználhatja.

**Az ajánlások ajánlásként vannak jelölve.** A karbantartók kategóriánként egy vagy két ajánlást választanak, és mindegyiket megindokolják. Az ajánlások külön jelennek meg, és soha nem módosítják a pontszámokat, így az olvasó mindig meg tudja különböztetni a szerkesztői döntést a mért eredményektől.

## Ki tartja karban

A Privacy Ratingst a [Forward Email](https://forwardemail.net), egy adatvédelemre összpontosító e-mail-szolgáltatás támogatja, finanszírozza és tartja karban, amely itt szintén értékelve van. Ez hosszú távon biztosítja a projekt karbantartását, ugyanakkor összeférhetetlenséget is jelent, ezért nyíltan kezeljük:

- A Forward Email ugyanazon kritériumok alapján kap pontszámot, mint bármely más e-mail-szolgáltató.
- Bejegyzésén közlés szerepel, ahogy minden olyan bejegyzésen is, amely más módon kapcsolódik a karbantartókhoz.
- A kapcsolt bejegyzések pontszámát növelő változtatásoknak bizonyítékra kell hivatkozniuk, és a beolvasztás előtt nyitva kell maradniuk nyilvános átnézésre. Lásd: [GOVERNANCE.md](GOVERNANCE.md).
- Nincsenek partnerlinkek, fizetett elhelyezések vagy szponzorációk. A validálás elutasítja az ajánlói paramétereket tartalmazó hivatkozásokat.

Ha egy értékelés hibásnak tűnik, nyisson hibajegyet vagy pull requestet bizonyítékkal. Ez a teljes folyamat.

## Köszönetnyilvánítás

Sok bejegyzés először az [Awesome Privacy](https://github.com/lissy93/awesome-privacy) listában szerepelt, amely CC0 licenc alatt jelent meg. A levelezőszerver-hosztingra vonatkozó adatok az [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers) listából származnak.
