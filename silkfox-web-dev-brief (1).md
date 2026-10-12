# Silk Fox Media — Brief de Desarrollo Web
*Documento para desarrollador · Página de servicios y precios · Abril 2026*

---

## 1. Identidad Visual — Tokens de Diseño

### Paleta de colores

| Variable sugerida       | Hex       | Uso                                              |
|-------------------------|-----------|--------------------------------------------------|
| `--color-orange`        | `#FF5A1F` | Acento principal · CTAs · highlights · íconos    |
| `--color-orange-light`  | `#FF8A5C` | Acentos secundarios · hover states               |
| `--color-bg-primary`    | `#0A0A0A` | Fondo base de toda la página                     |
| `--color-bg-secondary`  | `#1A1A1A` | Fondos de cards · secciones alternadas           |
| `--color-bg-tertiary`   | `#222222` | Hover de cards · inputs                          |
| `--color-border`        | `#2A2A2A` | Bordes · divisores · reglas                      |
| `--color-text-primary`  | `#F5F0EB` | Texto principal sobre fondos oscuros             |
| `--color-text-secondary`| `#767676` | Texto secundario · labels · notas                |

> **Regla no negociable:** Los fondos siempre son oscuros. Negro o gris oscuro como base. Nunca blanco como fondo principal.

### Tipografía

| Rol           | Fuente             | Pesos a cargar         | Uso                                      |
|---------------|--------------------|------------------------|------------------------------------------|
| Principal     | Montserrat (Google)| 300, 400, 500, 600, 700, 800 | Todo el sitio                      |
| Display/Logo  | Retrofunk Script   | Regular                | Solo logotipo y piezas especiales — no como tipografía de cuerpo |

**Jerarquía tipográfica:**

| Elemento         | Peso  | Tamaño ref. | Notas                              |
|------------------|-------|-------------|------------------------------------|
| Headline hero    | 800   | 48–60px     | Letter-spacing: -0.02em            |
| Subtítulos H2    | 700   | 28–36px     | Letter-spacing: -0.01em            |
| Nombres de plan  | 800   | 22–26px     |                                    |
| Precio           | 800   | 22–28px     | Color naranja en plan destacado    |
| Body / items     | 300   | 13–14px     | Line-height: 1.6–1.7               |
| Labels / eyebrows| 700   | 10–11px     | Letter-spacing: 0.18–0.22em · UPPERCASE |
| Notas / legal    | 400   | 11–12px     | Color: `--color-text-secondary`    |

### Estética y efectos

- Cinematográfico, oscuro, minimalista con tensión visual en el acento naranja
- Grain/textura sutil en overlays es opcional pero bienvenido (ver inspiraciones)
- El naranja `#FF5A1F` es la única firma de color — úsarlo con contención, no en todo
- Border-radius en cards: 12px (suave pero no redondo)
- Bordes de cards: `0.5px solid #2A2A2A` por defecto · `1.5px solid #FF5A1F` para el plan destacado
- Sin sombras de caja decorativas
- Espaciado generoso: el negro vacío es parte del diseño, no un error

---

## 2. Estructura de la Página

La página es una single-page (puede ser `/precios` o `/servicios`). Orden de secciones de arriba a abajo:

```
1. NAV / HEADER
2. HERO
3. PLANES (3 cards)
4. PROGRAMA CLIENTES FUNDADORES
5. CÓMO TRABAJAMOS (proceso)
6. CONDICIONES COMERCIALES
7. PREGUNTAS FRECUENTES
8. FOOTER / CTA FINAL
```

---

## 3. Contenido por Sección

---

### SECCIÓN 1 — Nav / Header

**Elementos:**
- Logo: "Silk Fox Media" (Retrofunk Script para el logotipo gráfico; si no está disponible como SVG, usar Montserrat 700 + punto naranja como separador visual)
- Links de navegación: Servicios · Proceso · Contacto
- CTA en nav: botón "Agenda tu briefing" → ancla a sección de contacto o formulario

**Notas para el dev:**
- Nav sticky con fondo `#0A0A0A` al hacer scroll
- En mobile: hamburger menu
- El nombre siempre se escribe "Silk Fox Media" — nunca junto como "SilkFox"

---

### SECCIÓN 2 — Hero

**Eyebrow (label pequeño encima del título):**
> Productora audiovisual · Bogotá, Colombia · Precios de lanzamiento 2026

**Headline principal:**
> No hacemos videos.
> Creamos impacto.

*La palabra "impacto" puede tener el acento naranja `#FF5A1F`.*

**Subtítulo:**
> Video, branding y redes sociales para marcas colombianas que quieren verse increíbles sin pagar tarifas de agencia establecida.

