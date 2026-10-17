---
titulo: "Legal RAG Assistant"
resumen: "Asistente que responde preguntas sobre documentos jurídicos colombianos citando la fuente exacta."
estado: "produccion"
stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "pytest"]
repo: "https://github.com/davidromer/legal-rag-assistant"
destacado: true
orden: 1
idioma: "es"
---

## Problema

Buscar en expedientes, leyes y jurisprudencia colombiana es lento: la respuesta útil suele estar en un párrafo concreto, no en el documento entero.

## Solución

El sistema parte los documentos en fragmentos con metadatos (norma, fecha, jurisdicción), los indexa en PostgreSQL con `pgvector` y combina búsqueda léxica con similitud semántica. El modelo solo responde con citas recuperadas; si no hay evidencia, lo declara.

## Arquitectura

1. Ingesta y troceo con metadatos.
2. API FastAPI: consulta, recuperación híbrida y generación acotada al contexto.
3. Pruebas con pytest sobre citas y casos sin evidencia.
4. Empaquetado con Docker.

## Estado

Terminado. El repositorio concentra el código del asistente.
