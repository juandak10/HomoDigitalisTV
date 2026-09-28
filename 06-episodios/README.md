# Episodios

Cada episodio tiene su carpeta `EPxxx-titulo-en-slug/` con:
- `README.md` — ficha: tema, personajes, locaciones, guion plano a plano, links de publicación, notas de continuidad.
- `fotogramas/` — fotogramas clave del video final (1080×1920, numerados en orden).

Los **videos y audios no van al repo** (están en `.gitignore`). Se quedan en la carpeta local de producción.

| # | Título | Tema | Protagonista | Fecha |
|---|---|---|---|---|
| [EP001](EP001-humano-offline/README.md) | Humano OFFLINE | Vigilancia y datos | Rodrigo Nadie | 24‑sep‑2026 |
| [EP002](EP002-red-flags-femeninas/README.md) | Red Flags Femeninas | Apps de citas | Valentina Ríos | 24‑sep‑2026 |
| [EP003](EP003-abajo-las-corporaciones/README.md) | ¡Abajo las corporaciones! | El sistema compra la protesta | Larry Finque | 25‑sep‑2026 |
| [EP004](EP004-el-capital-es-bueno-hasta-que/README.md) | El capital es bueno hasta que… | Capitalismo de conveniencia | Andrés "El Bull" | 25‑sep‑2026 |
| [EP005](EP005-nuevos-retos/README.md) | Nuevos retos | "Somos familia" | Wilson Pérez | 27‑sep‑2026 |

> La numeración sigue el orden de producción (fecha del archivo final). Si el orden de publicación fue otro, renumeren.

## Nuevo episodio
1. Copia [`07-plantillas/guion-episodio.md`](../07-plantillas/guion-episodio.md) a `06-episodios/EP006-<slug>/README.md`.
2. Llena el guion, usando personajes y locaciones existentes siempre que se pueda.
3. Al terminar: exporta fotogramas clave a `fotogramas/`:
   ```bash
   ffmpeg -ss 2 -i "video.mp4" -frames:v 1 -q:v 3 fotogramas/01-nombre.jpg
   ```
4. Agrega el episodio al grafo (`aparece_en`, `escenario_de`, `trata`) y a esta tabla.
