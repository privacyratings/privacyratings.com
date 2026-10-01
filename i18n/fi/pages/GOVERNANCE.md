<!-- source: e696176d1bdb -->
# Hallinto

Miten päätökset tehdään, miten suositukset valitaan ja miten eturistiriidat käsitellään.

## Ylläpitäjät

Ylläpitäjät tarkistavat ja yhdistävät pull requestit, lajittelevat issuet ja moderoivat Discussions-keskusteluja. Ylläpitäjät on lueteltu tiedostossa [`.github/CODEOWNERS`](.github/CODEOWNERS). Kuka tahansa voi tulla ylläpitäjäksi, kun hänellä on näyttöä tarkoista ja hyvin lähteistetyistä kontribuutioista.

## Miten muutokset hyväksytään

1. Kaikki muutokset tehdään pull requestin kautta. Kukaan, ylläpitäjät mukaan lukien, ei pushaa arviomuutoksia suoraan `main`-haaraan.
2. Jokaisen pull requestin on läpäistävä `npm test` (validointi ja rakennus).
3. Vähintään yksi ylläpitäjä hyväksyy pull requestin.
4. Vastaukset vaativat todisteet ensisijaisesta lähteestä: virallinen dokumentaatio, lähdekoodi, lisenssitiedostot, julkaistut auditointiraportit tai toistettavat testit. Arvostelut, blogikirjoitukset ja yksityiskohdattomat markkinointiväitteet eivät ole todisteita.
5. Kun lähteet ovat ristiriidassa, uusin ensisijainen lähde voittaa. Jos asia on edelleen epäselvä, vastaus on ”tuntematon”.

## Kriteerimuutokset

Kriteerit määrittävät jokaisen pistemäärän, joten `criteria/`-kansion muutokset vaativat enemmän huolellisuutta:

- Avaa ensin ”Criteria change” -issue tai Discussions-keskustelu.
- Pull request pysyy avoinna vähintään 7 päivää julkista kommentointia varten.
- Se vaatii kahden ylläpitäjän hyväksynnän.
- Kriteerien tunnisteita ei koskaan nimetä uudelleen julkaisun jälkeen. Kriteeri poistetaan käytöstä poistamalla se pull requestissa, joka selittää syyn.

## Suositukset

- Kullakin kategorialla voi olla enintään kaksi suositusta.
- Suosituksella on oltava `pick_reason`, joka selittää valinnan selkokielellä.
- Kullakin kategorialla on enintään kaksi suositusta, järjestettynä merkinnöillä `pick: 1` ja `pick: 2`.
- Suositukset ovat toimituksellisia. Ne näytetään erikseen, eivätkä ne koskaan muuta pisteitä.
- Kuka tahansa voi kyseenalaistaa suosituksen Discussionsin ”Picks”-kategoriassa. Kyseenalaistuksiin vastataan julkisesti.

## Eturistiriidat

Privacy Ratingsia ylläpitää Forward Emailin takana oleva tiimi. Ylläpitäjiin liittyvät kohteet ovat ”sidoksissa olevia kohteita”. Tällä hetkellä se tarkoittaa Forward Emailia.

Sidoksissa olevia kohteita koskevat säännöt:

- Jokaisella sidoksissa olevalla kohteella on `disclosure`, joka näytetään sen sivun yläosassa.
- Pull requestin, joka nostaa sidoksissa olevan kohteen pisteitä tai tekee siitä suosituksen, on linkitettävä todisteet jokaiselle muutetulle vastaukselle, ja sen on oltava avoinna vähintään 7 päivää ennen yhdistämistä.
- Pull request, joka laskee sidoksissa olevan kohteen pisteitä pätevin todistein, yhdistetään kuten mikä tahansa muu.
- Ylläpitäjien on lisättävä sidonnaisuusilmoitus jokaiseen kohteeseen, johon heillä tai heidän työnantajallaan on taloudellinen tai henkilökohtainen yhteys.

## Raha

- Ei kumppanilinkkejä. Validointi hylkää URL-osoitteet, joissa on suosittelu- tai seurantaparametreja.
- Ei maksettuja sijoituksia, sponsoroituja kohteita eikä maksettuja arvosteluja.
- Valmistajat voivat lähettää korjauksia kuten kuka tahansa muu, todisteineen, ja niiden on kerrottava olevansa valmistaja.

## Moderointi

Issueissa, pull requesteissa ja Discussions-keskusteluissa noudatetaan [toimintaohjeita](CODE_OF_CONDUCT.md). Ylläpitäjät voivat lukita tai piilottaa kommentteja, jotka ovat loukkaavia, aiheeseen liittymättömiä tai mainostavia.
