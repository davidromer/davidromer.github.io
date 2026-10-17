export const sitio = {
  nombre: "David Andrés Romero Arenas",
  corto: "David Romero",
  cargo: "Ingeniero de Sistemas y Computación",
  ciudad: "Pereira",
  pais: "Colombia",
  email: "davidromer25@hotmail.com",
  github: "https://github.com/davidromer",
  linkedin: "https://linkedin.com/in/davidandres-romero-arenas-53090530",
  knowsAbout: ["Python", "PHP", "JavaScript", "React", "Django", "Machine Learning", "PostgreSQL"],
  habilidades: [
    { grupo: "Lenguajes de programación", items: [
      { nombre: "Python", nivel: "principal" }, { nombre: "JavaScript", nivel: "principal" },
      { nombre: "PHP", nivel: "principal" }, { nombre: "C++", nivel: "principal" },
      { nombre: "SQL", nivel: "principal" }, { nombre: "HTML5" }, { nombre: "CSS3" },
    ] },
    { grupo: "Frameworks y librerías", items: [
      { nombre: "React", nivel: "secundario" }, { nombre: "Django", nivel: "secundario" },
      { nombre: "Flask", nivel: "secundario" }, { nombre: "Laravel", nivel: "secundario" },
      { nombre: "Spring Boot", nivel: "secundario" }, { nombre: "Angular", nivel: "secundario" },
      { nombre: "Scikit-learn", nivel: "terciario" }, { nombre: "Pandas", nivel: "terciario" },
      { nombre: "NumPy", nivel: "terciario" },
    ] },
    { grupo: "Bases de datos", items: [
      { nombre: "MySQL", nivel: "principal" }, { nombre: "PostgreSQL", nivel: "principal" },
      { nombre: "MongoDB" },
    ] },
    { grupo: "Nube y DevOps", items: [
      { nombre: "AWS", nivel: "terciario" }, { nombre: "Azure", nivel: "terciario" },
      { nombre: "Docker", nivel: "terciario" }, { nombre: "Git" }, { nombre: "CI/CD" },
    ] },
    { grupo: "IA y Machine Learning", items: [
      { nombre: "Aprendizaje automático", nivel: "secundario" },
      { nombre: "Ciencia de datos", nivel: "secundario" },
      { nombre: "Redes neuronales", nivel: "secundario" }, { nombre: "NLP", nivel: "secundario" },
    ] },
    { grupo: "Metodologías", items: [
      { nombre: "Scrum" }, { nombre: "Kanban" }, { nombre: "REST API" },
      { nombre: "POO" }, { nombre: "TDD" },
    ] },
  ],
} as const;

export const hrefCorreo = (asunto: string, cuerpo: string) =>
  `mailto:${sitio.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
