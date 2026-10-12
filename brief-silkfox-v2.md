# Silk Fox · Brief v2 (estado actual de la web)

*Octubre 2026 · Reemplaza el brief de abril. Describe lo que hoy está construido en el repositorio.*

Dos páginas conectadas por una transición:

| Página | Archivo | Para quién | Look |
|---|---|---|---|
| **Silk Fox Media** | `index.html` | Empresas y marcas | Negro y naranja, cinematográfico |
| **Silk Fox Social** | `social.html` | Bodas, aniversarios y eventos sociales | Perla, dorado y negro, editorial |

Repositorio privado: https://github.com/alejandroduitama/SilkFox-Web (rama `main`).

---

## 1. Silk Fox Media

### Decisión de negocio
- **Una sola oferta con precio: Plan Astucia, $1.000.000 COP, IVA no incluido, 5 cupos por mes, exclusivo para empresas.**
- Todo lo demás se canaliza al formulario "Tu proyecto, a tu medida" (largo aliento, eventos, rebranding, comerciales).
- **Una sola acción principal:** "Agenda tu briefing gratuito" (WhatsApp con mensaje prellenado).
- Silk Fox no solo hace video: ofrece estrategia de contenido, video y Reels, fotografía y branding. La web no promete que quien atiende sea quien produce.

### Identidad
| Elemento | Valor |
|---|---|
| Naranja (único acento) | `#FF5A1F`, hover `#FF8A5C` |
| Fondos | `#0A0A0A`, `#1A1A1A`, `#222222` |
| Bordes | `#2A2A2A` |
| Texto | `#F5F0EB`, secundario `#767676` |
| Tipografía | Montserrat 300 a 800 |
| Retrofunk Script | **Solo para las palabras "Silk Fox"** (logo y transición) |
| Logo | Zorro (`assets/images/logo.png`) + "Silk Fox" en Retrofunk + "MEDIA" pequeño en naranja |
| Nombre | Siempre "Silk Fox Media", dos palabras |

### Estructura (de arriba a abajo)
1. **Nav:** logo, Plan Astucia, A medida, Proceso, botón dorado **"✦ Bodas y eventos"** (lleva a Social, con brillo, aro pulsante y estrella animada), botón naranja "Agenda tu briefing". Se vuelve píldora flotante al hacer scroll. Menú hamburguesa en móvil.
2. **Hero:** panel vertical 9:16 con el zorro, REC y código de tiempo corriendo; el titular cruza el panel. Titular: **"No hacemos videos. Creamos impacto."** Subtítulo: "Cinco Reels, diez fotos y el calendario de tu mes. Todo para tu empresa, por $1.000.000." Botones: "Agenda tu briefing gratuito" y "Ver el Plan Astucia".
3. **Cinta animada:** Estrategia de contenido · Video y Reels · Fotografía · Branding.
4. **SF.01 Qué hacemos:** "Primero la estrategia. Después la cámara." Cuatro filas: Estrategia de contenido, Video y Reels, Fotografía de producto y marca, Branding y producciones a medida.
5. **SF.02 Paquetes** (dos tarjetas lado a lado, apiladas en móvil):
   - **Plan Astucia** · $1.000.000 COP · 5 cupos por mes.
   - **Tu proyecto, a tu medida:** formulario (nombre, empresa, tipo de proyecto, visión) que abre WhatsApp con el mensaje armado.
6. **SF.03 Proceso:** "De tu briefing a la entrega en 10 a 15 días hábiles." Cinco pasos: briefing gratuito de 30 min, propuesta y brief firmado, producción a cargo del equipo (con responsable de cuenta), revisiones y entrega final, check-in a los 30 días.
7. **SF.04 Preguntas frecuentes:** 12 preguntas en acordeón, en dos columnas. Incluye precio, qué es el Plan Astucia, pago, IVA y derechos de uso, plazos, requisitos, fuera de Bogotá y pauta.
8. **Cierre:** "Tu marca merece verse así." + "Agendar ahora".
9. **Pie compacto:** correo, Instagram @silkfoxmedia, TikTok @silkfox.media, enlace a Silk Fox Social, aviso de precios en COP sin IVA.
10. **Elementos fijos:** botón circular naranja de WhatsApp (se expande al pasar), texto vertical lateral en pantallas anchas, barra de progreso de lectura, puntero personalizado (punto + aro) solo con ratón.

