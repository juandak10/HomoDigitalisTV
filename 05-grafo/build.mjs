// Genera grafo.html (visor interactivo) y grafo.md (diagrama Mermaid para GitHub)
// a partir de grafo.json. Uso:  node 05-grafo/build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(here, "grafo.json"), "utf8"));

// Validación básica: toda relación apunta a nodos que existen
const ids = new Set(data.nodos.map((n) => n.id));
const rotas = data.relaciones.filter((r) => !ids.has(r.de) || !ids.has(r.a));
if (rotas.length) {
  console.error("Relaciones con nodos inexistentes:", rotas);
  process.exit(1);
}

// ---------- grafo.html ----------
const template = readFileSync(join(here, "visor.template.html"), "utf8");
writeFileSync(
  join(here, "grafo.html"),
  template.replace("/*__DATA__*/null", JSON.stringify(data))
);

// ---------- grafo.md (Mermaid: personas, grupos, lugares y organizaciones) ----------
const visibles = new Set(["personaje", "grupo", "locacion", "organizacion"]);
const nodo = Object.fromEntries(data.nodos.map((n) => [n.id, n]));
const mid = (id) => id.replace(/[^a-zA-Z0-9]/g, "_");
const label = (s) => s.replace(/"/g, "'");
const forma = {
  personaje: (n) => `${mid(n.id)}("${label(n.nombre)}")`,
  grupo: (n) => `${mid(n.id)}(["${label(n.nombre)}"])`,
  locacion: (n) => `${mid(n.id)}[/"${label(n.nombre)}"/]`,
  organizacion: (n) => `${mid(n.id)}{{"${label(n.nombre)}"}}`,
};
const lineas = ["flowchart LR"];
for (const n of data.nodos) if (visibles.has(n.tipo)) lineas.push("  " + forma[n.tipo](n));
for (const r of data.relaciones) {
  if (!visibles.has(nodo[r.de].tipo) || !visibles.has(nodo[r.a].tipo)) continue;
  lineas.push(`  ${mid(r.de)} -->|${r.tipo.replace(/_/g, " ")}| ${mid(r.a)}`);
}
lineas.push("  classDef personaje fill:#E4DDD9,stroke:#28272E,color:#28272E");
lineas.push("  classDef grupo fill:#BEADA3,stroke:#28272E,color:#28272E");
lineas.push("  classDef locacion fill:#9FA2A6,stroke:#28272E,color:#28272E");
lineas.push("  classDef organizacion fill:#38373E,stroke:#28272E,color:#E4DDD9");
for (const tipo of visibles) {
  const del = data.nodos.filter((n) => n.tipo === tipo).map((n) => mid(n.id));
  if (del.length) lineas.push(`  class ${del.join(",")} ${tipo}`);
}

writeFileSync(
  join(here, "grafo.md"),
  `# Grafo de Digitalia (generado)

> Archivo generado por \`node 05-grafo/build.mjs\` desde \`grafo.json\`. No lo edites a mano.
> Para la versión interactiva (con filtros, temas, episodios e imágenes) abre \`grafo.html\` en el navegador.

Formas: (personaje) · ([grupo]) · /lugar/ · {{organización}}

\`\`\`mermaid
${lineas.join("\n")}
\`\`\`
`
);

console.log(`OK: ${data.nodos.length} nodos, ${data.relaciones.length} relaciones → grafo.html, grafo.md`);
