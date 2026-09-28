# Animación y producción

## Pipeline actual
1. **Guion** en [plantilla](../07-plantillas/guion-episodio.md): 6–12 planos, cada uno con imagen + acción + diálogo/subtítulo.
2. **Imágenes clave** (una por plano) con IA de imagen (ChatGPT / Gemini). Siempre con el [prompt base](prompts-base.md) + prompt del personaje + prompt de la locación, y **adjuntando imágenes de referencia** del personaje para consistencia.
3. **Animación** imagen→video con IA de video (Gemini / Veo). Clips de 5–10 s por plano. Movimiento limitado y sutil: gestos, lip-sync, parpadeo, cámara que se acerca lento.
4. **Voces** con ElevenLabs.
   - Voz usada hasta ahora: **"Luis – Joyful, Active and Friendly"**, modelo v3, ajustes `speed 1.10 · stability 50 · similarity boost 75`.
   - Una línea por archivo, nombrado con el texto (`no tengo redes.mp3`).
   - **Pendiente:** asignar una voz fija a cada personaje recurrente y anotarla en su ficha.
5. **Edición** (CapCut / editor): montar clips, subtítulos, SFX, música, tarjeta final.
6. **Publicar** y anotar el link + métricas en el README del episodio.

## Ritmo y planos
- Duración 25–40 s. Plano promedio 2–4 s. El giro llega alrededor del **70–80 %** del video.
- Secuencia típica:
  1. **Plano general** que ubica (fachada de la torre, la calle, la gasolinera).
  2. **Plano medio** del personaje en su situación.
  3. **Primer plano** de reacción.
  4. **Giro** (a menudo corte a otro lugar/personaje: la sala de juntas, el precio +40 %).
  5. **Remate** en plano abierto o detalle simbólico (máscara triste, helado, logo).
  6. Tarjeta final opcional.
- Acting **contenido**: los personajes se mueven poco. El humor viene del contraste entre la cara seria y lo absurdo.

## Consistencia
- Un personaje debe verse igual en todo el episodio: genera primero un **plano medio neutro** y úsalo como referencia para todos los demás.
- Reusa las imágenes de locación de `04-locaciones/` como referencia de fondo.
- Si la IA cambia rasgos (color de pelo, ropa, gafas), regenera: la recurrencia depende de que el público reconozca al personaje.

## Archivos
- En el repo: solo **imágenes** (personajes, locaciones, fotogramas de episodios) y **texto**.
- Videos y audios quedan fuera (`.gitignore`). Carpeta de trabajo local sugerida: `C:\Users\juand\Downloads\Juno Video\Homo Digitals\<episodio>\`.
