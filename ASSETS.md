# Assets pendientes

La web ya está programada para estos archivos. Basta con copiarlos con **el nombre exacto** en la carpeta indicada; no hay que tocar código. Mientras un archivo falte, la página muestra un marco de relleno.

Para ver qué falta, abre la web en local (o añade `?todo` a la URL): cada marco muestra la ruta del archivo que espera.

## Silk Fox Media · `assets/media/`

| Archivo | Qué es | Especificación |
|---|---|---|
| `hero-loop.mp4` | Bucle del panel vertical del hero | 9:16, 6 a 10 s, sin sonido, H.264, 720p o 1080p, < 4 MB |
| `hero-poster.jpg` | Primer fotograma del bucle | 9:16, 1080 × 1920 |
| `showreel-loop.mp4` | Fragmento en bucle del showreel (se ve mientras crece el panel) | 16:9, 8 a 15 s, sin sonido, 1080p, < 8 MB |
| `showreel-poster.jpg` | Fotograma del showreel | 1920 × 1080 |
| `showreel.mp4` | Showreel completo (se abre al hacer clic) | 16:9, 60 a 90 s, con sonido, 1080p, < 25 MB. O usa Vimeo/YouTube: ver abajo |
| `ambient.mp3` | Sonido ambiente del botón "Sonido" | Bucle de 30 a 60 s, con licencia, < 1 MB |

### Proyectos · `assets/media/projects/`
Para cada video: `NOMBRE-cover.jpg` (portada), `NOMBRE-preview.mp4` (5 a 8 s sin sonido, 720p, se reproduce al pasar el cursor) y `NOMBRE.mp4` (video completo).

| NOMBRE | Título en la web | Categoría |
|---|---|---|
| `teaser` | Teaser promocional | Corporativo |
| `villa-de-leyva` | Villa de Leyva | Brand story |
| `jeep-weekend` | Jeep Weekend | Evento de marca (confirmar) |
| `villa-de-leyva-v2` | Villa de Leyva · Versión 2 | Brand story |

Fotos: `foto-producto.jpg` y `foto-marca.jpg` (2000 px lado largo).

Portadas: `teaser` y `villa-de-leyva-v2` van en formato 16:9; `villa-de-leyva` y `jeep-weekend` en vertical (4:5 o 9:16).

## Silk Fox Social · `assets/social/`

| Archivo | Qué es | Especificación |
|---|---|---|
| `film-loop.mp4` | Fragmento en bucle de la película principal | 2.39:1 o 16:9, 10 a 15 s, cámara lenta, sin sonido, 1080p, < 8 MB |
| `film-poster.jpg` | Fotograma | 1920 × 800 |
| `film.mp4` | Highlight film completo | Con sonido, 1080p |
| `gallery/01.jpg` … `09.jpg` | Fotos del mosaico | 2000 px lado largo. 01, 04, 06, 07: bodas · 02, 05, 09: eventos sociales · 03, 08: retratos |
| `films/01.jpg`, `01-preview.mp4`, `01.mp4` | Película de boda | 16:9 |
| `films/02.*` | Película de aniversario | 16:9 |
| `films/03.*` | Película de evento social | 16:9 |

## Usar Vimeo o YouTube en lugar de un .mp4
En el elemento con `data-play`, añade `data-vimeo="123456789"` o `data-youtube="ID"`. El visor usará ese video y el `.mp4` local deja de ser necesario (el bucle sin sonido sí conviene tenerlo local).

## Antes de subir
- Video: H.264 MP4, `-movflags +faststart`. Ejemplo: `ffmpeg -i in.mov -c:v libx264 -crf 24 -preset slow -an -movflags +faststart hero-loop.mp4`
- Fotos: JPG calidad 80 o WebP. Ninguna foto por encima de 500 KB.
