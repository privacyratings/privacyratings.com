<!-- source: 2f40b8f7e8ef -->
# Wat is de CLOUD Act?

De **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** is een Amerikaanse wet die één vraag beantwoordt: kunnen Amerikaanse autoriteiten gegevens krijgen van een Amerikaans bedrijf wanneer die gegevens in een ander land zijn opgeslagen? Het antwoord is ja.

## Wat de wet doet

1. **Locatie maakt niet uit.** Een provider die onder Amerikaanse jurisdictie valt, moet gegevens in zijn "possession, custody, or control" (bezit, bewaring of zeggenschap) afstaan op grond van een geldig Amerikaans juridisch bevel, waar ter wereld die gegevens ook zijn opgeslagen. [Bron: Amerikaans ministerie van Justitie](https://www.justice.gov/criminal/cloud-act-resources)
2. **Overeenkomsten met andere landen.** De VS kunnen overeenkomsten over toegang tot gegevens sluiten waarmee vertrouwde buitenlandse overheden bij ernstige misdrijven rechtstreeks gegevens kunnen opvragen bij Amerikaanse providers, zonder de tragere procedure voor wederzijdse rechtshulp (MLAT). [Bron: Amerikaans ministerie van Justitie](https://www.justice.gov/criminal/cloud-act-resources)
3. **Een manier om bezwaar te maken.** Providers kunnen een rechter vragen een verzoek te annuleren of te wijzigen wanneer het in strijd is met de wetten van een ander land waarmee een overeenkomst bestaat.

Er zijn overeenkomsten van kracht met het **Verenigd Koninkrijk** en **Australië**. Onderhandelingen zijn aangekondigd met **Canada** en de **Europese Unie**. [Bron: Amerikaans ministerie van Justitie](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Wat de wet niet doet

- Ze creëert geen nieuwe surveillancebevoegdheden en schaft de noodzaak van een bevel niet af. Amerikaanse autoriteiten hebben nog steeds een geldig juridisch bevel nodig, en voor de inhoud van communicatie is over het algemeen een huiszoekingsbevel nodig.
- Ze dwingt een provider niet om gegevens te ontsleutelen die hij niet kan ontsleutelen. Ze geldt voor gegevens die de provider heeft. Gegevens die zijn versleuteld met sleutels die alleen de gebruiker heeft, blijven versleuteld.
- Ze geldt niet alleen voor Amerikaanse datacenters. Kiezen voor een serverlocatie in Europa helpt niet als het bedrijf dat de server beheert onder Amerikaanse jurisdictie valt.

## Wie erdoor wordt geraakt

Elk bedrijf dat onder Amerikaanse jurisdictie valt: Google, Microsoft, Apple, Amazon, Cloudflare en kleinere Amerikaanse diensten, waaronder Forward Email. Zie [alle beoordeelde diensten gevestigd in de Verenigde Staten](/jurisdictions/united-states/).

De wet kan ook **niet-Amerikaanse diensten raken die gegevens opslaan bij Amerikaanse cloudproviders**, omdat de cloudprovider zelf een verzoek kan ontvangen. Daarom is de nuttige vraag niet alleen "waar is het bedrijf gevestigd?", maar ook "welke gegevens bestaan er, en wie heeft de sleutels?"

## Waarom versleuteling en minimale gegevens belangrijker zijn dan locatie

Wetten veranderen, en elk land heeft een manier om gegevens af te dwingen. Het belangrijkste is wat een provider **kan** afstaan:

| Situatie | Wat een verzoek kan bereiken |
| --- | --- |
| Mail opgeslagen als platte tekst | Alles in de mailbox |
| Mail in rust versleuteld met sleutels van de provider | Alles, omdat de provider de mail kan ontsleutelen |
| Mail versleuteld met sleutels afgeleid van het wachtwoord van de gebruiker | Accountgegevens en verbindingsgegevens, niet de inhoud van berichten |
| Er worden geen logs bijgehouden | Niets over activiteit |

Echte voorbeelden:

- **Proton (Zwitserland, buiten alle Eyes-regelingen)** gaf in het meest recente jaarverslag gehoor aan 8.313 van de 9.301 Zwitserse juridische bevelen en verstrekte daarbij accountinformatie die het in bezit heeft. [Bron: transparantierapport van Proton](https://proton.me/legal/transparency)
- **Proton VPN (hetzelfde bedrijf, hetzelfde land)** gaf aan geen enkel bevel gehoor, omdat het geen logs bijhoudt. [Bron: transparantierapport van Proton](https://proton.me/legal/transparency)
- **Tuta (Duitsland)** kan door een Duitse rechter worden bevolen mailboxen af te staan of realtime te monitoren. End-to-end versleutelde mail blijft versleuteld. [Bron: transparantierapport van Tuta](https://tuta.com/blog/transparency-report)

Hetzelfde bedrijf in hetzelfde land krijgt heel verschillende resultaten, afhankelijk van welke gegevens er bestaan. Daarom toont Privacy Ratings de jurisdictie op elke pagina, maar scoort het wat providers daadwerkelijk doen. Zie [hoe met jurisdictie wordt omgegaan](/jurisdictions/).

## Hoe de CLOUD Act van toepassing is op Forward Email

Forward Email is gevestigd in de Verenigde Staten en valt onder de CLOUD Act. De [technische whitepaper](https://forwardemail.net/technical-whitepaper.pdf) beschrijft hoe het ontwerp beperkt wat een verzoek kan bereiken:

- **Versleutelde mailboxen.** Elke mailbox is een afzonderlijk versleuteld SQLite-bestand. Volgens de whitepaper heeft Forward Email geen toegang tot de inhoud van berichten.
- **Geen logging van e-mailinhoud of metadata naar schijf.** Forward Email houdt niet bij naar wie gebruikers schrijven.
- **Beperkte gegevens.** Wat kan worden vrijgegeven, is basisinformatie over het account (zoals het e-mailadres van het account, de aanmelddatum en betaalgegevens) en beperkte logs van IP-adressen die tijdelijk kunnen worden bewaard voor beveiliging en het voorkomen van misbruik.
- **Alleen een geldig juridisch bevel.** Verzoeken vereisen een dagvaarding, een gerechtelijk bevel of een huiszoekingsbevel. Verzoeken van buiten de VS moeten via een Amerikaanse rechtbank, een verdrag inzake wederzijdse rechtshulp of een CLOUD Act-overeenkomst lopen die aan de Amerikaanse wettelijke vereisten voldoet.
- **Melding en bezwaar.** Gebruikers worden geïnformeerd wanneer de wet dat toestaat, en tegen te ruime verzoeken wordt bezwaar gemaakt.

Forward Email onderhoudt Privacy Ratings. De beoordeling ervan gebruikt dezelfde criteria als die van elke andere provider. Zie [de beoordeling van Forward Email](/email-providers/forward-email/) en [de bestuursregels](/governance/).

## Verder lezen

- [Amerikaans ministerie van Justitie: bronnen over de CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: surveillance op grond van Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
