<!-- source: 16559ce369ce -->
# Pruebas automáticas

Los servicios alojados (categorías con `type: service`) se prueban automáticamente cuando su archivo de valoración tiene un `domain`. Los proveedores de correo y los servicios de reenvío con un `mail_domain` también reciben una prueba de correo.

| Prueba | Qué comprueba | Criterio | Sí | Parcial | No |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Versiones de TLS, cifrados, certificados y fallos conocidos de TLS | `tls` | A+ o A | A- o B | C o inferior |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Cabeceras de seguridad como CSP, HSTS y X-Frame-Options, y atributos de las cookies | `security_headers` | A+ o A | A-, B+ o B | B- o inferior |
| [Prueba de sitio web de Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS y opciones de seguridad | `web_standards` | 90 % o más | Del 70 % al 89 % | Menos del 70 % |
| [Prueba de correo de Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS y DANE para el dominio de correo | `mail_standards` | 90 % o más | Del 70 % al 89 % | Menos del 70 % |
| [Hardenize](https://www.hardenize.com) | Configuración de seguridad de DNS, correo y web | Solo enlazado | | | |

## Estándares de correo electrónico

Los proveedores de correo y los servicios de reenvío con un `mail_domain` también reciben estas pruebas, ejecutadas por [`scripts/mail-tests.js`](scripts/mail-tests.js):

| Prueba | Qué comprueba | Criterio | Sí |
| --- | --- | --- | --- |
| DNS sobre HTTPS | SPF, política DMARC, modo de MTA-STS (RFC 8461), TLS-RPT (RFC 8460), validación DNSSEC, DANE TLSA en cada host MX (RFC 7672), además de BIMI y registros SRV RFC 6186 a título informativo | `transport_security` | Los seis aplicados |
| IMAP `CAPABILITY` | TLS implícito en el 993 (RFC 8314), IMAP4rev1 o IMAP4rev2, IDLE. Recurre a STARTTLS en el 143 | `imap_standards` | TLS implícito, IMAP4rev1/rev2 e IDLE |
| POP3 `CAPA` | TLS implícito en el 995, CAPA (RFC 2449), UIDL. Recurre a STLS en el 110 | `pop3_standards` | TLS implícito, CAPA y UIDL |
| SMTP `EHLO` | Envío mediante TLS implícito en el 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Recurre a STARTTLS en el 587 | `smtp_standards` | TLS implícito y las cuatro extensiones |

Los nombres de servidor se toman de `imap_host`, `pop3_host` y `smtp_host` en el archivo de valoración, o de los registros SRV RFC 6186 del proveedor. Asigne `false` a un host cuando el proveedor no ofrezca ese protocolo. Las capacidades son lo que cada servidor anuncia antes de iniciar sesión, y las listas completas se muestran en cada página de valoración.

## Rastreadores del sitio web

Cada entrada con sitio web, incluidas las aplicaciones, recibe una prueba de rastreadores ejecutada por [`scripts/trackers.js`](scripts/trackers.js). Carga la página de inicio sin ejecutar JavaScript y compara cada host de scripts, marcos, imágenes y hojas de estilo, además del código en línea, con una lista de servicios conocidos de rastreo y analítica.

| Encontrado | Efecto en `no_trackers` |
| --- | --- |
| Rastreadores de terceros como Google Analytics, Google Tag Manager, Meta Pixel, Hotjar o HubSpot | La respuesta pasa a ser "no", diga lo que diga el archivo de valoración |
| Analítica sin cookies (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | Un "sí" pasa a ser "parcial" |
| Fuentes, contenido insertado, informes de errores, chat de soporte o herramientas de consentimiento | Se muestran en la página, sin puntuación |
| Nada | Se usa la respuesta del archivo de valoración |

Cuando el sitio web es una página de un servicio de alojamiento de código o de una tienda de aplicaciones (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play y similares), la prueba se omite, porque esa página no la gestiona el proyecto.

La prueba solo detecta los rastreadores escritos en la propia página. Los rastreadores que añaden después los scripts, y la telemetría dentro de las aplicaciones, siguen necesitando evidencias en el archivo de valoración, como una política de privacidad o un informe de [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS y ARC no se pueden ver desde fuera sin enviar correo, por lo que son criterios que se responden con evidencias en lugar de con pruebas.

Las comprobaciones automáticas que aún no se han ejecutado se muestran como "Aún no probado" y se excluyen de la puntuación, de modo que un proveedor nunca se penaliza por una prueba que no se ha hecho.

En SSL Labs se usa la calificación más baja de todas las direcciones IP de un dominio.

Hardenize ya no ofrece una API pública, por lo que cada página enlaza a su informe público en lugar de puntuarlo.

## Calendario

El [flujo de trabajo Scan](.github/workflows/scan.yml) se ejecuta cada día y prueba las 40 entradas con los resultados más antiguos (Internet.nl sigue sus propios límites, más abajo), de modo que cada servicio se prueba con regularidad sin sobrecargar las API gratuitas. Los resultados se guardan en [`scans/`](scans/) como JSON, se confirman en el repositorio y se publican con el sitio. Cada página muestra cuándo se ejecutaron sus pruebas por última vez.

Una prueba fallida conserva el resultado anterior y registra el error, para que una caída temporal no cambie una puntuación.

### Límites de Internet.nl

La API por lotes de Internet.nl se usa dentro de sus [condiciones de uso](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md):

- Como máximo 2 solicitudes por lotes en cualquier periodo de 7 días. La prueba del sitio web y la prueba del correo son solicitudes separadas, así que una ronda completa usa ambas.
- Como máximo 5000 dominios por solicitud. Cuando hay más dominios con la prueba, van primero los que no tienen resultados o tienen los más antiguos, y el resto espera a una solicitud posterior.
- No hay solicitudes de un solo dominio, así que `--only` omite Internet.nl.

Cada solicitud se registra en `scans/internetnl-requests.json`, que se confirma con los resultados incluso cuando una ejecución falla. Una ejecución que encuentra alcanzado el límite semanal omite Internet.nl y conserva los resultados existentes. Los lotes tardan horas, así que el estado de la solicitud se comprueba cada 5 minutos, y una solicitud que sigue en curso cuando termina la ejecución la recoge una ejecución posterior en lugar de enviarse de nuevo. Internet.nl ignora `--limit`, y solo las ejecuciones en la rama predeterminada usan las credenciales de Internet.nl, así que todas las ejecuciones comparten un único registro.

Este sitio web reutiliza resultados de pruebas proporcionados por la herramienta de pruebas [Internet.nl](https://internet.nl).

## Configuración

Todos los ajustes son secretos opcionales del repositorio (Settings › Secrets and variables › Actions):

| Secreto | Finalidad |
| --- | --- |
| `SSLLABS_EMAIL` | Correo electrónico registrado en la [API v4 de SSL Labs](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Sin él, se usa la API v3. El registro requiere una dirección de correo de una organización. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Cuenta para la [API por lotes de Internet.nl](https://internet.nl/faqs/batch-and-dashboard/). Sin ellos, las páginas enlazan a las pruebas públicas de Internet.nl y los criterios de Internet.nl se quedan en "desconocido". |
| `INTERNETNL_API` | URL base de la API por lotes, para una instancia [autoalojada de Internet.nl](https://github.com/internetstandards/Internet.nl). El valor predeterminado es `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory no necesita cuenta. Los datos de licencias de GitHub usan el token integrado del flujo de trabajo.

## Ejecutar las pruebas en local

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Qué dominio se prueba

El campo `domain` debe ser el sitio web principal o la aplicación web donde las personas inician sesión, por ejemplo `mail.example.com` en lugar de un subdominio de marketing en otro host. Los proveedores pueden proponer un dominio más preciso en una pull request.
