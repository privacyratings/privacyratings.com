<!-- source: 63c0d07d1a26 -->
# Gobernanza

Cómo se toman las decisiones, cómo se eligen las recomendaciones y cómo se gestionan los conflictos de intereses.

## Mantenedores

Los mantenedores revisan y fusionan pull requests, clasifican incidencias y moderan los Discussions. Los mantenedores figuran en [`.github/CODEOWNERS`](.github/CODEOWNERS). Cualquiera puede convertirse en mantenedor tras un historial de contribuciones precisas y bien documentadas.

## Cómo se aceptan los cambios

1. Todos los cambios pasan por una pull request. Nadie, ni siquiera los mantenedores, sube cambios de valoraciones directamente a `main`.
2. Cada pull request debe superar `npm test` (validación y compilación).
3. Al menos un mantenedor aprueba la pull request.
4. Las respuestas necesitan evidencias de una fuente primaria: documentación oficial, código fuente, archivos de licencia, informes de auditoría publicados o pruebas reproducibles. Las reseñas, las entradas de blog y las afirmaciones de marketing sin detalles no son evidencias.
5. Cuando las fuentes no coinciden, prevalece la fuente primaria más reciente. Si sigue sin estar claro, la respuesta es "desconocido".

## Cambios en los criterios

Los criterios definen cada puntuación, por lo que los cambios en `criteria/` requieren más cuidado:

- Abra primero una incidencia "Criteria change" o un Discussion.
- La pull request permanece abierta al menos 7 días para comentarios públicos.
- Necesita la aprobación de dos mantenedores.
- Los identificadores de los criterios nunca se renombran una vez publicados. Para retirar un criterio, elimínelo en una pull request que explique el motivo.

## Recomendaciones

- Cada categoría puede tener hasta dos recomendaciones.
- Una recomendación debe tener un `pick_reason` que explique la elección con lenguaje sencillo.
- Cada categoría tiene como máximo dos recomendaciones, ordenadas con `pick: 1` y `pick: 2`.
- Las recomendaciones son editoriales. Se muestran por separado y nunca modifican las puntuaciones.
- Cualquiera puede cuestionar una recomendación en la categoría "Picks" de Discussions. Las objeciones se responden públicamente.

## Conflictos de intereses

Privacy Ratings lo mantiene el equipo de Forward Email. Las entradas vinculadas a los mantenedores son "entradas afiliadas". Actualmente, eso significa Forward Email.

Normas para las entradas afiliadas:

- Cada entrada afiliada incluye una `disclosure` que se muestra en la parte superior de su página.
- Una pull request que sube la puntuación de una entrada afiliada, o la convierte en recomendación, debe enlazar evidencias para cada respuesta modificada y permanecer abierta al menos 7 días antes de fusionarse.
- Una pull request que baja la puntuación de una entrada afiliada con evidencias válidas se fusiona como cualquier otra.
- Los mantenedores deben añadir una declaración a cualquier entrada con la que ellos, o su empleador, tengan una relación económica o personal.

## Dinero

- Sin enlaces de afiliados. La validación rechaza las URL con parámetros de referido o de seguimiento.
- Sin posiciones pagadas, entradas patrocinadas ni reseñas pagadas.
- Los proveedores pueden enviar correcciones como cualquier otra persona, con evidencias, y deben indicar que son el proveedor.

## Moderación

Las incidencias, las pull requests y los Discussions siguen el [Código de conducta](CODE_OF_CONDUCT.md). Los mantenedores pueden bloquear u ocultar comentarios abusivos, fuera de tema o promocionales.
