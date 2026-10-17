export const estadisticas = [
  { valor: "10+", etiqueta: "Años de experiencia" },
  { valor: "100+", etiqueta: "Estudiantes impactados" },
  { valor: "40%", etiqueta: "Mejora en eficiencia" },
  { valor: "99,9 %", etiqueta: "Disponibilidad de BD" },
] as const;

export const formacion = [
  {
    titulo: "Maestría en Inteligencia Artificial y Ciencia de Datos",
    institucion: "Universidad Internacional de La Rioja, España",
    periodo: "2022 – en curso",
  },
  {
    titulo: "Ingeniero de Sistemas y Computación",
    institucion: "Universidad Tecnológica de Pereira, Colombia",
    periodo: "2009 – 2020",
  },
] as const;

export const experienciaProfesional = [
  {
    cargo: "Ingeniero de Sistemas y Desarrollador de Software",
    empresa: "SERJUCO – Firma de abogados",
    periodo: "Mayo 2024 – actualidad · Risaralda, Colombia",
    logros: [
      "Lideré la modernización de los sistemas de información y la administración de un servidor local.",
      "Desarrollé un aplicativo web de gestión interna en PHP, JavaScript, HTML5, CSS3 y SQL.",
      "Implementé módulos de gestión documental y casos legales, aumentando la eficiencia operativa en un 40 %.",
      "Definí planes de seguridad y automatización de respaldo de datos.",
    ],
  },
  {
    cargo: "Ingeniero de Software",
    empresa: "Computadores y Tecnología",
    periodo: "Sep 2020 – Sep 2021 · Risaralda, Colombia",
    logros: [
      "Desarrollé aplicaciones empresariales con Python, PHP, JavaScript y PostgreSQL.",
      "Optimicé algoritmos y mejoré la eficiencia de procesos en un 35 %.",
      "Diseñé APIs RESTful y lideré la migración de un sistema heredado a una arquitectura modular.",
    ],
  },
  {
    cargo: "Administrador de Bases de Datos",
    empresa: "Fundación Razón Social",
    periodo: "Ago 2020 – Ago 2021 · Risaralda, Colombia",
    logros: [
      "Diseñé y gestioné bases de datos en MySQL y PostgreSQL.",
      "Reduje los tiempos de consulta en un 40 % con optimización SQL e indexación avanzada.",
      "Implementé planes de respaldo y recuperación con disponibilidad del 99,9 %.",
    ],
  },
] as const;

export const experienciaDocente = [
  {
    cargo: "Docente de cátedra – Algoritmia, Programación y Arquitectura",
    empresa: "Universidad Tecnológica de Pereira",
    periodo: "Feb 2024 – actualidad · Pereira, Colombia",
    logros: [
      "Diseño y enseñanza de algoritmos en C++ y pseudocódigo.",
      "Mejoré la comprensión lógica de más de 100 estudiantes en un 60 %.",
    ],
  },
  {
    cargo: "Profesor – IA, Programación y Bases de Datos",
    empresa: "Instituto Técnico Marillac",
    periodo: "Jun 2021 – actualidad · Risaralda, Colombia",
    logros: [
      "Cursos de Inteligencia Artificial, C++, Python, JavaScript, HTML5, CSS3, PHP y MySQL.",
      "Planes de estudio que mejoraron el rendimiento académico en un 80 %.",
    ],
  },
  {
    cargo: "Docente de Ingeniería de Software",
    empresa: "Fundación Universitaria CIAF",
    periodo: "Mar 2022 – Dic 2023 · Risaralda, Colombia",
    logros: [
      "Programas académicos con metodologías ágiles Scrum y Kanban.",
      "Acompañé proyectos de aplicaciones web con PHP, MySQL y JavaScript.",
    ],
  },
] as const;

export const certificaciones = [
  { nombre: "Desarrollador Python y React", entidad: "Florida Global University / Certiprof (en progreso)" },
  { nombre: "Full-Stack con Spring Boot y Angular", entidad: "2025" },
  { nombre: "Python para Ciencia de Datos y Big Data", entidad: "LinkedIn Learning, 2021" },
  { nombre: "Microsoft 365 Fundamentals MS-900", entidad: "Intelligent Training, 2021" },
  { nombre: "Estadística Aplicada al Proceso Empresarial", entidad: "Cataluña University, 2021" },
] as const;

export const pack = {
  titulo: "Pack completo · los 5 cursos",
  descripcion:
    "Accede a los 5 cursos completos (15 niveles en total) con descuento. Domina algoritmos, lógica, C++, Python y Java desde el nivel elemental hasta el avanzado.",
  precioAntes: 75,
  precioAhora: 60,
  niveles: 15,
} as const;

export const precioNivelUSD = 5;
