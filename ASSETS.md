# Assets pendientes · Silk Fox

Lista de archivos que faltan para la web: qué recopilar, cómo nombrarlo y dónde dejarlo.

Regla general: el código ya espera estos archivos. Si el archivo tiene **el nombre exacto** y está en **la carpeta indicada**, la página lo muestra. Si falta, se ve un marco de relleno.

---

## 0. Cómo trabajamos los portafolios

Los portafolios se hacen en **dos fases**:

1. **Recopilar (ahora):** el equipo reúne **todo** el material disponible de cada trabajo: fotos y videos, sin filtrar y sin pensar en la landing. Va a una carpeta compartida del equipo, **no** al repositorio. Entre más material, mejor: después se elige.
2. **Seleccionar y ajustar (después):** con todo el material reunido se decide qué entra en la landing, en qué orden y con qué proporción. Solo entonces los archivos elegidos se copian al repositorio con los nombres de la sección 1.

Por eso en la recopilación no hay cupo fijo de piezas: hay mínimos para tener donde elegir.

---

## 1. Reglas de nombre

- Todo en minúsculas, sin tildes, sin espacios, sin `ñ`. Palabras separadas por guion medio (`-`).
- Bien: `showreel-16x9.mp4` · Mal: `Showreel Final.mp4`, `SHOWREEL_v2.MP4`
- Cuando un video existe en dos formatos, el nombre termina en el formato: `-16x9` (horizontal) o `-9x16` (vertical).
- Los nombres de versión van al final: `-loop`, `-poster`, `-preview`, `-video`.
- Extensiones en minúscula: `.mp4`, `.jpg`, `.webp`, `.mp3`.

## 2. Estructura de carpetas

**En el repositorio** (solo material final, ya seleccionado):

```
assets/
├── media/                  ← Silk Fox Media (index.html)
│   ├── hero/               ← panel vertical de la portada
│   ├── showreel/           ← showreel en horizontal (16:9)
│   └── projects/           ← trabajos del portafolio de Media
└── social/                 ← Silk Fox Social (social.html)
    └── portafolio/         ← fotos y videos de la galería
```

**En la carpeta compartida del equipo** (recopilación, sin procesar):

```
Silk Fox/
├── Media/
│   ├── showreel/           ← showreel en horizontal (16:9)
│   └── portafolio/
│       └── <categoria>/<nombre-del-trabajo>/
└── Social/
    └── portafolio/
        └── <categoria>/<AAAA-MM>_<pareja-o-evento>/
```

No crear subcarpetas adicionales. Lo que no encaje aquí, pregunta antes de guardarlo.

---

## 3. Silk Fox Media

### 3.1 Panel vertical del hero · `assets/media/hero/`

| Archivo | Qué es | Especificación |
|---|---|---|
| `hero-loop.mp4` | Bucle del panel vertical de la portada | **9:16**, 1080 × 1920, 6 a 10 s, **sin sonido**, H.264, < 4 MB |
| `hero-poster.jpg` | Primer fotograma del bucle (se ve mientras carga) | **9:16**, 1080 × 1920, JPG |

### 3.2 Showreel · `assets/media/showreel/`

El showreel se usa **solo en horizontal (16:9)**.

| Archivo | Qué es | Especificación | Estado |
|---|---|---|---|
| `showreel-16x9.mp4` | Showreel completo (se abre al hacer clic) | **16:9**, 1920 × 1080, **con sonido** (AAC), 60 a 90 s, H.264, < 25 MB | Recibido (versión 2: 82,8 s, 20,3 MB) |
| `showreel-16x9-loop.mp4` | Fragmento en bucle (se ve sin sonido en el panel) | **16:9**, 1920 × 1080, **sin sonido**, 8 a 15 s, H.264, < 8 MB | Generado del showreel: tomas en tríptico (segundos 33 a 41,8 y 55 a 61,2), 15 s, 7,6 MB |
| `showreel-16x9-poster.jpg` | Fotograma de portada | **16:9**, 1920 × 1080, JPG | Generado del showreel (segundo 33, primer tríptico del bucle) |

Notas:
- El bucle es un fragmento del mismo montaje, no un clip distinto.
- Sin subtítulos quemados en la imagen, salvo en los textos de marca. Si hay locución, que se entienda sin sonido.

### 3.3 Portafolio de Media · `assets/media/projects/`

