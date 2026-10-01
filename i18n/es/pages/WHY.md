<!-- source: 206790af40f5 -->
# Por qué existe Privacy Ratings

Las guías de privacidad ayudan a millones de personas a elegir mejores aplicaciones y servicios. Muchas hacen un trabajo excelente. Pero la mayoría comparten las mismas debilidades:

- **Reglas poco claras.** Un servicio se incluye o se excluye, y el motivo es un hilo de un foro, un debate privado o simplemente no se publica.
- **Solo aprobado o suspenso.** Una lista dice "recomendado" o no dice nada. No muestra cuánto se acercó algo ni qué cambiaría el resultado.
- **Afirmaciones sin comprobar.** Las descripciones dicen "cifrado" o "sin registros" sin enlazar a nada que el lector pueda verificar.
- **Sin pruebas.** Rara vez se comprueba la seguridad básica de los servicios alojados, como la configuración TLS, las cabeceras de seguridad o la autenticación del correo.
- **Plataformas separadas.** Las sugerencias y los debates tienen lugar en un foro o servidor de chat que necesita su propia cuenta y su propia moderación, al margen del contenido en sí.
- **Lentitud en los cambios.** Cuando un producto cambia, las listas a menudo quedan desactualizadas porque actualizarlas depende de unas pocas personas.

Privacy Ratings está diseñado para resolver cada uno de estos problemas.

## De las listas awesome a un recurso mantenido

Muchas de estas guías empezaron como listas en GitHub. El formato de lista "awesome", creado por [Sindre Sorhus](https://github.com/sindresorhus/awesome), facilitó que cualquiera publicara una lista seleccionada, y le siguieron miles de listas awesome sobre todo tipo de temas, muchas de ellas forks unas de otras. Listas como [Awesome Privacy](https://github.com/lissy93/awesome-privacy) hacen un trabajo valioso, y muchas de las entradas de este sitio aparecieron primero allí.

El formato tiene una debilidad: la mayoría de las listas dependen de uno o dos voluntarios. Cuando un mantenedor lo deja, la lista se paraliza, se archiva o se divide en forks que se van quedando desactualizados. Los lectores no pueden saber qué copia está al día, y nada de una lista se prueba ni se puntúa.

**Privacy Ratings está respaldado y gestionado por una empresa, [Forward Email](https://forwardemail.net).** No depende de voluntarios que puedan irse o archivar el repositorio. Los datos están estructurados en lugar de estar en un único README, por lo que se pueden validar, puntuar y probar automáticamente cada día. Y como todo es de código abierto y tiene licencia CC BY-SA, la comunidad siempre puede copiarlo, comprobarlo y mejorarlo.

## Qué lo hace diferente

**Todas las reglas son públicas.** Cada categoría tiene una lista breve de preguntas con un peso de 1 a 3. Las preguntas, el significado de cada respuesta y cómo verificarla están en la carpeta [`criteria/`](criteria/). Consulte [los criterios](https://privacyratings.com/criteria/).

**Cada respuesta tiene evidencias.** Un "sí" o un "parcial" debe enlazar a una fuente que cualquiera pueda comprobar: documentación, código fuente, un archivo de licencia o un informe de auditoría. Todo lo que no tenga evidencias cuenta como "desconocido" y puntúa cero. Una entrada solo recibe una calificación con letra cuando suficientes respuestas están respaldadas por evidencias.

**Puntuaciones, no solo listas.** Cada entrada recibe una puntuación de 0 a 100, para que los lectores puedan ver cómo se comparan los servicios y en qué se queda corto exactamente cada uno.

**Pruebas de seguridad automáticas.** Los servicios alojados se prueban periódicamente con Qualys SSL Labs, Mozilla HTTP Observatory e Internet.nl (incluida la prueba de correo de Internet.nl para los proveedores de correo). Los resultados se guardan en el repositorio y se enlazan desde cada página. Consulte [SCANS.md](SCANS.md).

**Jurisdicción a la vista.** Cada página muestra dónde tiene su sede la empresa, si ese país forma parte de los Five, Nine o Fourteen Eyes, si se aplica el RGPD y si le afecta la CLOUD Act de EE. UU. La jurisdicción se muestra pero no se puntúa, porque lo que un proveedor puede entregar depende sobre todo de lo que guarda y de quién tiene las claves. Consulte [jurisdicciones](https://privacyratings.com/jurisdictions/) y [la CLOUD Act](https://privacyratings.com/cloud-act/).

**Todo ocurre en GitHub.** Las sugerencias y correcciones son incidencias de GitHub. Los cambios son pull requests. Los debates tienen lugar en GitHub Discussions. No hay un foro, un servidor de chat ni un sistema de cuentas aparte. Cada cambio en cada valoración tiene un historial público.

**Datos abiertos.** Las valoraciones son archivos Markdown y YAML simples, y el conjunto de datos completo se publica en JSON. El contenido tiene licencia CC BY-SA 4.0, así que cualquiera puede reutilizarlo.

**Las recomendaciones se identifican como tales.** Los mantenedores eligen una o dos recomendaciones por categoría y explican cada una. Las recomendaciones se muestran por separado y nunca modifican las puntuaciones, de modo que el lector siempre puede distinguir el criterio editorial de los resultados medidos.

## Quién lo mantiene

Privacy Ratings está respaldado, financiado y mantenido por [Forward Email](https://forwardemail.net), un servicio de correo centrado en la privacidad que también se valora aquí. Eso garantiza el mantenimiento del proyecto a largo plazo, y también es un conflicto de intereses, por lo que se gestiona de forma abierta:

- Forward Email se puntúa con los mismos criterios que cualquier otro proveedor de correo.
- Su entrada incluye una declaración, igual que cualquier entrada con otro tipo de vínculo con los mantenedores.
- Los cambios que suben la puntuación de una entrada afiliada deben enlazar evidencias y permanecer abiertos a revisión pública antes de fusionarse. Consulte [GOVERNANCE.md](GOVERNANCE.md).
- No hay enlaces de afiliados, posiciones pagadas ni patrocinios. La validación rechaza los enlaces con parámetros de referido.

Si una valoración parece incorrecta, abra una incidencia o una pull request con evidencias. Ese es todo el proceso.

## Créditos

Muchas entradas se incluyeron por primera vez a partir de [Awesome Privacy](https://github.com/lissy93/awesome-privacy), publicada bajo CC0. Los datos de alojamiento de servidores de correo proceden de [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
