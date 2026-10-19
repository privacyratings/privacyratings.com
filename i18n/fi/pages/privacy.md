<!-- source: 95e0ae8a3554 -->
# Tietosuojakäytäntö

Privacy Ratings ei aseta evästeitä, ei käytä analytiikkaa eikä lataa mitään muilta sivustoilta. Tällä sivulla kerrotaan kaikki, mitä tapahtuu, kun vierailet sivustolla tai käytät komentorivityökalua.

## Ylläpito

Sivustoa jakaa [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection). GitHub kirjaa jokaisen vierailijan IP-osoitteen tietoturvasyistä, kuten [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) kertoo. Privacy Ratingsilla ei ole omaa palvelinta eikä pääsyä näihin lokeihin.

## Mitä sivusto tallentaa selaimeesi

- `theme`: väriteema, jos valitsit sellaisen.
- `lang`: valitsemasi kieli tai kieli, joka vastasi selaintasi ensimmäisellä käynnilläsi.
- `mastodon`: Mastodon-palvelin, jonka kirjoitit jakovalikkoon, jos käytit sitä.
- Service worker säilyttää kopiot avaamistasi sivuista, jotta ne toimivat ilman verkkoyhteyttä.

Kaikki pysyy laitteellasi. Kun tyhjennät sivuston tiedot selaimesta, ne poistuvat.

## Pyynnöt muille sivustoille

Kaikki skriptit, tyylit, fontit, kuvat ja videot ladataan osoitteesta privacyratings.com, ja Content Security Policy estää kaiken muun. Linkit muille sivustoille, myös jakolinkit, eivät lataa mitään ennen kuin avaat ne.

## Haku

Hakukenttä lataa hakuhakemiston tältä sivustolta ja suodattaa sen selaimessasi. Hakusivulla hakusanasi näkyvät sivun osoitteessa kuten missä tahansa linkissä.

## Komentorivityökalu

Komentorivityökalu `privacyratings` ei lähetä analytiikkaa eikä telemetriaa. Se lataa arviot tältä sivustolta ja tarkistaa GitHubin API:sta kerran päivässä, onko uutta versiota. Jos uudempi versio on olemassa, työkalu päivittää itsensä GitHubista tai npm:llä. Aseta `PRIVACYRATINGS_NO_UPDATE=1` tai käytä valitsinta `--no-update`, jos haluat poistaa päivitykset käytöstä.

## Osallistuminen

Issuet, pull requestit ja keskustelut käydään GitHubissa, ja ne ovat julkisia. GitHub-tiliisi sovelletaan GitHub General Privacy Statement -selostetta.

## Yhteystiedot

Kysy tästä käytännöstä [GitHub-issuessa](https://github.com/privacyratings/privacyratings.com/issues). Ilmoita tietoturvaongelmista [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md) -tiedoston ohjeiden mukaan.