**CTA primario (botón):**
> Agenda tu briefing gratuito →

**CTA secundario (ghost button, opcional):**
> Ver planes

**Notas para el dev:**
- El headline debe ser grande y contundente. Peso 800. Ocupa toda la atención.
- En desktop: la palabra "impacto" puede aparecer en una segunda línea con color naranja
- Animación de entrada: fade + leve desplazamiento hacia arriba (200ms, sin exagerar)
- Fondo: puede tener una imagen o video de fondo muy oscurecido (overlay negro al 80%) o solo negro puro

---

### SECCIÓN 3 — Planes de Servicio

**Label de sección:**
> Planes · COP · IVA no incluido

**Orden de los planes (de primero a último):**

1. Socio Creativo — plan destacado
2. Renovación Total
3. Despegue Visual

**Layout sugerido:**
- Desktop: 3 columnas de igual ancho o la central ligeramente más alta
- Mobile: stacked verticalmente, el destacado primero
- El plan "Socio Creativo" lleva borde naranja `1.5px solid #FF5A1F` y badge "Recomendado"

---

#### Plan 1 — Socio Creativo (DESTACADO)

| Campo           | Contenido                                  |
|-----------------|--------------------------------------------|
| Badge           | ★ Recomendado                              |
| Nombre          | Socio Creativo                             |
| Tagline         | Tu equipo creativo in-house, sin contratarlo de planta. |
| Precio          | $3.800.000                                 |
| Periodicidad    | / mes · mínimo 3 meses                     |
| Color del precio| `#FF5A1F` (naranja)                        |

**Incluye:**

| Ícono sugerido | Etiqueta    | Descripción                                         |
|----------------|-------------|-----------------------------------------------------|
| video          | Video       | 1 jornada de grabación mensual recurrente           |
| camera         | Foto        | 15 imágenes nuevas por mes                          |
| layout-grid    | Diseño      | 15 piezas mensuales (carruseles, posts, Stories)    |
| brand-instagram| Gestión     | Calendario editorial + 2 redes sociales activas     |
| info-circle    | Nota        | Pauta publicitaria: presupuesto directo del cliente a las plataformas, no incluida en el fee. |

---

#### Plan 2 — Renovación Total

| Campo           | Contenido                                         |
|-----------------|---------------------------------------------------|
| Badge           | Más completo                                      |
| Nombre          | Renovación Total                                  |
| Tagline         | Para marcas que ya venden y necesitan material premium. |
| Precio          | $7.500.000                                        |
| Periodicidad    | proyecto único                                    |

**Incluye:**

| Ícono sugerido | Etiqueta    | Descripción                                                     |
|----------------|-------------|-----------------------------------------------------------------|
| pencil-star    | Identidad   | Brandbook completo + Logo + Plantillas editables para posts     |
| video          | Video       | Jornada de 8h → 1 video Hero + 6 Reels                         |
| camera         | Foto        | Sesión de medio día → 35 fotos de producto y estilo de vida     |
| package        | Entrega     | Ecosistema de contenidos listo para 3 meses de publicación activa |

**Ahorro visible (debajo de los items):**
> Por separado: ~~$8.800.000~~ · Ahorrás $1.300.000

---

#### Plan 3 — Despegue Visual

| Campo           | Contenido                                             |
|-----------------|-------------------------------------------------------|
| Badge           | (sin badge)                                           |
| Nombre          | Despegue Visual                                       |
| Tagline         | Para negocios que necesitan salir al mercado con fuerza. |
| Precio          | $3.200.000                                            |
| Periodicidad    | proyecto único                                        |

**Incluye:**

| Ícono sugerido | Etiqueta    | Descripción                                              |
|----------------|-------------|----------------------------------------------------------|
| palette        | Identidad   | Logo + paleta cromática + tipografía base                |
| video          | Video       | Jornada de 4h → 1 video principal + 3 Reels              |
| camera         | Foto        | Sesión de 2h → 15 fotos editadas para digital            |
| package        | Entrega     | Kit de activos digitales listos para publicar en redes y web |

**Ahorro visible:**
> Por separado: ~~$4.200.000~~ · Ahorrás $1.000.000

---

### SECCIÓN 4 — Programa Clientes Fundadores

**Label de sección:**
> Programa Clientes Fundadores

**Precio grande:**
> $950.000 COP

**Sub-label del precio:**
> 5 cupos por mes

**Título:**
> Para los que confían primero.

**Descripción:**
> Precio especial a cambio de testimonio en video y reseña verificada. Calidad real, sin compromisos de portafolio lleno.

