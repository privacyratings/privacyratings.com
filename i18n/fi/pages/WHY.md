<!-- source: df34a6a5c6c4 -->
# Miksi Privacy Ratings on olemassa

Tietosuojaoppaat auttavat miljoonia ihmisiä valitsemaan parempia sovelluksia ja palveluita. Monet tekevät erinomaista työtä. Useimmilla on kuitenkin samat heikkoudet:

- **Epäselvät säännöt.** Palvelu otetaan luetteloon tai jätetään pois, ja syy löytyy foorumiketjusta, yksityisestä keskustelusta tai sitä ei julkaista lainkaan.
- **Vain hyväksytty tai hylätty.** Luettelossa lukee ”suositeltu” tai ei mitään. Siitä ei näe, kuinka lähelle jokin pääsi tai mikä muuttaisi tuloksen.
- **Väitteitä ilman tarkistuksia.** Kuvauksissa lukee ”salattu” tai ”ei lokeja” ilman linkkiä mihinkään, minkä lukija voisi tarkistaa.
- **Ei testausta.** Isännöityjen palveluiden perustietoturvaa, kuten TLS-asetuksia, tietoturvaotsakkeita tai sähköpostin todennusta, tarkistetaan harvoin.
- **Erilliset alustat.** Ehdotukset ja keskustelu käydään foorumilla tai chat-palvelimella, joka vaatii oman tilin ja moderoinnin, erillään varsinaisesta sisällöstä.
- **Hidas muutos.** Kun tuote muuttuu, luettelot jäävät usein vanhentuneiksi, koska niiden päivittäminen riippuu muutamasta ihmisestä.

Privacy Ratings on rakennettu korjaamaan jokainen näistä.

## Awesome-luetteloista ylläpidetyksi resurssiksi

