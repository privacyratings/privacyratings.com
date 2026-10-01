<!-- source: 37558129142b -->
# Mikä on CLOUD Act?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** on Yhdysvaltain laki, joka vastaa yhteen kysymykseen: voivatko Yhdysvaltain viranomaiset saada tietoja yhdysvaltalaiselta yritykseltä, kun tiedot on tallennettu toiseen maahan? Vastaus on kyllä.

## Mitä se tekee

1. **Sijainnilla ei ole merkitystä.** Yhdysvaltain lainkäyttövallan alainen palveluntarjoaja on velvollinen luovuttamaan ”hallussaan, säilytyksessään tai hallinnassaan” olevat tiedot pätevän yhdysvaltalaisen oikeudellisen menettelyn perusteella riippumatta siitä, missä päin maailmaa tiedot on tallennettu. [Lähde: Yhdysvaltain oikeusministeriö](https://www.justice.gov/criminal/cloud-act-resources)
2. **Sopimukset muiden maiden kanssa.** Yhdysvallat voi solmia tietojenluovutussopimuksia, joiden avulla luotetut ulkomaiset hallitukset voivat pyytää tietoja suoraan yhdysvaltalaisilta palveluntarjoajilta vakavien rikosten yhteydessä ilman hitaampaa keskinäistä oikeusapusopimusmenettelyä (MLAT). [Lähde: Yhdysvaltain oikeusministeriö](https://www.justice.gov/criminal/cloud-act-resources)
3. **Keino vastustaa.** Palveluntarjoajat voivat pyytää tuomioistuinta kumoamaan tai muuttamaan pyynnön, kun se on ristiriidassa sellaisen toisen maan lakien kanssa, jonka kanssa on voimassa oleva sopimus.

Sopimukset ovat voimassa **Yhdistyneen kuningaskunnan** ja **Australian** kanssa. Neuvotteluista on ilmoitettu **Kanadan** ja **Euroopan unionin** kanssa. [Lähde: Yhdysvaltain oikeusministeriö](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Mitä se ei tee

- Se ei luo uusia valvontavaltuuksia eikä poista etsintäluvan tarvetta. Yhdysvaltain viranomaiset tarvitsevat edelleen pätevän oikeudellisen menettelyn, ja viestien sisältö vaatii yleensä etsintäluvan.
- Se ei pakota palveluntarjoajaa purkamaan salausta, jota se ei pysty purkamaan. Se koskee palveluntarjoajan hallussa olevia tietoja. Tiedot, jotka on salattu vain käyttäjän hallussa olevilla avaimilla, pysyvät salattuina.
- Se ei koske vain Yhdysvalloissa sijaitsevia datakeskuksia. Eurooppalaisen palvelinsijainnin valitseminen ei auta, jos palvelinta ylläpitävä yritys on Yhdysvaltain lainkäyttövallan alainen.

## Keihin se vaikuttaa

Jokaiseen Yhdysvaltain lainkäyttövallan alaiseen yritykseen: Google, Microsoft, Apple, Amazon, Cloudflare ja pienemmät yhdysvaltalaiset palvelut, mukaan lukien Forward Email. Katso [kaikki arvioidut palvelut, joiden kotimaa on Yhdysvallat](/jurisdictions/united-states/).

Se voi ulottua myös **muihin kuin yhdysvaltalaisiin palveluihin, jotka tallentavat tietoja yhdysvaltalaisten pilvipalveluntarjoajien palvelimille**, koska pilvipalveluntarjoaja voi itse saada pyynnön. Siksi hyödyllinen kysymys ei ole vain ”missä yritys on?”, vaan myös ”mitä tietoja on olemassa ja kenellä avaimet ovat?”

## Miksi salaus ja minimaalinen tietojen määrä ovat tärkeämpiä kuin sijainti

Lait muuttuvat, ja jokaisella maalla on keino vaatia tietoja. Tärkeintä on se, mitä palveluntarjoaja **voi** luovuttaa:

| Tilanne | Mihin pyyntö voi ulottua |
| --- | --- |
| Posti tallennettu selväkielisenä | Kaikkeen postilaatikon sisältöön |
| Posti salattu levossa palveluntarjoajan hallussa olevilla avaimilla | Kaikkeen, koska palveluntarjoaja voi purkaa salauksen |
| Posti salattu käyttäjän salasanasta johdetuilla avaimilla | Tilitietoihin ja yhteystietoihin, ei viestien sisältöön |
| Lokeja ei säilytetä | Ei mihinkään toimintaa koskevaan |

Todellisia esimerkkejä:

- **Proton (Sveitsi, kaikkien Eyes-järjestelyjen ulkopuolella)** noudatti 8 313:a 9 301 sveitsiläisestä oikeudellisesta määräyksestä viimeisimmässä vuosiraportissaan ja luovutti hallussaan olevia tilitietoja. [Lähde: Protonin läpinäkyvyysraportti](https://proton.me/legal/transparency)
- **Proton VPN (sama yritys, sama maa)** ei noudattanut yhtäkään, koska se ei säilytä lokeja. [Lähde: Protonin läpinäkyvyysraportti](https://proton.me/legal/transparency)
- **Tuta (Saksa)** voidaan saksalaisen tuomarin määräyksellä velvoittaa luovuttamaan postilaatikoita tai valvomaan niitä reaaliajassa. Päästä päähän salattu posti pysyy salattuna. [Lähde: Tutan läpinäkyvyysraportti](https://tuta.com/blog/transparency-report)

Sama yritys samassa maassa saa hyvin erilaisia tuloksia sen mukaan, mitä tietoja on olemassa. Siksi Privacy Ratings näyttää lainkäyttöalueen jokaisella sivulla mutta pisteyttää sen, mitä palveluntarjoajat todella tekevät. Katso [miten lainkäyttöaluetta käsitellään](/jurisdictions/).

## Miten CLOUD Act koskee Forward Emailia

Forward Emailin kotipaikka on Yhdysvalloissa, ja se on CLOUD Actin alainen. Sen [tekninen selvitys](https://forwardemail.net/technical-whitepaper.pdf) kuvaa, miten sen rakenne rajoittaa sitä, mihin pyyntö voisi ulottua:

- **Salatut postilaatikot.** Jokainen postilaatikko on erikseen salattu SQLite-tiedosto. Selvityksen mukaan Forward Email ei pääse käsiksi viestien sisältöön.
- **Sähköpostin sisältöä tai metatietoja ei kirjata levylle.** Forward Email ei säilytä tietoja siitä, kenelle käyttäjät kirjoittavat.
- **Rajalliset tiedot.** Luovutettavissa olisivat perustilitiedot (kuten tilin sähköpostiosoite, rekisteröitymispäivä ja maksutiedot) sekä rajalliset IP-osoitelokit, joita voidaan säilyttää tilapäisesti tietoturvan ja väärinkäytösten estämisen vuoksi.
- **Vain pätevä oikeudellinen menettely.** Pyynnöt vaativat haasteen, tuomioistuimen määräyksen tai etsintäluvan. Yhdysvaltojen ulkopuolelta tulevien pyyntöjen on kuljettava yhdysvaltalaisen tuomioistuimen, keskinäisen oikeusapusopimuksen tai Yhdysvaltain oikeudelliset vaatimukset täyttävän CLOUD Act -sopimuksen kautta.
- **Ilmoitukset ja vastustaminen.** Käyttäjille ilmoitetaan, kun laki sen sallii, ja liian laajat pyynnöt riitautetaan.

Forward Email ylläpitää Privacy Ratingsia. Sen arviossa käytetään samoja kriteerejä kuin kaikilla muilla palveluntarjoajilla. Katso [Forward Emailin arvio](/email-providers/forward-email/) ja [hallintosäännöt](/governance/).

## Lisälukemista

- [Yhdysvaltain oikeusministeriö: CLOUD Act -aineistot](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Cross-Border Data Sharing Under the CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: FISA-lain 702 §:n mukainen valvonta](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