El portafolio de Media debe mostrar la variedad de lo que hace la productora: video corporativo, brand story, eventos de marca, Reels para redes, comerciales y fotografía de producto y marca. Hoy la web no tiene esta sección; cuando se active, se usará lo que se recopile aquí.

**Recopilar, por cada trabajo:**
- Mínimo: **8 videos completos** de trabajos distintos, y **10 fotos** de producto o marca. Si hay más, mejor.
- Video completo en 16:9 (con sonido) y, si existe, la versión vertical para redes.
- Portada en 16:9 y en 9:16.
- Un clip corto sin sonido de 5 a 8 s, para la vista previa.
- Nota con: categoría, año, cliente, duración y si el cliente autoriza mostrar el trabajo (ver sección 4.4).

**Nombres al seleccionar** (una vez elegidos):
- Video: `<nombre-del-trabajo>.mp4` · Portada: `<nombre-del-trabajo>-cover-16x9.jpg` / `-cover-9x16.jpg` · Vista previa: `<nombre-del-trabajo>-preview.mp4`
- Fotos: `foto-<nombre>.jpg`, 2000 px en el lado largo.

---

## 4. Silk Fox Social

### 4.1 Qué recopilar

La galería de Social muestra la variedad de celebraciones de la marca: **bodas, eventos sociales y retratos**. El portafolio se ajustará después de tener todos los assets.

Por **cada evento o sesión** se reúne:

**Fotos** (entre 20 y 40 por evento, editadas, en la proporción original de la cámara; la web las recorta según la tarjeta):
- Ceremonia o momento principal
- Detalles (anillos, decoración, mesa, invitaciones)
- Retratos de la pareja o de los anfitriones
- Invitados y ambiente (fiesta, pista, brindis)

**Videos** (lo que exista de cada evento):
- Highlight o video completo en 16:9, con sonido. Si pesa más de 25 MB, entregar el enlace de Vimeo o YouTube (no listado).
- Clip vertical de 15 a 60 s en 9:16, para redes y para la tarjeta.
- Póster (fotograma) de cada video.

**Mínimos para tener donde elegir:**

| Categoría | Eventos o sesiones mínimas | Videos mínimos |
|---|---|---|
| Bodas | 4 | 2 |
| Eventos sociales | 3 | 1 |
| Retratos | 3 sesiones | 1 |

### 4.2 Cómo organizar la recopilación

En la carpeta compartida, una carpeta por evento o sesión:

```
Silk Fox/Social/portafolio/bodas/2026-05_maria-y-juan/
├── fotos/
│   ├── 01.jpg
│   └── 02.jpg …
├── videos/
│   ├── highlight-16x9.mp4
│   ├── clip-9x16.mp4
│   └── poster.jpg
└── datos.txt               ← fecha, locación, tipo, si autorizan publicar
```

Usar `AAAA-MM_pareja-o-evento` como nombre de carpeta, sin tildes ni espacios (`2026-05_maria-y-juan`).

### 4.3 Selección y nombres finales (fase 2)

Cuando se elija el material para la landing, se copia al repositorio con estos nombres. Las categorías del nombre son las del filtro de la web.

**Fotos:** `assets/social/portafolio/<categoria>-<NN>.jpg`
- Ejemplo: `bodas-01.jpg`, `eventos-02.jpg`, `retratos-03.jpg`
- JPG calidad 80, 2000 px en el lado largo, sin imágenes por encima de 500 KB.

**Videos:**
- `<categoria>-<NN>-video.mp4`: horizontal **16:9**, 1920 × 1080, **con sonido**, H.264. Se abre en el visor. Máximo 25 MB.
- `<categoria>-<NN>-poster.jpg`: fotograma de la tarjeta, 1600 × 2000 (4:5).
- `<categoria>-<NN>-preview.mp4` (opcional): 3 a 5 s, sin sonido, 720p. Se reproduce al pasar el cursor.
- Si el video supera 25 MB, se aloja en Vimeo o YouTube (no listado): se entrega el ID y el póster sigue siendo local.

**Proporciones de la tarjeta:** las fotos se muestran en su proporción original (miniatura `<categoria>-<NN>-thumb.jpg` de 900 px de ancho, y la de 2000 px se abre en el visor). Los videos usan un póster 4:5 de 1080 × 1350.

**Selección actual (fase 2, primera ronda):**

