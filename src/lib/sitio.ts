export const sitio = {
  nombre: "David Andrés Romero Arenas",
  corto: "David Romero",
  cargo: "Ingeniero de Sistemas y Computación",
  ciudad: "Pereira",
  pais: "Colombia",
  github: "https://github.com/davidromer",
  linkedin: "https://linkedin.com/in/davidandres-romero-arenas-53090530",
  knowsAbout: ["Python", "React", "Django", "FastAPI", "Machine Learning", "PostgreSQL"],
  habilidades: [
    { grupo: "Backend", items: ["Python", "Django", "FastAPI", "PostgreSQL"] },
    { grupo: "Frontend", items: ["Astro", "Preact", "React"] },
    { grupo: "Datos e IA", items: ["Machine Learning", "RAG", "pgvector"] },
    { grupo: "Entrega", items: ["Docker", "pytest", "GitHub Actions"] },
  ],
} as const;
