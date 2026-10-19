<!-- source: 95e0ae8a3554 -->
# Política de privacidad

Privacy Ratings no usa cookies, no ejecuta analíticas y no carga nada desde otros sitios. Esta página describe todo lo que sí ocurre cuando visita el sitio o usa la herramienta de línea de comandos.

## Alojamiento

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) sirve este sitio. GitHub registra la dirección IP de cada visitante por motivos de seguridad, como se describe en la [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Privacy Ratings no tiene servidor propio ni acceso a esos registros.

## Qué guarda el sitio en su navegador

- `theme`: el tema de color, si eligió uno.
- `lang`: el idioma que eligió, o el que coincidía con su navegador en su primera visita.
- `mastodon`: el servidor de Mastodon que escribió en el menú para compartir, si lo usó.
- Un service worker guarda copias de las páginas que abrió para que funcionen sin conexión.

Todo se queda en su dispositivo. Al borrar los datos del sitio en su navegador, se elimina.

## Solicitudes a otros sitios

Todos los scripts, hojas de estilo, fuentes, imágenes y vídeos se cargan desde privacyratings.com, y una Content Security Policy bloquea todo lo demás. Los enlaces a otros sitios, incluidos los de compartir, no cargan nada hasta que los abre.

## Búsqueda

El cuadro de búsqueda descarga el índice de búsqueda desde este sitio y lo filtra en su navegador. En la página de búsqueda, sus palabras aparecen en la dirección de la página, como en cualquier otro enlace.

## Herramienta de línea de comandos

La herramienta de línea de comandos `privacyratings` no envía analíticas ni telemetría. Descarga las valoraciones desde este sitio y consulta la API de GitHub una vez al día para ver si hay una versión nueva. Si hay una versión más reciente, se actualiza desde GitHub o con npm. Defina `PRIVACYRATINGS_NO_UPDATE=1` o use `--no-update` para desactivar las actualizaciones.

## Contribuciones

Los issues, pull requests y debates se hacen en GitHub y son públicos. La GitHub General Privacy Statement cubre su cuenta de GitHub.

## Contacto

Haga sus preguntas sobre esta política en un [issue de GitHub](https://github.com/privacyratings/privacyratings.com/issues). Informe de problemas de seguridad como se indica en [SECURITY.md](https://github.com/privacyratings/privacyratings.com/blob/main/SECURITY.md).
