<!-- source: 95e0ae8a3554 -->
# Zásady ochrany soukromí

Privacy Ratings nenastavuje žádné cookies, nepoužívá žádnou analytiku a nenačítá nic z jiných webů. Tato stránka popisuje vše, co se skutečně děje, když web navštívíte nebo použijete nástroj pro příkazový řádek.

## Hosting

Web běží na [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection). GitHub z bezpečnostních důvodů zaznamenává IP adresu každého návštěvníka, jak popisuje [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Privacy Ratings neprovozuje žádný vlastní server a k těmto záznamům nemá přístup.

## Co web ukládá ve vašem prohlížeči

- `theme`: barevný motiv, pokud jste si nějaký vybrali.
- `lang`: jazyk, který jste zvolili, nebo ten, který při první návštěvě odpovídal vašemu prohlížeči.
- `mastodon`: server Mastodonu, který jste zadali v nabídce sdílení, pokud jste ji použili.
- Service worker uchovává kopie stránek, které jste otevřeli, aby fungovaly offline.

Vše zůstává ve vašem zařízení. Vymazáním dat webu v prohlížeči to odstraníte.

## Požadavky na jiné weby

Všechny skripty, styly, písma, obrázky a videa se načítají z privacyratings.com a Content Security Policy blokuje cokoli jiného. Odkazy na jiné weby, včetně odkazů pro sdílení, nic nenačtou, dokud je neotevřete.

## Vyhledávání

Vyhledávací pole stáhne vyhledávací index z tohoto webu a filtruje ho ve vašem prohlížeči. Na stránce vyhledávání se vaše slova objeví v adrese stránky jako u každého jiného odkazu.

## Nástroj pro příkazový řádek

Nástroj pro příkazový řádek `privacyratings` neodesílá žádnou analytiku ani telemetrii. Stahuje hodnocení z tohoto webu a jednou denně ověřuje přes GitHub API, zda je k dispozici nová verze. Pokud je novější verze k dispozici, aktualizuje se z GitHubu nebo přes npm. Nastavením `PRIVACYRATINGS_NO_UPDATE=1` nebo přepínačem `--no-update` aktualizace vypnete.

## Příspěvky

Issues, pull requesty a diskuse probíhají na GitHubu a jsou veřejné. Na váš účet na GitHubu se vztahuje GitHub General Privacy Statement.

## Kontakt

Dotazy k těmto zásadám pokládejte v [issue na GitHubu](https://github.com/privacyratings/privacyratings.com/issues). Bezpečnostní problémy hlaste podle [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md).
