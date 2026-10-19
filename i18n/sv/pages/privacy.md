<!-- source: 95e0ae8a3554 -->
# Integritetspolicy

Privacy Ratings sätter inga cookies, kör ingen analys och laddar inget från andra webbplatser. Den här sidan beskriver allt som faktiskt händer när du besöker webbplatsen eller använder kommandoradsverktyget.

## Drift

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) levererar webbplatsen. GitHub loggar varje besökares IP-adress av säkerhetsskäl, enligt [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Privacy Ratings har ingen egen server och ingen åtkomst till de loggarna.

## Vad webbplatsen sparar i din webbläsare

- `theme`: färgtemat, om du har valt ett.
- `lang`: språket du har valt, eller det som matchade din webbläsare vid ditt första besök.
- `mastodon`: Mastodon-servern du skrev in i delningsmenyn, om du använde den.
- En service worker sparar kopior av sidorna du har öppnat, så att de fungerar offline.

Allt stannar på din enhet. Om du rensar webbplatsdata i webbläsaren försvinner det.

## Förfrågningar till andra webbplatser

Alla skript, stilmallar, typsnitt, bilder och videor laddas från privacyratings.com, och en Content Security Policy blockerar allt annat. Länkar till andra webbplatser, även delningslänkarna, laddar inget förrän du öppnar dem.

## Sökning

Sökrutan hämtar sökindexet från den här webbplatsen och filtrerar det i din webbläsare. På söksidan syns dina sökord i sidans adress, som i alla andra länkar.

## Kommandoradsverktyg

Kommandoradsverktyget `privacyratings` skickar ingen analys eller telemetri. Det hämtar betyg från den här webbplatsen och kontrollerar GitHubs API en gång om dagen efter en ny version. Finns det en nyare version uppdaterar det sig självt från GitHub eller med npm. Ställ in `PRIVACYRATINGS_NO_UPDATE=1` eller använd `--no-update` för att stänga av uppdateringar.

## Bidrag

Issues, pull requests och diskussioner sker på GitHub och är offentliga. GitHub General Privacy Statement gäller ditt GitHub-konto.

## Kontakt

Ställ frågor om policyn i ett [issue på GitHub](https://github.com/privacyratings/privacyratings.com/issues). Rapportera säkerhetsproblem enligt [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md).