Monet näistä oppaista saivat alkunsa GitHub-luetteloina. [Sindre Sorhusin](https://github.com/sindresorhus/awesome) aloittama awesome-luettelomuoto teki kenelle tahansa helpoksi julkaista kuratoidun luettelon, ja sitä seurasi tuhansia awesome-jotakin-luetteloita, joista monet ovat toistensa haaroja. Luettelot, kuten [Awesome Privacy](https://github.com/lissy93/awesome-privacy), tekevät arvokasta työtä, ja monet täällä olevat kohteet listattiin ensin siellä.

Muodossa on heikkous: useimmat luettelot riippuvat yhdestä tai kahdesta vapaaehtoisesta. Kun ylläpitäjä siirtyy muihin tehtäviin, luettelo hiljenee, arkistoidaan tai hajoaa haaroiksi, jotka kukin vanhenevat vähitellen. Lukijat eivät voi tietää, mikä kopio on ajantasainen, eikä mitään luettelon sisältöä testata tai pisteytetä.

**Privacy Ratingsia tukee ja pyörittää yritys, [Forward Email](https://forwardemail.net).** Se ei ole riippuvainen vapaaehtoisista, jotka saattavat lähteä tai arkistoida repositorion. Tiedot ovat rakenteisessa muodossa yksittäisen README-tiedoston sijaan, joten ne voidaan validoida, pisteyttää ja testata automaattisesti joka päivä. Ja koska kaikki on avointa lähdekoodia ja CC BY-SA -lisensoitua, yhteisö voi aina kopioida, tarkistaa ja parantaa sitä.

## Mikä on erilaista

**Jokainen sääntö on julkinen.** Jokaisella kategorialla on lyhyt luettelo kysymyksiä, joiden paino on 1–3. Kysymykset, kunkin vastauksen merkitys ja sen tarkistustapa ovat kaikki kansiossa [`criteria/`](criteria/). Katso [kriteerit](https://privacyratings.com/criteria/).

**Jokaisella vastauksella on todisteet.** Vastauksen ”kyllä” tai ”osittain” on linkitettävä lähteeseen, jonka kuka tahansa voi tarkistaa: dokumentaatioon, lähdekoodiin, lisenssitiedostoon tai auditointiraporttiin. Kaikki ilman todisteita lasketaan ”tuntemattomaksi” ja saa nolla pistettä. Kohde saa kirjainarvosanan vasta, kun riittävä osa sen vastauksista on todisteilla tuettu.

**Pisteitä, ei pelkkiä luetteloita.** Jokainen kohde saa pisteet 0–100, joten lukijat näkevät, miten palvelut vertautuvat toisiinsa ja missä kohdin kukin jää vajaaksi.

**Automaattiset tietoturvatestit.** Isännöidyt palvelut testataan aikataulun mukaan Qualys SSL Labsilla, Mozilla HTTP Observatorylla ja Internet.nl:llä (sähköpostipalveluille myös Internet.nl-sähköpostitestillä). Tulokset tallennetaan repositorioon ja linkitetään kultakin sivulta. Katso [SCANS.md](SCANS.md).

**Lainkäyttöalue avoimesti esillä.** Jokainen sivu näyttää, missä yrityksen kotipaikka on, kuuluuko maa Five, Nine tai Fourteen Eyes -ryhmään, sovelletaanko GDPR:ää ja ulottuuko Yhdysvaltain CLOUD Act siihen. Lainkäyttöalue näytetään mutta sitä ei pisteytetä, koska se, mitä palveluntarjoaja voi luovuttaa, riippuu lähinnä siitä, mitä se säilyttää ja kenellä avaimet ovat. Katso [lainkäyttöalueet](https://privacyratings.com/jurisdictions/) ja [CLOUD Act](https://privacyratings.com/cloud-act/).

**Kaikki tapahtuu GitHubissa.** Ehdotukset ja korjaukset ovat GitHubin issueita. Muutokset ovat pull requesteja. Keskustelu käydään GitHub Discussionsissa. Erillistä foorumia, chat-palvelinta tai tilijärjestelmää ei ole. Jokaisen arvion jokaisella muutoksella on julkinen historia.

**Avoin data.** Arviot ovat tavallisia Markdown- ja YAML-tiedostoja, ja koko tietoaineisto julkaistaan JSON-muodossa. Sisältö on lisensoitu CC BY-SA 4.0 -lisenssillä, joten kuka tahansa voi käyttää sitä uudelleen.

**Suositukset on merkitty suosituksiksi.** Ylläpitäjät valitsevat kuhunkin kategoriaan yhden tai kaksi suositusta ja perustelevat jokaisen. Suositukset näytetään erikseen, eivätkä ne koskaan muuta pisteitä, joten lukija erottaa aina toimituksellisen harkinnan mitatuista tuloksista.

## Kuka sitä ylläpitää

Privacy Ratingsia tukee, rahoittaa ja ylläpitää [Forward Email](https://forwardemail.net), tietosuojaan keskittyvä sähköpostipalvelu, joka on myös arvioitu täällä. Tämä pitää projektin ylläpidettynä pitkällä aikavälillä, mutta se on myös eturistiriita, joten sitä käsitellään avoimesti:

- Forward Email pisteytetään samoilla kriteereillä kuin kaikki muut sähköpostipalvelut.
- Sen kohteessa on sidonnaisuusilmoitus, samoin kuin kaikissa muissa kohteissa, joilla on yhteys ylläpitäjiin.
- Muutosten, jotka nostavat sidoksissa olevan kohteen pisteitä, on linkitettävä todisteet ja oltava avoinna julkista tarkistusta varten ennen yhdistämistä. Katso [GOVERNANCE.md](GOVERNANCE.md).
- Kumppanilinkkejä, maksettuja sijoituksia tai sponsorointeja ei ole. Validointi hylkää linkit, joissa on suositteluparametreja.

Jos arvio näyttää väärältä, avaa issue tai pull request todisteineen. Siinä on koko prosessi.

## Kiitokset

Monet kohteet listattiin ensin [Awesome Privacysta](https://github.com/lissy93/awesome-privacy), joka on julkaistu CC0-lisenssillä. Sähköpostipalvelinten isännöintitiedot ovat peräisin [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers) -luettelosta.
