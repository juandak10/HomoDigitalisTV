# Grafo de Digitalia

El mapa de quién es quién: **personajes ↔ lugares ↔ organizaciones ↔ episodios ↔ temas (intenciones)**.

| Archivo | Qué es |
|---|---|
| [`grafo.json`](grafo.json) | **Fuente de verdad.** Nodos y relaciones. Se edita a mano. |
| [`grafo.html`](grafo.html) | Visor interactivo (generado). Doble clic para abrirlo en el navegador: filtros, búsqueda, panel con *quiere / teme*, imagen y conexiones. |
| [`grafo.md`](grafo.md) | Diagrama Mermaid (generado). GitHub lo dibuja solo. |
| `build.mjs` · `visor.template.html` | Generador. |

## Regenerar después de editar
```bash
node 05-grafo/build.mjs
```
El script valida que toda relación apunte a nodos existentes.

## Formato de `grafo.json`
```jsonc
{
  "nodos": [
    { "id": "el-capitalista", "tipo": "personaje", "nombre": "Larry Finque",
      "arquetipo": "El capitalista", "estado": "canon",
      "quiere": "…", "teme": "…", "temas": ["corporaciones-absorben-protesta"],
      "ficha": "03-personajes/el-capitalista/ficha.md",
      "imagen": "03-personajes/el-capitalista/imagenes/larry-finque-sala-de-juntas.jpg" }
  ],
  "relaciones": [
    { "de": "el-capitalista", "a": "blakrok", "tipo": "dirige", "nota": "" }
  ]
}
```

**Tipos de nodo:** `personaje`, `grupo`, `locacion`, `organizacion`, `episodio`, `tema`.

**Tipos de relación usados** (puedes inventar más, en minúscula con guion bajo):
| Personas | Lugares | Organizaciones | Narrativa |
|---|---|---|---|
| `familia`, `amistad`, `cita`, `ex_pareja`, `rivalidad`, `alianza`, `conflicto`, `asesora`, `mentor`, `admira`, `despidio`, `reemplazo`, `persigue`, `acosa`, `roba_credito`, `sirve_a`, `creo` | `vive_en`, `frecuenta`, `trabaja_en` | `dirige`, `trabaja_en`, `ex_empleado`, `dueno_de`, `financia`, `sede`, `usa`, `cliente_de`, `invierte_en`, `protesta_contra` | `aparece_en`, `escenario_de`, `satiriza`, `trata` |

## Cómo usarlo para escribir
- **Buscar cruces nuevos:** dos personajes que comparten tema pero no tienen relación = episodio potencial (ej. Brayan el gym bro × Unidad‑7 el robot deprimido).
- **Recurrencia:** antes de inventar un lugar, mira si ya existe uno que sirva.
- **Rastro de Blakrok:** sigue las flechas `dueno_de` desde Blakrok — casi todo termina ahí.
