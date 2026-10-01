<!-- source: 63c0d07d1a26 -->
# Irányítás

Hogyan születnek a döntések, hogyan választjuk ki az ajánlásokat, és hogyan kezeljük az összeférhetetlenséget.

## Karbantartók

A karbantartók átnézik és beolvasztják a pull requesteket, osztályozzák a hibajegyeket, és moderálják a Discussions felületet. A karbantartók listája a [`.github/CODEOWNERS`](.github/CODEOWNERS) fájlban található. Pontos, jól alátámasztott hozzájárulások után bárki karbantartóvá válhat.

## Hogyan fogadjuk el a változtatásokat

1. Minden változtatás pull requesten keresztül történik. Senki, a karbantartókat is beleértve, nem küld értékelésmódosítást közvetlenül a `main` ágra.
2. Minden pull requestnek át kell mennie az `npm test` ellenőrzésen (validálás és build).
3. Legalább egy karbantartó jóváhagyja a pull requestet.
4. A válaszokhoz elsődleges forrásból származó bizonyíték kell: hivatalos dokumentáció, forráskód, licencfájlok, közzétett auditjelentések vagy megismételhető tesztek. A tesztcikkek, blogbejegyzések és részletek nélküli marketingállítások nem bizonyítékok.
5. Ha a források ellentmondanak egymásnak, a legfrissebb elsődleges forrás dönt. Ha a helyzet így is tisztázatlan, a válasz „unknown” (ismeretlen).

## A kritériumok módosítása

A kritériumok határozzák meg az összes pontszámot, ezért a `criteria/` módosítása nagyobb körültekintést igényel:

- Először nyisson egy „Criteria change” hibajegyet vagy egy Discussions-beszélgetést.
- A pull request legalább 7 napig nyitva marad nyilvános véleményezésre.
- Két karbantartó jóváhagyása szükséges.
- A kritériumazonosítókat közzététel után soha nem nevezzük át. Egy kritériumot egy olyan pull requesttel lehet kivezetni, amely eltávolítja és megindokolja az eltávolítást.

## Ajánlások

- Minden kategóriában legfeljebb két ajánlás lehet.
- Minden ajánláshoz `pick_reason` kell, amely közérthetően megindokolja a választást.
- Minden kategóriában legfeljebb két ajánlás van, sorrendjüket a `pick: 1` és `pick: 2` határozza meg.
- Az ajánlások szerkesztői döntések. Külön jelennek meg, és soha nem módosítják a pontszámokat.
- Bárki megkérdőjelezhet egy ajánlást a „Picks” Discussions-kategóriában. A kifogásokra nyilvánosan válaszolunk.

## Összeférhetetlenség

A Privacy Ratingst a Forward Email mögött álló csapat tartja karban. A karbantartókhoz kapcsolódó bejegyzések „kapcsolt bejegyzések”. Jelenleg ez a Forward Emailt jelenti.

A kapcsolt bejegyzésekre vonatkozó szabályok:

- Minden kapcsolt bejegyzéshez tartozik egy `disclosure` (közlés), amely az oldala tetején jelenik meg.
- Az a pull request, amely egy kapcsolt bejegyzés pontszámát növeli vagy ajánlássá teszi, minden módosított válaszhoz bizonyítékot kell csatoljon, és a beolvasztás előtt legalább 7 napig nyitva kell maradnia.
- Az a pull request, amely érvényes bizonyítékkal csökkenti egy kapcsolt bejegyzés pontszámát, ugyanúgy kerül beolvasztásra, mint bármely más.
- A karbantartóknak közlést kell hozzáadniuk minden olyan bejegyzéshez, amelyhez nekik vagy munkáltatójuknak pénzügyi vagy személyes kapcsolata van.

## Pénz

- Nincsenek partnerlinkek. A validálás elutasítja az ajánlói vagy követési paramétereket tartalmazó URL-eket.
- Nincsenek fizetett elhelyezések, szponzorált bejegyzések vagy fizetett értékelések.
- A gyártók bárki máshoz hasonlóan, bizonyítékkal küldhetnek be javításokat, és jelezniük kell, hogy ők a gyártók.

## Moderálás

A hibajegyekre, pull requestekre és beszélgetésekre a [Magatartási kódex](CODE_OF_CONDUCT.md) vonatkozik. A karbantartók zárolhatják vagy elrejthetik a sértő, témától eltérő vagy reklámcélú hozzászólásokat.
