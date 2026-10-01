<!-- source: f2ab6af4acf3 -->
# Contribuer

Tout se passe sur GitHub. Il n'y a pas d'autre forum, de discussion ou de compte à créer.

| Pour faire ceci | Utilisez |
| --- | --- |
| Suggérer une application ou un service | [Ouvrez un ticket « Suggest »](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Signaler une réponse erronée ou un lien cassé | [Ouvrez un ticket « Correction »](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), ou utilisez « Signaler une correction » sur n'importe quelle page d'évaluation |
| Proposer ou modifier des critères | [Ouvrez un ticket « Criteria change »](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Corriger vous-même | Utilisez « Modifier sur GitHub » sur n'importe quelle page d'évaluation, ou ouvrez une pull request |
| Poser une question ou débattre d'un choix | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Modifier une évaluation

Chaque application ou service correspond à un fichier Markdown dans `ratings/<category>/<name>.md`. Le haut du fichier est en YAML. Tout ce qui se trouve en dessous est constitué de notes Markdown facultatives affichées sur la page.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # optional
platforms: [web, android, ios]                  # optional
jurisdiction: CH                                # optional, country code from jurisdictions.yml
mainstream: true                                # optional, adds an "alternatives to" page
aliases: [Example Office, Example Docs]         # optional, other names people search for
also_in: [macos-hardening]                      # optional, also list it in another category's table
alternatives_page: true                         # optional, adds an "alternatives to" page without mainstream
domain: mail.example.com                        # services only, used for automated tests
mail_domain: example.com                        # email categories only
imap_host: imap.example.com                     # email providers only; false if not offered
pop3_host: pop3.example.com                     # optional, found from SRV records when missing
smtp_host: smtp.example.com                     # optional, found from SRV records when missing
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/example/example/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_ads:
    answer: yes
    evidence: https://example.com/pricing
---

Optional notes in Markdown.
```

Règles (vérifiées automatiquement par `npm test`) :

- `answer` vaut `yes`, `partial`, `no`, `unknown` ou `n/a`.
- `yes` et `partial` nécessitent un lien `evidence`. `no` nécessite une `note` ou une `evidence`.
- Les preuves doivent provenir d'une source primaire : documentation officielle, code source, fichier de licence, rapport d'audit ou test reproductible. Pas d'avis, de messages de forum ni de pages marketing sans détails.
- Les liens doivent commencer par `https://` et ne doivent pas contenir de paramètres de parrainage ou de suivi.
- Les critères automatisés (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) sont remplis par les tests. Ne les définissez pas à la main.
- `no_trackers` est aussi vérifié par le [test de traceurs](SCANS.md#website-trackers). Si la page d'accueil charge un traceur tiers, la réponse devient « no », quoi qu'indique le fichier.
- Omettez tout critère qui n'a pas encore de preuve. Il compte comme `unknown`.
- `jurisdiction` est le pays où l'entreprise est légalement établie (et non celui de ses serveurs). Ajoutez un pays à [`jurisdictions.yml`](jurisdictions.yml) s'il manque. Chaque note de ce fichier doit avoir une source.
- Seuls les mainteneurs ajoutent `pick`, `pick_reason` et `disclosure`. Utilisez `pick: 1` et `pick: 2` pour ordonner deux choix. Voir [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` conserve le nom qu'une entrée avait dans Awesome Privacy après son renommage, pour que l'import mensuel ne l'ajoute pas à nouveau. Pour écarter définitivement une entrée d'Awesome Privacy, ajoutez-la à [`import-skip.yml`](import-skip.yml) avec une raison.

Les critères de chaque catégorie, et la signification de chaque réponse, se trouvent dans [`criteria/`](criteria/) et sur la [page des critères](https://privacyratings.com/criteria/).

## Ajouter une application ou un service

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Cette commande crée un fichier qui liste chaque critère comme `unknown`. Remplissez ce que vous pouvez prouver, supprimez le reste, puis lancez `npm test`.

## Style de rédaction

- Langage simple et neutre. Décrivez ce que fait un produit, pas à quel point il est formidable.
- Phrases courtes. Les descriptions restent sous 300 caractères.
- Pas de première personne, pas de dates dans le texte, pas d'arguments marketing.
- Nommez les choses comme le fait l'éditeur.

## Lancer le site en local

Nécessite Node.js 18 ou plus récent.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Ajouter une page

Placez un fichier Markdown avec un `title` et une `description` dans [`pages/`](pages/). Il est publié à l'adresse `/<file-name>/` avec une copie Markdown, des données structurées et une entrée dans le plan du site.

## Ajouter une catégorie ou un critère

1. Ajoutez la catégorie à [`categories.yml`](categories.yml) dans le bon groupe.
2. Ajoutez éventuellement `criteria/<category-id>.yml` avec des critères propres à la catégorie. Reprenez le format d'un fichier existant.
3. Créez `ratings/<category-id>/` et ajoutez des entrées.
4. Les modifications de critères suivent les règles de relecture de [GOVERNANCE.md](GOVERNANCE.md).

## Traductions

Le site est publié en 25 langues. L'anglais est la langue source, et chaque autre langue se trouve dans `i18n/<code>/` :

| Fichier | Contenu |
| --- | --- |
| `ui.json` | Texte de l'interface : titres, boutons et phrases avec des `{placeholders}` |
| `data.json` | Noms de catégories, critères, guides et notes sur les pays |
| `entries.json` | Descriptions des évaluations, raisons des choix et déclarations |
| `pages/*.md` | Documents complets comme celui-ci |

Chaque fichier JSON associe le texte anglais à sa traduction. Quand l'anglais change, l'ancienne traduction ne correspond plus, et l'anglais s'affiche jusqu'à ce que quelqu'un traduise le nouveau texte. Aucun contenu périmé n'est jamais affiché.

1. Lancez `npm run build`. La commande écrit les listes anglaises à jour dans `i18n/source/`.
2. Lancez `npm run i18n:check` pour voir ce qui manque dans chaque langue, ou `node scripts/i18n-check.js de ui` pour le détail d'une langue et d'un fichier.
3. Ajoutez ou corrigez des traductions en conservant chaque `{placeholder}` exactement tel quel.
4. Pour un document, copiez l'anglais depuis `i18n/source/pages/`, conservez sa première ligne (`<!-- source: … -->`, qui lie la traduction à cette version de l'anglais) et traduisez le reste.

Les notes et preuves de chaque réponse restent en anglais. Les comparaisons et la plupart des évaluations individuelles sont uniquement en anglais ; les choix, catégories, guides, alternatives, listes open source, juridictions et documents sont traduits. Le menu des langues et la redirection automatique utilisent les liens `hreflang` de chaque page.

## Liste de contrôle pour les pull requests

- [ ] `npm test` réussit.
- [ ] Chaque réponse modifiée renvoie à des preuves.
- [ ] Si vous travaillez pour un service que vous avez modifié, ou y êtes lié, vous l'avez indiqué dans la pull request.
