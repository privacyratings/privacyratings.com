<!-- source: df34a6a5c6c4 -->
# Varför Privacy Ratings finns

Integritetsguider hjälper miljontals människor att välja bättre appar och tjänster, och många gör ett utmärkt arbete. De flesta har också samma svagheter:

- **Otydliga regler.** En tjänst tas med eller utesluts, och skälet finns i en forumtråd, en privat diskussion eller är inte publicerat alls.
- **Bara godkänt eller underkänt.** En lista säger ”rekommenderas” eller ingenting. Den visar inte hur nära något kom, eller vad som skulle ändra resultatet.
- **Påståenden utan kontroller.** Beskrivningar säger ”krypterad” eller ”inga loggar” utan att länka till något som läsaren kan kontrollera.
- **Inga tester.** Hostade tjänster kontrolleras sällan för grundläggande säkerhet som TLS-inställningar, säkerhetshuvuden eller e-postautentisering.
- **Separata plattformar.** Förslag och diskussioner sker i ett forum eller på en chattserver som kräver eget konto och egen moderering, skilt från själva innehållet.
- **Långsamma förändringar.** När en produkt ändras förblir listor ofta inaktuella eftersom uppdateringen hänger på ett fåtal personer.

Privacy Ratings är byggt för att lösa vart och ett av dessa problem.

## Från awesome-listor till en förvaltad resurs

Många av dessa guider började som listor på GitHub. Formatet ”awesome”-lista, som startades av [Sindre Sorhus](https://github.com/sindresorhus/awesome), gjorde det enkelt för vem som helst att publicera en kurerad lista, och tusentals awesome-listor följde, många av dem forkar av varandra. Listor som [Awesome Privacy](https://github.com/lissy93/awesome-privacy) gör ett värdefullt arbete, och många poster här listades först där.

Formatet har en svaghet: de flesta listor är beroende av en eller två frivilliga. När en förvaltare går vidare blir listan tyst, arkiveras eller delas upp i forkar som var och en blir inaktuell. Läsarna kan inte avgöra vilken kopia som är aktuell, och ingenting i en lista testas eller poängsätts.

**Privacy Ratings stöds och drivs av ett företag, [Forward Email](https://forwardemail.net).** Det är inte beroende av frivilliga som kan lämna eller arkivera repositoriet. Data finns i strukturerade filer i stället för en enda README, så skript validerar, poängsätter och testar dem varje dag. Koden har öppen källkod och innehållet är licensierat under CC BY-SA, så vem som helst kan kopiera, kontrollera och förbättra det.

## Vad som är annorlunda

**Varje regel är offentlig.** Varje kategori har en kort lista med frågor som viktas från 1 till 3. Frågorna, vad varje svar betyder och hur det kan kontrolleras finns i mappen [`criteria/`](criteria/). Se [kriterierna](https://privacyratings.com/criteria/).

**Svaren kräver belägg.** Ett ”ja” eller ”delvis” måste länka till en källa som vem som helst kan kontrollera: dokumentation, källkod, en licensfil eller en granskningsrapport. Allt utan belägg räknas som ”okänt” och ger noll poäng. En post får ett bokstavsbetyg först när tillräckligt många av dess svar stöds av belägg.

**Poäng från 0 till 100.** Varje post får en poäng, så att du kan se hur tjänsterna står sig mot varandra och var var och en brister.

**Automatiska säkerhetstester.** Scan-arbetsflödet testar hostade tjänster enligt ett schema med Qualys SSL Labs, Mozilla HTTP Observatory och Internet.nl (inklusive Internet.nl:s e-posttest för e-postleverantörer). Det sparar resultaten i repositoriet, och varje sida länkar till dem. Se [SCANS.md](SCANS.md).

**Öppet redovisad jurisdiktion.** Varje bedömning visar var företaget är baserat, om landet ingår i Five, Nine eller Fourteen Eyes, om GDPR gäller och om amerikanska CLOUD Act når det. Poängen utelämnar jurisdiktionen, eftersom vad en leverantör kan lämna ut främst beror på vad den sparar och vem som har nycklarna. Se [jurisdiktioner](https://privacyratings.com/jurisdictions/) och [CLOUD Act](https://privacyratings.com/cloud-act/).

**Bidrag sker på GitHub.** Förslag och rättelser är ärenden på GitHub, ändringar är pull requests och diskussioner förs i GitHub Discussions. Det finns inget separat forum, ingen chattserver och inget kontosystem, och Git sparar en offentlig historik över varje ändring av varje bedömning.

**Öppna data.** Bedömningarna är vanliga Markdown- och YAML-filer, och bygget publicerar hela datamängden som JSON. Innehållet är licensierat under CC BY-SA 4.0, så vem som helst kan återanvända det.

**Rekommendationer märks som rekommendationer.** Förvaltarna väljer en eller två rekommendationer per kategori och motiverar var och en. Rekommendationerna visas separat och ändrar aldrig poängen, så du kan skilja redaktionella bedömningar från uppmätta resultat.

## Vem som förvaltar det

Privacy Ratings stöds, finansieras och förvaltas av [Forward Email](https://forwardemail.net), en integritetsfokuserad e-posttjänst som också bedöms här. Den finansieringen gör att projektet förvaltas långsiktigt. Det är också en intressekonflikt, och projektet hanterar den öppet:

- Forward Emails poäng bygger på samma kriterier som alla andra e-postleverantörers.
- Dess post har en upplysning, och det har även varje post med någon annan koppling till förvaltarna.
- Ändringar som höjer poängen för en anknuten post måste länka till belägg och vara öppna för offentlig granskning innan de sammanfogas. Se [GOVERNANCE.md](GOVERNANCE.md).
- Det finns inga affiliatelänkar, betalda placeringar eller sponsringar. Valideringen avvisar länkar med hänvisningsparametrar.

Om en bedömning ser fel ut är hela processen att öppna ett ärende eller en pull request med belägg.

## Tack

Många poster listades först från [Awesome Privacy](https://github.com/lissy93/awesome-privacy), som är släppt under CC0. Data om hosting av e-postservrar kommer från [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