**Incluye:**
- 1 video editado en 3 formatos: Reels, TikTok y Stories
- 10 fotos profesionales editadas
- Diseño de portadas y thumbnails

**Layout:** Card de fondo `#1A1A1A`, precio en naranja grande a la izquierda, contenido a la derecha. En mobile: stacked.

---

### SECCIÓN 5 — Cómo Trabajamos

**Label de sección:**
> Cómo trabajamos

**Pasos:**

| # | Título                                  | Descripción                                                                                              |
|---|------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 01 | Briefing gratuito · 30 min             | Entendemos tu negocio, tu audiencia y tus objetivos. Sin costo, sin compromiso. Si no encajamos, te decimos. |
| 02 | Propuesta y brief firmado              | Alcance claro, cronograma real, condiciones sin letra pequeña. Firmamos antes de arrancar.               |
| 03 | Producción con punto de contacto directo | Hablas con quien filma, edita y entrega. Sin intermediarios. Proyectos únicos: 10–15 días hábiles. Plan mensual: entrega semanal. |
| 04 | Revisiones y entrega final             | 2 rondas en diseño, 2 rondas en video. Ajustes de color, audio y ritmo. Cambios estructurales se cotizan aparte. |
| 05 | Check-in a los 30 días                 | El trabajo no termina en la entrega. Verificamos que el material esté funcionando.                       |

**Layout:** Lista vertical con número en naranja a la izquierda y línea divisora entre pasos. En desktop puede ser horizontal tipo timeline.

---

### SECCIÓN 6 — Condiciones Comerciales

**Label de sección:**
> Condiciones comerciales

**Items (grid de 2–3 columnas en desktop, 1 en mobile):**

| Ícono        | Texto                                                          |
|--------------|----------------------------------------------------------------|
| credit-card  | Proyectos únicos: 50% al iniciar · 50% contra entrega          |
| calendar     | Plan mensual: pago los primeros 5 días del mes                 |
| file-invoice | IVA no incluido · se suma según régimen tributario del cliente |
| shield-check | Derechos de uso exclusivos del cliente con pago total          |
| lock         | Anticipo no reembolsable una vez iniciada la producción        |
| plus         | Extras fuera del scope se cotizan antes de ejecutarse          |

**Layout:** Cards pequeñas con ícono + texto. Fondo `#1A1A1A`.

---

### SECCIÓN 7 — Preguntas Frecuentes

**Label de sección:**
> Preguntas frecuentes

**Implementar como accordion (expandible/colapsable).**

| Pregunta | Respuesta |
|----------|-----------|
| ¿Trabajan con cualquier industria? | Sí. Trabajamos con marcas de consumo, negocios locales, restaurantes, gimnasios, artistas e inmobiliarias. Si tienes dudas sobre si tu proyecto encaja, agenda el briefing — es sin costo. |
| ¿Qué necesito tener listo antes de empezar? | Claridad sobre tu producto o servicio, referencias visuales de lo que te gusta, y acceso al espacio o locación. El resto lo construimos contigo. |
| ¿Puedo combinar servicios de distintos planes? | Sí. Los planes son puntos de partida, no límites. Si necesitas una propuesta a medida, lo cotizamos en el briefing. |
| ¿Qué pasa si necesito más revisiones de las incluidas? | Se cotizan por ronda antes de ejecutarse. El valor depende del tipo de ajuste. |
| ¿Trabajan con marcas fuera de Bogotá? | Para producción presencial trabajamos en Bogotá y ciudades principales. Diseño y estrategia se ejecutan de forma remota para cualquier ciudad. |
| ¿Hacen pauta digital? | Diseñamos las piezas y la estrategia. La inversión publicitaria la maneja directamente el cliente con las plataformas (Meta, Google, TikTok). |

---

### SECCIÓN 8 — Footer / CTA Final

**Tagline:**
> Silk Fox Media · Bogotá

**Headline:**
> Tu marca merece verse así.

**Subtítulo:**
> Briefing sin costo · sin compromiso · 30 minutos.
> Cupos de lanzamiento limitados.

**CTA primario:**
> Agendar ahora →

*(El botón debe anclar o redirigir al formulario de contacto / WhatsApp / Calendly según lo que el cliente configure)*

**Contacto:**

| Canal      | Dato                       |
|------------|----------------------------|
| Web        | silkfox.co                 |
| Email      | silkfoxmedia@gmail.com     |
| Instagram  | @silkfoxmedia              |
| Horario    | Lun–Vie 9am–6pm · Sáb 9am–1pm |

---

## 4. Componentes y Notas Técnicas

### Botones

