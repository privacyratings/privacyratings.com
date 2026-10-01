<!-- source: df34a6a5c6c4 -->
# Waarom Privacy Ratings bestaat

Privacygidsen helpen miljoenen mensen betere apps en diensten te kiezen. Veel ervan doen uitstekend werk. Maar de meeste hebben dezelfde zwakke punten:

- **Onduidelijke regels.** Een dienst wordt opgenomen of weggelaten, en de reden staat in een forumthread, een besloten discussie of wordt helemaal niet gepubliceerd.
- **Alleen geslaagd of gezakt.** Een lijst zegt "aanbevolen" of zegt niets. Ze laat niet zien hoe dicht iets erbij kwam, of wat het resultaat zou veranderen.
- **Beweringen zonder controle.** Beschrijvingen zeggen "versleuteld" of "geen logs" zonder te linken naar iets wat een lezer kan controleren.
- **Geen tests.** Gehoste diensten worden zelden gecontroleerd op basisbeveiliging zoals TLS-instellingen, beveiligingsheaders of e-mailauthenticatie.
- **Aparte platforms.** Voorstellen en discussies vinden plaats op een forum of chatserver met een eigen account en eigen moderatie, los van de eigenlijke inhoud.
- **Traag in verandering.** Wanneer een product verandert, blijven lijsten vaak verouderd, omdat het bijwerken ervan van een paar mensen afhangt.

Privacy Ratings is gebouwd om elk van deze punten op te lossen.

## Van awesome-lijsten naar een onderhouden bron

Veel van deze gidsen begonnen als lijsten op GitHub. Het formaat van de "awesome"-lijst, gestart door [Sindre Sorhus](https://github.com/sindresorhus/awesome), maakte het voor iedereen eenvoudig om een samengestelde lijst te publiceren, en er volgden duizenden awesome-lijsten, waarvan veel forks van elkaar. Lijsten zoals [Awesome Privacy](https://github.com/lissy93/awesome-privacy) doen waardevol werk, en veel vermeldingen hier werden daar voor het eerst vermeld.

Het formaat heeft een zwak punt: de meeste lijsten zijn afhankelijk van één of twee vrijwilligers. Wanneer een beheerder vertrekt, wordt het stil rond de lijst, wordt ze gearchiveerd of splitst ze zich op in forks die elk verouderen. Lezers kunnen niet zien welke kopie actueel is, en niets in een lijst wordt getest of gescoord.

**Privacy Ratings wordt gesteund en beheerd door een bedrijf, [Forward Email](https://forwardemail.net).** Het is niet afhankelijk van vrijwilligers die kunnen vertrekken of de repository kunnen archiveren. De gegevens zijn gestructureerd in plaats van één README, zodat ze elke dag automatisch kunnen worden gevalideerd, gescoord en getest. En omdat alles open source is en onder CC BY-SA valt, kan de gemeenschap het altijd kopiëren, controleren en verbeteren.

## Wat er anders is

**Elke regel is openbaar.** Elke categorie heeft een korte lijst met vragen met een gewicht van 1 tot 3. De vragen, de betekenis van elk antwoord en hoe u het kunt controleren staan allemaal in de map [`criteria/`](criteria/). Zie [de criteria](https://privacyratings.com/criteria/).

**Elk antwoord heeft bewijs.** Een "ja" of "gedeeltelijk" moet linken naar een bron die iedereen kan controleren: documentatie, broncode, een licentiebestand of een auditrapport. Alles zonder bewijs telt als "onbekend" en levert nul punten op. Een vermelding krijgt pas een lettercijfer wanneer genoeg antwoorden met bewijs zijn onderbouwd.

**Scores, niet alleen lijsten.** Elke vermelding krijgt een score van 0 tot 100, zodat lezers kunnen zien hoe diensten zich tot elkaar verhouden en precies waar elke dienst tekortschiet.

**Geautomatiseerde beveiligingstests.** Gehoste diensten worden volgens een schema getest met Qualys SSL Labs, Mozilla HTTP Observatory en Internet.nl (inclusief de Internet.nl-e-mailtest voor e-mailproviders). De resultaten worden in de repository opgeslagen en vanaf elke pagina gelinkt. Zie [SCANS.md](SCANS.md).

**Jurisdictie in de openbaarheid.** Elke pagina toont waar het bedrijf gevestigd is, of dat land tot de Five, Nine of Fourteen Eyes behoort, of de AVG van toepassing is en of de Amerikaanse CLOUD Act er vat op heeft. De jurisdictie wordt getoond maar niet gescoord, omdat wat een provider kan afstaan vooral afhangt van wat hij bewaart en wie de sleutels heeft. Zie [jurisdicties](https://privacyratings.com/jurisdictions/) en [de CLOUD Act](https://privacyratings.com/cloud-act/).

**Alles gebeurt op GitHub.** Voorstellen en correcties zijn GitHub-issues. Wijzigingen zijn pull requests. Discussies vinden plaats in GitHub Discussions. Er is geen apart forum, geen chatserver en geen accountsysteem. Elke wijziging in elke beoordeling heeft een openbare geschiedenis.

**Open data.** Beoordelingen zijn gewone Markdown- en YAML-bestanden, en de volledige dataset wordt als JSON gepubliceerd. De inhoud valt onder de licentie CC BY-SA 4.0, zodat iedereen die kan hergebruiken.

**Keuzes zijn als keuzes gemarkeerd.** De beheerders kiezen één of twee keuzes per categorie en lichten elke keuze toe. Keuzes worden apart getoond en veranderen nooit de scores, zodat een lezer redactioneel oordeel altijd kan onderscheiden van gemeten resultaten.

## Wie het onderhoudt

Privacy Ratings wordt gesteund, gefinancierd en onderhouden door [Forward Email](https://forwardemail.net), een op privacy gerichte e-maildienst die hier ook wordt beoordeeld. Dat zorgt ervoor dat het project op lange termijn wordt onderhouden, en het is ook een belangenconflict, dus daar wordt openlijk mee omgegaan:

- Forward Email wordt gescoord volgens dezelfde criteria als elke andere e-mailprovider.
- De vermelding bevat een openbaarmaking, net als elke vermelding met een andere band met de beheerders.
- Wijzigingen die de score van een gelieerde vermelding verhogen, moeten naar bewijs linken en open blijven voor openbare beoordeling voordat ze worden gemerged. Zie [GOVERNANCE.md](GOVERNANCE.md).
- Er zijn geen affiliatelinks, betaalde plaatsingen of sponsoring. De validatie weigert links met verwijzingsparameters.

Als een beoordeling niet lijkt te kloppen, open dan een issue of een pull request met bewijs. Dat is het hele proces.

## Dankwoord

Veel vermeldingen werden voor het eerst vermeld via [Awesome Privacy](https://github.com/lissy93/awesome-privacy), uitgebracht onder CC0. Gegevens over mailserverhosting komen van [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