### Plan Astucia
**Incluye**
- Planeación estratégica de la parrilla de contenido
- Producción y edición de 5 Reels
- Captions estratégicos para cada Reel
- Sesión de 10 fotografías de producto o marca
- 2 rondas de revisión en video (color, audio y ritmo)

**No incluye**
- Pauta publicitaria (la inversión va directo del cliente a las plataformas)
- Talento, modelos o locaciones con costo
- Material en bruto y archivos de proyecto
- Cambios de estructura después del primer corte (se cotizan aparte)

**Condiciones**
- Briefing inicial gratuito de 30 minutos antes de producir.
- Pago por transferencia (Bancolombia, Davivienda, Nequi, Daviplata): 50% de anticipo para iniciar, 50% contra entrega final aprobada. El anticipo no es reembolsable una vez iniciada la producción.
- IVA se suma según el régimen del cliente. Derechos de uso exclusivos del cliente con pago total.
- Producción presencial en Bogotá. Resto del país sujeto a viáticos.
- Rondas adicionales y extras fuera del alcance se cotizan antes de ejecutarse.

---

## 2. Silk Fox Social

### Identidad
| Elemento | Valor |
|---|---|
| Fondo principal | Perla `#FAFAFA`, crema `#F3EFE7` |
| Dorado | `#C5A059`, hover `#D4AF37` (en líneas, botones, rombos, marcos; **no** como texto sobre blanco por contraste) |
| Negro | `#0A0A0A` |
| Proporción buscada | Blanco dominante, dorado en bloques (franja) y negro en detalles |
| Tipografía | Montserrat 300 y 400; Retrofunk **solo** en "Silk Fox" |
| Marca | "Silk Fox" en Retrofunk + "SOCIAL" en Montserrat ligera, mayúsculas espaciadas |

### Estructura
1. **Nav:** logo, Portafolio, Paquetes, Agenda tu fecha y botón negro con borde naranja **"✦ Silk Fox MEDIA"** (vuelve a Media, con barrido naranja y aro pulsante).
2. **Hero:** "Silk Fox" enorme, "SOCIAL" debajo, marco doble dorado con rombos en las esquinas. Subtítulo: "Tus momentos más inolvidables, contados con calma." Botones: "Reserva tu fecha" y "Ver portafolio".
3. **Franja dorada animada:** Bodas · Aniversarios · Eventos sociales · Retratos.
4. **Portafolio:** mosaico masonry con filtros Todo, Bodas, Eventos Sociales y Retratos. **Hoy son 9 marcos sin fotos (marcados MOCK en el HTML).**
5. **Paquetes** (3 tarjetas, Signature en negro):
   - **Esencial, desde $2.000.000 COP:** hasta 6 horas de foto y video, galería digital en alta resolución, highlight film de 3 a 5 min, 1 fotógrafo y 1 videógrafo.
   - **Signature (sin precio publicado):** hasta 10 horas, galería completa y sesión pre-boda, highlight film de 5 a 7 min y video documental de ceremonia y discursos, drone según clima y permisos, 2 fotógrafos y 2 videógrafos.
   - **Cobertura Personalizada (a medida):** grandes formatos, varios días o destinos fuera de la ciudad.
6. **Agenda tu Fecha:** tarjeta negra con marco dorado. Formulario: nombre, fecha, locación, tipo de evento (+ paquete elegido). Abre WhatsApp con el mensaje armado. Texto: "El cupo anual de bodas es limitado para cuidar la calidad de cada una."
7. **Pie:** correo, Instagram, TikTok y enlace "← Silk Fox Media".