| Archivo | Origen |
|---|---|
| `bodas-01` a `bodas-14` | Fotos de Nicolás y Edna, Fidel y Kelly, Francisco y Ana, F y A, y la boda del 4 de noviembre de 2017 |
| `eventos-01` a `eventos-10` | Fotos de cuatro 15 años (2018-01 Natalia, 2021-02, 2021-08 Silvana, 2022-12 del 17) |
| `bodas-15-video` | Highlight completo de Nicolás y Edna (1:19) |
| `bodas-16-video` | Reel vertical de Fidel y Kelly (0:32) |
| `bodas-17-video` | Primer minuto del highlight de Fabián y Luisa (el video trae los nombres en pantalla) |
| `eventos-11-video` | Primer minuto del highlight de los 15 años del 17 de diciembre de 2022 |
| `eventos-12-video` | Primer minuto del highlight de los 15 años de febrero de 2021 |

Los tres fragmentos de un minuto existen porque los highlights completos pesan más de 25 MB. Cuando estén en YouTube o Vimeo (no listados), se cambia `data-video` por `data-embed` en `social.html`.

### 4.4 Permisos y derechos (obligatorio)

Antes de publicar cualquier foto o video de una persona, debe existir **autorización por escrito** de cada pareja, anfitrión o cliente. Para menores de edad, la autorización es de su madre, padre o tutor. Si una pieza no tiene autorización, no entra en la landing, aunque sea buena.

En `datos.txt` se anota si el cliente autoriza publicar: sí, no, o sí con condiciones.

---

## 5. Exportar

Video (H.264, MP4, inicio rápido):

```bash
# Showreel horizontal con sonido
ffmpeg -i entrada.mov -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 160k -movflags +faststart showreel-16x9.mp4

# Bucle sin sonido
ffmpeg -i entrada.mov -c:v libx264 -crf 24 -preset slow -an -movflags +faststart showreel-16x9-loop.mp4

# Hero vertical sin sonido
ffmpeg -i entrada.mov -c:v libx264 -crf 24 -preset slow -an -movflags +faststart hero-loop.mp4
```

Fotograma de portada (un segundo y medio o dos después del inicio, sin fundidos):

```bash
ffmpeg -ss 00:00:02 -i entrada.mov -frames:v 1 -q:v 2 showreel-16x9-poster.jpg
```

Fotos: JPG calidad 80, o WebP. Sin imágenes por encima de 500 KB.

---

## 6. Checklist

**Fase 1: recopilación (carpeta compartida)**
- [x] Media: showreel 16:9 recibido
- [ ] Media: mínimo 8 videos completos y 10 fotos, con su nota de categoría, año, cliente y autorización
- [ ] Social: cada evento o sesión en su carpeta, con fotos, videos y `datos.txt`
- [ ] Social: se cumplen los mínimos de la tabla 4.1
- [ ] Autorización por escrito de cada persona retratada (o de su tutor, si es menor)

**Fase 2: selección y entrega al repositorio**
- [ ] `assets/media/hero/`: `hero-loop.mp4`, `hero-poster.jpg`
- [x] `assets/media/showreel/showreel-16x9.mp4`: showreel horizontal completo (versión 2 recibida, 82,8 s, H.264 1080p, AAC, 20,3 MB)
- [x] `assets/media/showreel/showreel-16x9-loop.mp4`: bucle sin sonido con las tomas en tríptico (generado, 15 s, 7,6 MB)
- [x] `assets/media/showreel/showreel-16x9-poster.jpg`: portada (generada, 1920 × 1080)
- [ ] `assets/media/projects/`: trabajos seleccionados según 3.3
- [x] `assets/social/portafolio/`: primera selección en la web: 24 fotos (14 de bodas, 10 de 15 años) y 5 videos (3 de bodas, 2 de 15 años)
- [ ] Social: sesiones de retrato (el filtro "Retratos" está oculto hasta que haya material)
- [ ] Nombres en minúscula, sin espacios ni tildes, según la sección 1
- [ ] Videos H.264 con `+faststart`, dentro de los pesos indicados
- [ ] Derechos y autorizaciones confirmados para cada pieza publicada

## 7. Preguntas abiertas

- ¿Se mantiene el sonido ambiente del botón "Sonido" en Media? Si sí, hace falta `assets/media/ambient.mp3` (bucle de 30 a 60 s, con licencia, < 1 MB).
- ¿Los videos de Social van en el visor locales o en Vimeo/YouTube?
- ¿Cuántos eventos reales tienen ya autorización para publicar? Eso marca cuánto material de Social se puede mostrar.
