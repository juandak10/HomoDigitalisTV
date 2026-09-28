# Prompts base

Los prompts van en **inglés** porque los modelos de imagen/video responden mejor; los textos que deben salir en pantalla van en español entre comillas.

Estructura: **[ESTILO BASE] + [PERSONAJE(S)] + [ACCIÓN / EXPRESIÓN] + [LOCACIÓN] + [LUZ] + [ENCUADRE]**
Los prompts de personaje y locación están en cada ficha (`03-personajes/*/ficha.md`, `04-locaciones/*/ficha.md`).

## 1. Estilo base (siempre primero)
```
Adult satirical 2D cartoon in the style of modern adult animated TV shows. Clean thin uniform black outlines, flat cel shading with soft two-tone shadows, muted desaturated palette of cool greys, navy and dusty browns with small accents of color. Characters have large round white bulging eyes with tiny black pupils, heavy droopy eyelids and dark under-eye bags, tired deadpan expressions, realistic-caricature proportions. Detailed lived-in Latin American city background, overcast rainy sky. Vertical 9:16 composition.
```

## 2. Negativo / evitar
```
no anime, no 3D render, no Pixar style, no watercolor, no bright saturated colors, no sunny blue sky, no extra fingers, no gibberish text
```

## 3. Ejemplo completo (plano de Larry Finque)
```
[ESTILO BASE]
thin old man around 70, messy grey hair, purple under-eye bags, sly half smile, navy suit with white open-collar shirt, holding a coffee mug,
leaning on a long reddish-wood boardroom table, looking at camera with smug calm,
inside a corporate boardroom with floor-to-ceiling rainy windows over a grey city,
cold flat overcast light, medium shot, vertical 9:16
```

## 4. Hoja de personaje (para personajes nuevos)
```
[ESTILO BASE]
character turnaround sheet of [PROMPT DEL PERSONAJE], front view, three-quarter view, side view and back view, plus 4 facial expressions (neutral, smug, scared, angry), plain light grey background, same outfit in every view
```
Guárdala como `03-personajes/<slug>/imagenes/<slug>__hoja-de-personaje.jpg`.

## 5. Imagen → video (Gemini / Veo)
```
Animate this image subtly: [ACCIÓN CONCRETA: he raises the coffee mug and smirks / she scrolls her phone and frowns]. Keep the exact same art style, outlines and colors. Minimal motion, slow camera push-in, light rain on the window. No new characters, no text changes. 5 seconds.
```

## 6. Consejos de consistencia
- Adjunta siempre **1–2 imágenes de referencia** del personaje desde su carpeta `imagenes/`.
- Repite los rasgos fijos (ropa + pelo + accesorio) en cada prompt, aunque parezca redundante.
- Para escenas con 2 personajes, describe primero a la izquierda y luego a la derecha: `on the left: … ; on the right: …`.