| Tipo          | Estilo                                                                          |
|---------------|---------------------------------------------------------------------------------|
| Primario      | Fondo `#FF5A1F` · texto blanco · Montserrat 700 · uppercase · border-radius 100px |
| Ghost / secundario | Borde `0.5px solid #3A3A3A` · texto `#F5F0EB` · fondo transparente · misma tipografía |
| Hover primario| Fondo `#FF8A5C`                                                                 |
| Hover ghost   | Fondo `#1A1A1A`                                                                 |

### Cards de planes

```
background: #1A1A1A
border: 0.5px solid #2A2A2A
border-radius: 12px
padding: 1.5rem

/* Plan destacado (Socio Creativo) */
border: 1.5px solid #FF5A1F
```

### Badge de "Recomendado"

```
background: #FF5A1F
color: #FFFFFF
font-size: 10px
font-weight: 700
letter-spacing: 0.14em
text-transform: uppercase
padding: 4px 12px
border-radius: 100px
```

### Íconos

Usar Tabler Icons (outline). Los íconos en color `#FF5A1F`.
Librería: https://tabler.io/icons

### Divisores de sección

Línea horizontal `0.5px solid #2A2A2A` con label de texto centrado en `#767676`.

### Animaciones (opcionales pero recomendadas)

- Fade-in + translateY(20px → 0) al entrar en viewport (Intersection Observer)
- Duración: 300–400ms · easing: ease-out
- No animar todos los elementos a la vez — escalonar con delay de 100ms entre items
- Respetar `prefers-reduced-motion`

---

## 5. Responsividad

| Breakpoint | Comportamiento                                              |
|------------|-------------------------------------------------------------|
| Desktop (>1024px) | 3 columnas para planes · 2–3 columnas en condiciones |
| Tablet (768–1024px) | 2 columnas para planes · 1 columna para condiciones  |
| Mobile (<768px) | 1 columna en todo · planes stacked · precios grandes   |

---

## 6. SEO y Meta

| Campo          | Contenido sugerido                                                         |
|----------------|----------------------------------------------------------------------------|
| Title          | Silk Fox Media — Productora Audiovisual Bogotá · Video, Branding y Redes  |
| Description    | Producción audiovisual para marcas colombianas. Video, fotografía y branding con precios de lanzamiento. Bogotá, Colombia. |
| OG Image       | Hero con tagline "No hacemos videos. Creamos impacto." sobre fondo oscuro  |
| Canonical      | https://silkfox.co/servicios (o la URL final que defina el cliente)        |

**Palabras clave objetivo:**
- productora audiovisual Bogotá
- video corporativo Colombia precios
- branding pymes Colombia
- gestión redes sociales Bogotá
- fotografía producto Bogotá

---

## 7. Formulario / CTA de Contacto

El botón "Agenda tu briefing gratuito" puede conectarse a:

- **Opción A:** Formulario embebido en la misma página (nombre, empresa, servicio de interés, mensaje)
- **Opción B:** Redirección a Calendly para agendar directamente
- **Opción C:** Link directo a WhatsApp Business con mensaje pre-llenado

> Definir con el cliente cuál prefiere antes de implementar.

**Campos mínimos del formulario (si se usa Opción A):**
- Nombre
- Empresa / Marca
- Servicio de interés (dropdown: Socio Creativo / Renovación Total / Despegue Visual / Fundadores / No sé aún)
- Mensaje (textarea)
- Botón: "Enviar → "

---

## 8. Reglas de Marca para el Desarrollador

1. El nombre siempre es **Silk Fox Media** — dos palabras separadas. Nunca "SilkFox" junto.
2. El naranja oficial es exactamente `#FF5A1F`. No aproximaciones ni variantes.
3. Fondos siempre oscuros. Nunca fondo blanco como base.
4. Montserrat es la tipografía de todo el sitio. Retrofunk Script solo para el logotipo.
5. Los precios siempre se muestran claros, sin asteriscos que los oculten.
6. El tono del copy es directo, confiado, sin jerga de agencia. No usar: "sinergia", "ecosistema", "360°", "disruptivo", "game changer".

---

## 9. Assets que Silk Fox Media debe entregar al desarrollador

- [ ] Logo en SVG (versión horizontal + ícono solo)
- [ ] Logo en blanco y en naranja (para fondo oscuro)
- [ ] Fuente Retrofunk Script (archivo .otf o .woff2)
- [ ] Fotos/videos de fondo para el hero (si se desea imagen de fondo)
- [ ] Link a Calendly o número de WhatsApp Business para el CTA

---

*Documento preparado para desarrollo. Actualizar cuando cambien precios, servicios o información de contacto.*
*Versión: Abril 2026*
