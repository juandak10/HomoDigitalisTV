# CLAUDE.md — guía para asistentes de IA

Este repo es la base de conocimiento de **Homo Digitalis TV**, una cuenta de videos animados de sátira (vertical 9:16, 25–40 s) ambientada en la ciudad ficticia **Digitalia**. No es un proyecto de software: es texto + imágenes. Escribe siempre en **español**; los prompts para modelos de imagen/video van en **inglés**.

## Antes de proponer guiones o personajes
1. Lee `00-marca/tono-y-reglas-de-satira.md`. Regla clave: **el chiste va contra el comportamiento, la hipocresía y el poder, nunca contra la identidad** de un personaje.
2. Usa personajes y locaciones existentes (`03-personajes/README.md`, `04-locaciones/README.md`, `05-grafo/grafo.json`) antes de inventar nuevos. La recurrencia construye el universo.
3. Cada episodio: una contradicción → situación, escalada, giro (~70–80 % del video), remate visual. Plantilla: `07-plantillas/guion-episodio.md`.
4. Balancea: si el último episodio picó a un lado (izquierda/derecha, hombres/mujeres), el siguiente pica al otro.

## Prompts de imagen
Concatena: prompt base de `01-estilo-visual/prompts-base.md` + "Prompt de consistencia" de la ficha del personaje + "Prompt de locación" + acción + encuadre. Recomienda adjuntar las imágenes de `imagenes/` de cada personaje como referencia.

## Al crear o cambiar contenido
- Personaje nuevo → `03-personajes/<slug>/ficha.md` (desde plantilla) + `imagenes/` + nodo y ≥2 relaciones en `05-grafo/grafo.json` + fila en `03-personajes/README.md`.
- Locación nueva → igual en `04-locaciones/`.
- Episodio nuevo → `06-episodios/EPxxx-<slug>/README.md` + `fotogramas/` + relaciones `aparece_en` / `escenario_de` / `trata` en el grafo + fila en `06-episodios/README.md`.
- Después de editar `grafo.json`, corre `node 05-grafo/build.mjs` (regenera `grafo.html` y `grafo.md`; no editar esos dos a mano).
- Slugs en minúscula, sin tildes, con guiones. Imágenes en `.jpg`.
- Nunca agregues videos ni audios (`.gitignore` los excluye). Material de producción local: `C:\Users\juand\Downloads\Juno Video\Homo Digitals\`.

## Paleta (resumen)
Ciudad gris-azulada siempre nublada (`#28272E`, `#383D51`, `#73747A`, `#D2D4D9`), cálidos apagados (`#655150`, `#BEADA3`), y color de acento solo donde está el chiste (rojo `#D23C2E`, azul resistencia `#2F9BE0`, brillo pantalla `#CEEEF9`). Detalle en `01-estilo-visual/paleta-de-colores.md`.
