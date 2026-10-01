<!-- source: 2f40b8f7e8ef -->
# ¿Qué es la CLOUD Act?

La **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** es una ley de EE. UU. que responde a una pregunta: ¿pueden las autoridades estadounidenses obtener datos de una empresa estadounidense cuando esos datos están almacenados en otro país? La respuesta es sí.

## Qué hace

1. **La ubicación no importa.** Un proveedor sujeto a la jurisdicción de EE. UU. debe entregar los datos que estén en su "posesión, custodia o control" en respuesta a un procedimiento legal válido de EE. UU., sin importar en qué lugar del mundo estén almacenados. [Fuente: Departamento de Justicia de EE. UU.](https://www.justice.gov/criminal/cloud-act-resources)
2. **Acuerdos con otros países.** EE. UU. puede firmar acuerdos de acceso a datos que permiten a gobiernos extranjeros de confianza solicitar datos directamente a proveedores estadounidenses en casos de delitos graves, sin pasar por el procedimiento más lento de los tratados de asistencia judicial mutua (MLAT). [Fuente: Departamento de Justicia de EE. UU.](https://www.justice.gov/criminal/cloud-act-resources)
3. **Una vía para oponerse.** Los proveedores pueden pedir a un tribunal que anule o modifique una solicitud cuando entre en conflicto con las leyes de otro país con el que exista un acuerdo.

Hay acuerdos en vigor con el **Reino Unido** y **Australia**. Se han anunciado negociaciones con **Canadá** y la **Unión Europea**. [Fuente: Departamento de Justicia de EE. UU.](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Qué no hace

- No crea nuevos poderes de vigilancia ni elimina la necesidad de una orden judicial. Las autoridades estadounidenses siguen necesitando un procedimiento legal válido, y el contenido de las comunicaciones requiere en general una orden de registro.
- No obliga a un proveedor a descifrar datos que no puede descifrar. Abarca los datos que tiene el proveedor. Los datos cifrados con claves que solo tiene el usuario siguen cifrados.
- No se aplica solo a los centros de datos de EE. UU. Elegir una ubicación de servidores en Europa no sirve de nada si la empresa que los gestiona está sujeta a la jurisdicción de EE. UU.

## A quién afecta

A todas las empresas sujetas a la jurisdicción de EE. UU.: Google, Microsoft, Apple, Amazon, Cloudflare y servicios estadounidenses más pequeños, incluido Forward Email. Consulte [todos los servicios valorados con sede en Estados Unidos](/jurisdictions/united-states/).

También puede alcanzar a **servicios no estadounidenses que almacenan datos en proveedores de nube estadounidenses**, ya que el propio proveedor de nube puede recibir una solicitud. Por eso la pregunta útil no es solo "¿dónde está la empresa?", sino también "¿qué datos existen y quién tiene las claves?".

## Por qué el cifrado y la minimización de datos importan más que la ubicación

Las leyes cambian, y todos los países tienen alguna forma de exigir datos. Lo que más importa es lo que un proveedor **puede** entregar:

| Situación | A qué puede llegar una solicitud |
| --- | --- |
| Correo almacenado en texto plano | Todo lo que hay en el buzón |
| Correo cifrado en reposo con claves que tiene el proveedor | Todo, porque el proveedor puede descifrarlo |
| Correo cifrado con claves derivadas de la contraseña del usuario | Datos de la cuenta y de conexión, no el contenido de los mensajes |
| No se guardan registros | Nada sobre la actividad |

Ejemplos reales:

- **Proton (Suiza, fuera de todos los acuerdos Eyes)** cumplió 8.313 de 9.301 órdenes judiciales suizas en su informe anual más reciente, facilitando la información de cuenta que tiene. [Fuente: informe de transparencia de Proton](https://proton.me/legal/transparency)
- **Proton VPN (misma empresa, mismo país)** no cumplió ninguna, porque no guarda registros. [Fuente: informe de transparencia de Proton](https://proton.me/legal/transparency)
- **Tuta (Alemania)** puede recibir de un juez alemán la orden de entregar buzones o vigilarlos en tiempo real. El correo cifrado de extremo a extremo sigue cifrado. [Fuente: informe de transparencia de Tuta](https://tuta.com/blog/transparency-report)

La misma empresa en el mismo país obtiene resultados muy distintos según los datos que existen. Por eso Privacy Ratings muestra la jurisdicción en cada página, pero puntúa lo que los proveedores hacen realmente. Consulte [cómo se trata la jurisdicción](/jurisdictions/).

## Cómo se aplica la CLOUD Act a Forward Email

Forward Email tiene su sede en Estados Unidos y está sujeto a la CLOUD Act. Su [documento técnico](https://forwardemail.net/technical-whitepaper.pdf) describe cómo su diseño limita aquello a lo que podría llegar una solicitud:

- **Buzones cifrados.** Cada buzón es un archivo SQLite cifrado de forma individual. El documento técnico indica que Forward Email no puede acceder al contenido de los mensajes.
- **Sin registro en disco del contenido ni de los metadatos del correo.** Forward Email no guarda registros de a quién escriben los usuarios.
- **Datos limitados.** Lo que podría divulgarse es información básica de la cuenta (como la dirección de correo de la cuenta, la fecha de registro y los datos de pago) y registros limitados de direcciones IP que pueden conservarse temporalmente por seguridad y para prevenir abusos.
- **Solo con un procedimiento legal válido.** Las solicitudes necesitan una citación judicial, una orden judicial o una orden de registro. Las solicitudes de fuera de EE. UU. deben llegar a través de un tribunal estadounidense, un tratado de asistencia judicial mutua o un acuerdo de la CLOUD Act que cumpla los requisitos legales de EE. UU.
- **Aviso e impugnaciones.** Se avisa a los usuarios cuando la ley lo permite, y se impugnan las solicitudes excesivamente amplias.

Forward Email mantiene Privacy Ratings. Su valoración usa los mismos criterios que la de cualquier otro proveedor. Consulte [la valoración de Forward Email](/email-providers/forward-email/) y [las normas de gobernanza](/governance/).

## Más información

- [Departamento de Justicia de EE. UU.: recursos sobre la CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: intercambio transfronterizo de datos según la CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: vigilancia según la sección 702](https://www.eff.org/702-spying)
- [EFF: National Security Letters](https://www.eff.org/issues/national-security-letters)
