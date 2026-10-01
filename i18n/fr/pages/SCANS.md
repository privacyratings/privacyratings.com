<!-- source: eecc9b0ced33 -->
# Tests automatisés

Les services hébergés (catégories avec `type: service`) sont testés automatiquement lorsque leur fichier d'évaluation contient un `domain`. Les fournisseurs d'e-mail et les services de transfert qui ont un `mail_domain` font aussi l'objet d'un test e-mail.

| Test | Ce qu'il vérifie | Critère | Oui | Partiel | Non |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Versions de TLS, suites de chiffrement, certificats et failles TLS connues | `tls` | A+ ou A | A- ou B | C ou inférieur |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | En-têtes de sécurité comme CSP, HSTS et X-Frame-Options, et attributs des cookies | `security_headers` | A+ ou A | A-, B+ ou B | B- ou inférieur |
| [Test de site web Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS et options de sécurité | `web_standards` | 90 % ou plus | De 70 % à 89 % | Moins de 70 % |
| [Test e-mail Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS et DANE pour le domaine de messagerie | `mail_standards` | 90 % ou plus | De 70 % à 89 % | Moins de 70 % |
| [Hardenize](https://www.hardenize.com) | Configuration de sécurité DNS, e-mail et web | Lien uniquement | | | |

## Normes de l'e-mail

Les fournisseurs d'e-mail et les services de transfert qui ont un `mail_domain` font aussi l'objet de ces tests, exécutés par [`scripts/mail-tests.js`](scripts/mail-tests.js) :

| Test | Ce qu'il vérifie | Critère | Oui |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, politique DMARC, mode MTA-STS (RFC 8461), TLS-RPT (RFC 8460), validation DNSSEC, DANE TLSA sur chaque hôte MX (RFC 7672), ainsi que BIMI et les enregistrements SRV RFC 6186 à titre informatif | `transport_security` | Les six appliqués |
| IMAP `CAPABILITY` | TLS implicite sur le port 993 (RFC 8314), IMAP4rev1 ou IMAP4rev2, IDLE. Repli sur STARTTLS sur le port 143 | `imap_standards` | TLS implicite, IMAP4rev1/rev2 et IDLE |
| POP3 `CAPA` | TLS implicite sur le port 995, CAPA (RFC 2449), UIDL. Repli sur STLS sur le port 110 | `pop3_standards` | TLS implicite, CAPA et UIDL |
| SMTP `EHLO` | Soumission en TLS implicite sur le port 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Repli sur STARTTLS sur le port 587 | `smtp_standards` | TLS implicite et les quatre extensions |

Les noms de serveur proviennent de `imap_host`, `pop3_host` et `smtp_host` dans le fichier d'évaluation, ou des enregistrements SRV RFC 6186 du fournisseur. Définissez un hôte à `false` lorsque le fournisseur ne propose pas ce protocole. Les capacités sont ce que chaque serveur annonce avant la connexion, et les listes complètes sont affichées sur chaque page d'évaluation.

## Traceurs des sites web

Chaque entrée qui a un site web, applications comprises, fait l'objet d'un test de traceurs exécuté par [`scripts/trackers.js`](scripts/trackers.js). Il charge la page d'accueil sans exécuter JavaScript et compare chaque hôte de script, de cadre, d'image et de feuille de style, ainsi que le code en ligne, à une liste de services connus de pistage et de mesure d'audience.

| Détecté | Effet sur `no_trackers` |
| --- | --- |
| Traceurs tiers comme Google Analytics, Google Tag Manager, Meta Pixel, Hotjar ou HubSpot | La réponse devient « non », quoi qu'indique le fichier d'évaluation |
| Mesure d'audience sans cookies (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Un « oui » devient « partiel » |
| Polices, intégrations, signalement d'erreurs, chat d'assistance ou outils de consentement | Listés sur la page, non notés |
| Rien | La réponse du fichier d'évaluation est utilisée |

Lorsque le site web est une page d'hébergeur de code ou de boutique d'applications (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play et similaires), le test est ignoré, car cette page n'est pas gérée par le projet.

Le test ne voit que les traceurs écrits dans la page elle-même. Les traceurs ajoutés ensuite par des scripts, et la télémétrie à l'intérieur des applications, nécessitent toujours des preuves dans le fichier d'évaluation, comme une politique de confidentialité ou un rapport [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS et ARC ne peuvent pas être observés de l'extérieur sans envoyer de courrier ; ce sont donc des critères auxquels on répond avec des preuves plutôt que par des tests.

Les vérifications automatisées qui n'ont pas encore été exécutées s'affichent comme « Pas encore testé » et sont exclues du score, de sorte qu'un fournisseur n'est jamais pénalisé pour un test qui n'a pas eu lieu.

Pour SSL Labs, la note la plus faible parmi toutes les adresses IP d'un domaine est retenue.

Hardenize ne propose plus d'API publique ; chaque page renvoie donc à son rapport public au lieu de le noter.

## Calendrier

Le [workflow Scan](.github/workflows/scan.yml) s'exécute chaque jour et teste les 40 entrées dont les résultats sont les plus anciens (Internet.nl suit ses propres limites, voir ci-dessous), de sorte que chaque service est testé régulièrement sans surcharger les API gratuites. Les résultats sont enregistrés dans [`scans/`](scans/) au format JSON, commités dans le dépôt et publiés avec le site. Chaque page indique quand ses tests ont été exécutés pour la dernière fois.

Un test en échec conserve le résultat précédent et enregistre l'erreur, pour qu'une panne temporaire ne modifie pas un score.

### Limites d'Internet.nl

L'API par lots d'Internet.nl est utilisée dans le respect de ses [conditions d'utilisation](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) :

- Au plus 2 requêtes par lots sur toute période de 7 jours. Le test du site web et le test de la messagerie sont des requêtes distinctes, donc une série complète utilise les deux.
- Au plus 5000 domaines par requête. Quand davantage de domaines ont le test, ceux dont les résultats manquent ou sont les plus anciens passent en premier et les autres attendent une requête ultérieure.
- Aucune requête pour un seul domaine, donc `--only` ignore Internet.nl.

Chaque requête est enregistrée dans `scans/internetnl-requests.json`, qui est commité avec les résultats même quand une exécution échoue. Une exécution qui constate que la limite hebdomadaire est atteinte ignore Internet.nl et conserve les résultats existants. Les lots prennent des heures, donc l'état de la requête est vérifié toutes les 5 minutes, et une requête encore en cours à la fin de l'exécution est récupérée par une exécution ultérieure au lieu d'être renvoyée. Internet.nl ignore `--limit`, et seules les exécutions sur la branche par défaut utilisent les identifiants Internet.nl, donc toutes les exécutions partagent un même registre.

Ce site web réutilise des résultats de tests fournis par l'outil de test [Internet.nl](https://internet.nl).

## Configuration

Tous les paramètres sont des secrets de dépôt facultatifs (Settings › Secrets and variables › Actions) :

| Secret | Rôle |
| --- | --- |
| `SSLLABS_EMAIL` | Adresse e-mail enregistrée auprès de l'[API SSL Labs v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Sans elle, l'API v3 est utilisée. L'enregistrement nécessite une adresse e-mail d'organisation. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Compte pour l'[API batch d'Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Sans eux, les pages renvoient aux tests publics d'Internet.nl et les critères Internet.nl restent « inconnu ». |
| `INTERNETNL_API` | URL de base de l'API batch, pour une instance [Internet.nl auto-hébergée](https://github.com/internetstandards/Internet.nl). Par défaut : `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory ne nécessite aucun compte. Les données de licence GitHub utilisent le jeton intégré du workflow.

## Lancer les tests en local

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Quel domaine est testé

Le champ `domain` doit correspondre au site web principal ou à l'application web où les utilisateurs se connectent, par exemple `mail.example.com` plutôt qu'un sous-domaine marketing sur un autre hôte. Les éditeurs peuvent proposer un domaine plus précis dans une pull request.
