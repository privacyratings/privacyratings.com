<!-- source: 2f40b8f7e8ef -->
# Vad är CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** är en amerikansk lag som besvarar en fråga: kan amerikanska myndigheter få ut data från ett amerikanskt företag när dessa data lagras i ett annat land? Svaret är ja.

## Vad lagen gör

1. **Platsen spelar ingen roll.** En leverantör som omfattas av amerikansk jurisdiktion måste lämna ut data som den har i sin ”possession, custody, or control” (besittning, förvaring eller kontroll) som svar på giltiga amerikanska rättsliga förfaranden, oavsett var i världen dessa data lagras. [Källa: USA:s justitiedepartement](https://www.justice.gov/criminal/cloud-act-resources)
2. **Avtal med andra länder.** USA kan ingå avtal om åtkomst till data som låter betrodda utländska regeringar begära data direkt från amerikanska leverantörer vid allvarliga brott, utan att gå via det långsammare förfarandet med avtal om ömsesidig rättslig hjälp (MLAT). [Källa: USA:s justitiedepartement](https://www.justice.gov/criminal/cloud-act-resources)
3. **Ett sätt att invända.** Leverantörer kan be en domstol att upphäva eller ändra en begäran när den strider mot lagarna i ett annat land som har ett avtal.

Avtal gäller med **Storbritannien** och **Australien**. Förhandlingar har tillkännagetts med **Kanada** och **Europeiska unionen**. [Källa: USA:s justitiedepartement](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Vad lagen inte gör

- Den skapar inga nya övervakningsbefogenheter och tar inte bort kravet på domstolsbeslut. Amerikanska myndigheter behöver fortfarande ett giltigt rättsligt förfarande, och innehållet i kommunikation kräver i regel ett husrannsakningsbeslut.
- Den tvingar inte en leverantör att dekryptera data som den inte kan dekryptera. Den omfattar data som leverantören har. Data som krypterats med nycklar som bara användaren har förblir krypterade.
- Den gäller inte bara amerikanska datacenter. Att välja en serverplats i Europa hjälper inte om företaget som driver den omfattas av amerikansk jurisdiktion.

## Vilka som berörs

Alla företag som omfattas av amerikansk jurisdiktion: Google, Microsoft, Apple, Amazon, Cloudflare och mindre amerikanska tjänster, inklusive Forward Email. Se [alla bedömda tjänster baserade i USA](/jurisdictions/united-states/).

Lagen kan också nå **icke-amerikanska tjänster som lagrar data hos amerikanska molnleverantörer**, eftersom molnleverantören själv kan få en begäran. Därför är den användbara frågan inte bara ”var finns företaget?” utan också ”vilka data finns, och vem har nycklarna?”

## Varför kryptering och minimala data betyder mer än platsen

Lagar ändras, och varje land har ett sätt att tvinga fram data. Det viktigaste är vad en leverantör **kan** lämna ut:

| Situation | Vad en begäran kan nå |
| --- | --- |
| E-post lagrad i klartext | Allt i brevlådan |
| E-post krypterad i vila med nycklar som leverantören har | Allt, eftersom leverantören kan dekryptera den |
| E-post krypterad med nycklar som härleds från användarens lösenord | Kontouppgifter och anslutningsdata, inte meddelandenas innehåll |
| Inga loggar sparas | Ingenting om aktivitet |

Verkliga exempel:

- **Proton (Schweiz, utanför alla Eyes-samarbeten)** efterkom 8 313 av 9 301 schweiziska rättsliga beslut i sin senaste årsrapport och lämnade ut kontoinformation som företaget har. [Källa: Protons transparensrapport](https://proton.me/legal/transparency)
- **Proton VPN (samma företag, samma land)** efterkom inga, eftersom tjänsten inte sparar några loggar. [Källa: Protons transparensrapport](https://proton.me/legal/transparency)
- **Tuta (Tyskland)** kan av en tysk domare beordras att lämna ut brevlådor eller övervaka dem i realtid. Totalsträckskrypterad e-post förblir krypterad. [Källa: Tutas transparensrapport](https://tuta.com/blog/transparency-report)

Samma företag i samma land får mycket olika resultat beroende på vilka data som finns. Därför visar Privacy Ratings jurisdiktionen på varje sida men poängsätter vad leverantörerna faktiskt gör. Se [hur jurisdiktion hanteras](/jurisdictions/).

## Hur CLOUD Act gäller för Forward Email

Forward Email är baserat i USA och omfattas av CLOUD Act. Dess [tekniska whitepaper](https://forwardemail.net/technical-whitepaper.pdf) beskriver hur tjänstens utformning begränsar vad en begäran kan nå:

- **Krypterade brevlådor.** Varje brevlåda är en individuellt krypterad SQLite-fil. Enligt whitepapern kan Forward Email inte komma åt meddelandenas innehåll.
- **Ingen loggning av e-postinnehåll eller metadata till disk.** Forward Email sparar inga uppgifter om vem användarna skriver till.
- **Begränsade data.** Det som skulle kunna lämnas ut är grundläggande kontoinformation (som kontots e-postadress, registreringsdatum och betalningsuppgifter) och begränsade loggar över IP-adresser som kan sparas tillfälligt för säkerhet och förebyggande av missbruk.
- **Endast giltiga rättsliga förfaranden.** Förfrågningar kräver en stämning, ett domstolsbeslut eller ett husrannsakningsbeslut. Förfrågningar från utanför USA måste komma via en amerikansk domstol, ett avtal om ömsesidig rättslig hjälp eller ett CLOUD Act-avtal som uppfyller amerikanska rättsliga krav.
- **Information och invändningar.** Användarna informeras när lagen tillåter det, och alltför breda förfrågningar bestrids.

Forward Email förvaltar Privacy Ratings. Dess bedömning använder samma kriterier som för alla andra leverantörer. Se [bedömningen av Forward Email](/email-providers/forward-email/) och [reglerna för styrning](/governance/).

## Läs mer

- [USA:s justitiedepartement: resurser om CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: övervakning enligt Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