---

## 3. Transición entre páginas
- Al pulsar un enlace entre marcas, una cortina curva sube con el color de la página de destino y el nombre en grande ("Silk Fox" en Retrofunk + SOCIAL o MEDIA), una línea del color de acento, y se levanta al cargar la nueva página.
- Perla/dorado hacia Social; negro/naranja hacia Media. Sin parpadeo en la llegada.
- Se omite con "reducir movimiento" y con Ctrl/Cmd+clic.

## 4. Movimiento y accesibilidad
- Entradas con desvanecido, subida y enfoque; titular del hero palabra por palabra; precio que cuenta hasta su valor; luz que sigue al cursor; foco de luz en tarjetas.
- Todo se desactiva con `prefers-reduced-motion`.
- Mobile first, sin scroll horizontal entre 360 y 1440 px, foco visible, `aria-label` en controles solo con icono.

## 5. SEO
| Página | Title | Descripción |
|---|---|---|
| Media | Productora Audiovisual en Bogotá \| Silk Fox Media | Productora audiovisual en Bogotá. Plan Astucia: estrategia de contenido, 5 Reels y 10 fotografías para tu empresa por $1.000.000 COP. Briefing gratis. |
| Social | Fotógrafo y Videógrafo de Bodas en Bogotá \| Silk Fox Social | Fotografía y video cinematográfico para bodas, aniversarios y eventos sociales en Bogotá. Paquete Esencial desde $2.000.000 COP. Agenda tu fecha. |

- Datos estructurados (JSON-LD): `ProfessionalService` con oferta, y `FAQPage` en Media; `ProfessionalService` con `parentOrganization` en Social.
- `robots.txt`, `sitemap.xml` (ambas páginas), `llms.txt`, Open Graph, favicon, apple-touch-icon.
- Palabras objetivo: productora audiovisual Bogotá, video corporativo Colombia, fotografía de producto Bogotá, fotógrafo de bodas Bogotá, video de bodas Bogotá.

## 6. Contacto
- WhatsApp: +57 321 284 1853 (constante `WHATSAPP_NUMBER` en `main.js` y `social.js`)
- Correo: silkfoxmedia@gmail.com
- Instagram: @silkfoxmedia · TikTok: @silkfox.media

## 7. Archivos
`index.html` · `social.html` · `styles.css` · `social.css` · `main.js` · `motion.js` · `social.js` · `transition.css` · `transition.js` · `robots.txt` · `sitemap.xml` · `llms.txt` · `assets/` (logo, favicon, og.jpg, fuente Retrofunk).

## 8. Pendientes por confirmar
1. **Fotos y videos reales** para el portafolio de Social (hoy son marcos de relleno) y, si se quiere, un clip vertical para el panel del hero de Media.
2. **Precio del Paquete Signature.** Hoy dice "Cobertura total".
3. **Datos que puse yo y no vinieron del documento de oferta:** 2 rondas de revisión, entrega en 10 a 15 días hábiles, responsable de cuenta que informa al cliente, check-in a los 30 días y los "No incluye".
4. **Plan Astucia:** si es de un solo mes o recurrente, si se mantiene el testimonio en video y la reseña a cambio del precio (hoy la página no lo menciona), y si siguen los 5 cupos por mes.
5. **Cómo se factura** (persona natural o empresa) para definir IVA y retención.
6. **Pauta pagada con las piezas:** permitida o no. Valor de cada ronda extra de revisión.
7. **Imagen para compartir:** `og.jpg` usa una fuente del sistema; falta una versión con Montserrat y una propia para Social.
8. **Rutas finales:** los enlaces usan `index.html` y `social.html`. Al publicar con rutas limpias (`/` y `/social`), actualizar enlaces, canonical y sitemap.
9. **Dominio y hosting** (Netlify, Vercel o GitHub Pages) y analítica, si se quiere.
10. **Aviso de privacidad (Ley 1581 de 2012):** los formularios recogen datos personales; hoy hay solo una nota breve.
