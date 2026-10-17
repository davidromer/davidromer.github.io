import { useState } from "preact/hooks";

/**
 * Isla de filtrado por tecnología. Recibe datos planos (no entradas de colección)
 * porque las props de una isla se serializan al HTML.
 * proyectos: [{ id, titulo, resumen, stack, portada?: { src, width, height, alt } }]
 */
export default function FiltroProyectos({ proyectos }) {
  const [activa, setActiva] = useState(null);
  const tecnologias = [...new Set(proyectos.flatMap(p => p.stack))].sort();
  const visibles = activa ? proyectos.filter(p => p.stack.includes(activa)) : proyectos;

  return (
    <>
      <div class="filtros" role="group" aria-label="Filtrar por tecnología">
        <button type="button" aria-pressed={activa === null} onClick={() => setActiva(null)}>Todos</button>
        {tecnologias.map(t => (
          <button type="button" key={t} aria-pressed={activa === t} onClick={() => setActiva(t)}>{t}</button>
        ))}
      </div>
      <p class="sr-only" aria-live="polite">{visibles.length} proyectos</p>
      <div class="grid">
        {visibles.map(p => (
          <article class="card" key={p.id}>
            {p.portada && (
              <img src={p.portada.src} width={p.portada.width} height={p.portada.height}
                   alt={p.portada.alt} loading="lazy" decoding="async" />
            )}
            <div class="card-cuerpo">
              <h2><a href={`/proyectos/${p.id}/`}>{p.titulo}</a></h2>
              <p>{p.resumen}</p>
              <ul class="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
