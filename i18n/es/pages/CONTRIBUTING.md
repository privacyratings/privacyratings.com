<!-- source: f2ab6af4acf3 -->
# Cómo contribuir

Todo ocurre en GitHub. No hay ningún otro foro, chat ni cuenta en la que registrarse.

| Para hacer esto | Use |
| --- | --- |
| Sugerir una aplicación o un servicio | [Abra una incidencia "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Informar de una respuesta incorrecta o un enlace roto | [Abra una incidencia "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), o use "Informar de una corrección" en cualquier página de valoración |
| Proponer o cambiar criterios | [Abra una incidencia "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Corregirlo usted mismo | Use "Editar en GitHub" en cualquier página de valoración, o abra una pull request |
| Hacer una pregunta o debatir una recomendación | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Editar una valoración

Cada aplicación o servicio es un archivo Markdown en `ratings/<category>/<name>.md`. La parte superior del archivo es YAML. Todo lo que hay debajo son notas opcionales en Markdown que se muestran en la página.

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

Reglas (comprobadas automáticamente por `npm test`):

- `answer` es uno de `yes`, `partial`, `no`, `unknown` o `n/a`.
- `yes` y `partial` necesitan un enlace `evidence`. `no` necesita una `note` o `evidence`.
- Las evidencias deben proceder de una fuente primaria: documentación oficial, código fuente, un archivo de licencia, un informe de auditoría o una prueba reproducible. No sirven reseñas, publicaciones de foros ni páginas de marketing sin detalles.
- Los enlaces deben empezar por `https://` y no deben contener parámetros de referido ni de seguimiento.
- Los criterios automáticos (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) los rellenan las pruebas. No los defina a mano.
- `no_trackers` también se comprueba con la [prueba de rastreadores](SCANS.md#website-trackers). Si la página de inicio carga un rastreador de terceros, la respuesta pasa a ser "no", diga lo que diga el archivo.
- Omita cualquier criterio que aún no tenga evidencias. Cuenta como `unknown`.
- `jurisdiction` es el lugar donde la empresa tiene su sede legal (no donde están sus servidores). Añada un país a [`jurisdictions.yml`](jurisdictions.yml) si falta. Cada nota de ese archivo necesita una fuente.
- Solo los mantenedores añaden `pick`, `pick_reason` y `disclosure`. Use `pick: 1` y `pick: 2` para ordenar dos recomendaciones. Consulte [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` conserva el nombre que tenía una entrada en Awesome Privacy después de renombrarla, para que la importación mensual no la vuelva a añadir. Para excluir de forma permanente una entrada de Awesome Privacy, añádala a [`import-skip.yml`](import-skip.yml) con un motivo.

Los criterios de cada categoría, y lo que significa cada respuesta, están en [`criteria/`](criteria/) y en la [página de criterios](https://privacyratings.com/criteria/).

## Añadir una aplicación o un servicio

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Esto crea un archivo que incluye todos los criterios como `unknown`. Rellene lo que pueda demostrar, elimine el resto y después ejecute `npm test`.

## Estilo de redacción

- Lenguaje sencillo y neutral. Describa lo que hace algo, no lo bueno que es.
- Frases cortas. Las descripciones tienen menos de 300 caracteres.
- Sin primera persona, sin fechas en el texto y sin afirmaciones de marketing.
- Nombre las cosas como lo hace el proveedor.

## Ejecutar el sitio en local

Requiere Node.js 18 o posterior.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Añadir una página

Coloque un archivo Markdown con `title` y `description` en [`pages/`](pages/). Se publica en `/<file-name>/` con una copia en Markdown, datos estructurados y una entrada en el mapa del sitio.

## Añadir una categoría o un criterio

1. Añada la categoría a [`categories.yml`](categories.yml) en el grupo adecuado.
2. Opcionalmente, añada `criteria/<category-id>.yml` con criterios específicos de la categoría. Copie el formato de un archivo existente.
3. Cree `ratings/<category-id>/` y añada entradas.
4. Los cambios en los criterios siguen las normas de revisión de [GOVERNANCE.md](GOVERNANCE.md).

## Traducciones

El sitio se publica en 25 idiomas. El inglés es el origen, y cada uno de los demás idiomas está en `i18n/<code>/`:

| Archivo | Contiene |
| --- | --- |
| `ui.json` | Textos de la interfaz: encabezados, botones y frases con `{placeholders}` |
| `data.json` | Nombres de categorías, criterios, guías y notas por país |
| `entries.json` | Descripciones de valoraciones, motivos de las recomendaciones y declaraciones de intereses |
| `pages/*.md` | Documentos completos como este |

Cada archivo JSON asigna a cada texto en inglés su traducción. Cuando el inglés cambia, la traducción anterior deja de coincidir, así que se muestra el inglés hasta que alguien traduzca el texto nuevo. Nunca se muestra nada desactualizado.

1. Ejecute `npm run build`. Escribe las listas actuales en inglés en `i18n/source/`.
2. Ejecute `npm run i18n:check` para ver qué falta en cada idioma, o `node scripts/i18n-check.js de ui` para ver los detalles de un idioma y un archivo.
3. Añada o corrija traducciones y mantenga cada `{placeholder}` exactamente como está.
4. Para un documento, copie el inglés de `i18n/source/pages/`, conserve su primera línea (`<!-- source: … -->`, que vincula la traducción a esa versión del inglés) y traduzca el resto.

Las notas y la evidencia de cada respuesta se mantienen en inglés. Las comparaciones y la mayoría de las valoraciones individuales solo están en inglés; las recomendaciones, categorías, guías, alternativas, listas de código abierto, jurisdicciones y documentos se traducen. El menú de idiomas y la redirección automática usan los enlaces `hreflang` de cada página.

## Lista de comprobación para pull requests

- [ ] `npm test` se supera.
- [ ] Cada respuesta modificada enlaza a evidencias.
- [ ] Si trabaja para un servicio que ha modificado, o tiene relación con él, lo ha indicado en la pull request.
