const CARICATURE = 'caricature.png';
const BG_CODE = 'bg_code.jpg';
document.getElementById('bgFixed').style.backgroundImage = `url(${BG_CODE})`;
document.getElementById('navAvatar').src = CARICATURE;
document.getElementById('heroAvatar').src = CARICATURE;
document.getElementById('contactAvatar').src = CARICATURE;
document.getElementById('coursesAvatar').src = CARICATURE;
function showPage(page) {
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById('page-' + page).classList.add('active');
document.querySelectorAll('.nav-links a').forEach(a => {
a.classList.toggle('active', a.dataset.page === page);
});
window.scrollTo({ top: 0, behavior: 'smooth' });
document.getElementById('navLinks').classList.remove('open');
}
function toggleMenu() {
document.getElementById('navLinks').classList.toggle('open');
}
window.addEventListener('scroll', () => {
document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
});
const projects = [
{
title: 'Sistema de Gestion Legal - SERJUCO',
desc: 'Aplicativo web completo para gestion de documentos, casos legales y automatizacion de procesos internos de una firma de abogados.',
tech: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'XAMPP'],
status: 'active',
statusText: 'En produccion'
},
{
title: 'Portfolio Web Personal con IA',
desc: 'Sitio web personal interactivo con integracion de modelos de lenguaje para asistencia automatizada y chatbot de contacto.',
tech: ['React', 'Python', 'Flask', 'OpenAI API', 'TailwindCSS'],
status: 'progress',
statusText: 'En desarrollo'
},
{
title: 'Plataforma Educativa con IA',
desc: 'Sistema de aprendizaje adaptativo que personaliza contenidos segun el progreso del estudiante, con analisis predictivo de rendimiento.',
tech: ['Django', 'React', 'Scikit-learn', 'PostgreSQL', 'Docker'],
status: 'planned',
statusText: 'Planificado'
},
{
title: 'API de Analisis de Datos Empresariales',
desc: 'Microservicio RESTful para analisis y visualizacion de datos empresariales con dashboards interactivos en tiempo real.',
tech: ['Python', 'FastAPI', 'Pandas', 'MongoDB', 'D3.js'],
status: 'planned',
statusText: 'Planificado'
},
{
title: 'Chatbot de Asistencia Academica',
desc: 'Bot conversacional para resolver dudas de estudiantes sobre algoritmia y programacion, con NLP y base de conocimiento personalizada.',
tech: ['Python', 'NLP', 'Flask', 'PostgreSQL', 'React'],
status: 'planned',
statusText: 'Planificado'
},
{
title: 'App Movil de Gestion de Tareas',
desc: 'Aplicacion multiplataforma con sincronizacion en la nube, notificaciones inteligentes y analisis de productividad.',
tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
status: 'planned',
statusText: 'Planificado'
}
];
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
const statusClass = p.status === 'active' ? 'status-active' : p.status === 'progress' ? 'status-progress' : 'status-planned';
projectsGrid.innerHTML += `
<div class="project-card">
<div class="project-banner">
<img src="${BG_CODE}" alt="">
<div class="project-banner-overlay"></div>
<span class="project-status ${statusClass}">${p.statusText}</span>
</div>
<div class="project-body">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
</div>
</div>
`;
});
const subjects = [
{
id: 'prog2-utp',
icon: '&#128187;',
title: 'Programacion 2',
institution: 'UTP - Universidad',
desc: 'Programacion orientada a objetos, estructuras de datos avanzadas, patrones de diseno y desarrollo de aplicaciones robustas en C++ y Java.',
topics: ['POO', 'C++', 'Java', 'Estructuras de datos', 'Patrones de diseno'],
syllabus: [
{ unit: 'Unidad 1', title: 'Programacion Orientada a Objetos', desc: 'Clases, objetos, constructores, destructores, encapsulamiento y abstraccion.' },
{ unit: 'Unidad 2', title: 'Herencia y Polimorfismo', desc: 'Herencia simple y multiple, clases abstractas, interfaces, polimorfismo dinamico y estatico.' },
{ unit: 'Unidad 3', title: 'Estructuras de datos avanzadas', desc: 'Listas enlazadas, pilas, colas, arboles binarios, grafos y tablas hash.' },
{ unit: 'Unidad 4', title: 'Algoritmos de ordenamiento y busqueda', desc: 'QuickSort, MergeSort, busqueda binaria, analisis de complejidad O(n).' },
{ unit: 'Unidad 5', title: 'Patrones de diseno y proyecto final', desc: 'Singleton, Factory, Observer. Proyecto integrador aplicando POO y estructuras de datos.' }
]
},
{
id: 'arquitectura',
icon: '&#128421;',
title: 'Arquitectura de Computadores',
institution: 'UTP - Universidad',
desc: 'Componentes de hardware, organizacion del computador, representacion de datos y ensamblador basico.',
topics: ['Hardware', 'CPU', 'Memoria', 'Ensamblador', 'Bus de datos'],
syllabus: [
{ unit: 'Unidad 1', title: 'Sistemas numericos y representacion', desc: 'Binario, octal, hexadecimal, complemento a 2, punto flotante IEEE 754.' },
{ unit: 'Unidad 2', title: 'Componentes del computador', desc: 'CPU, ALU, registros, memoria cache, RAM, ROM, bus de datos.' },
{ unit: 'Unidad 3', title: 'Conjunto de instrucciones', desc: 'ISA, ciclo de instruccion fetch-decode-execute, modos de direccionamiento.' },
{ unit: 'Unidad 4', title: 'Memoria y almacenamiento', desc: 'Jerarquia de memoria, memoria virtual, paginacion, segmentacion.' }
]
},
{
id: 'intro-ingsoft',
icon: '&#128736;',
title: 'Introduccion a la Ingenieria de Software',
institution: 'Fundacion Universitaria CIAF',
desc: 'Fundamentos del proceso de desarrollo de software, ciclo de vida, metodologias y herramientas basicas para la gestion de proyectos.',
topics: ['SDLC', 'Requisitos', 'UML', 'Metodologias', 'Calidad'],
syllabus: [
{ unit: 'Unidad 1', title: 'Fundamentos de Ingenieria de Software', desc: 'Historia, definiciones, roles del ingeniero de software, etica profesional.' },
{ unit: 'Unidad 2', title: 'Ciclo de vida del software', desc: 'Modelos cascada, espiral, iterativo, incremental. Comparativa y seleccion.' },
{ unit: 'Unidad 3', title: 'Ingenieria de requisitos', desc: 'Elicitacion, especificacion, validacion de requisitos funcionales y no funcionales.' },
{ unit: 'Unidad 4', title: 'Metodologias agiles', desc: 'Scrum, Kanban, sprints, backlog, historias de usuario, retrospectivas.' },
{ unit: 'Unidad 5', title: 'Calidad y testing basico', desc: 'Pruebas unitarias, de integracion, aseguramiento de calidad, documentacion.' }
]
},
{
id: 'prog2-ciaf',
icon: '&#9889;',
title: 'Programacion 2',
institution: 'Fundacion Universitaria CIAF',
desc: 'Programacion orientada a objetos, manejo de excepciones, colecciones y desarrollo de aplicaciones con interfaces graficas.',
topics: ['POO', 'Java', 'Excepciones', 'Colecciones', 'GUI'],
syllabus: [
{ unit: 'Unidad 1', title: 'POO avanzada', desc: 'Herencia, polimorfismo, interfaces, clases abstractas, principios SOLID.' },
{ unit: 'Unidad 2', title: 'Manejo de excepciones y archivos', desc: 'Try-catch, excepciones personalizadas, lectura/escritura de archivos, serializacion.' },
{ unit: 'Unidad 3', title: 'Colecciones y generics', desc: 'ArrayList, HashMap, LinkedList, iteradores, tipos genericos.' },
{ unit: 'Unidad 4', title: 'Interfaces graficas y proyecto', desc: 'Desarrollo de GUI, eventos, MVC basico, proyecto integrador con base de datos.' }
]
},
{
id: 'prog3-ciaf',
icon: '&#128640;',
title: 'Programacion 3',
institution: 'Fundacion Universitaria CIAF',
desc: 'Desarrollo web full-stack, APIs RESTful, frameworks modernos y despliegue de aplicaciones.',
topics: ['PHP', 'JavaScript', 'REST API', 'MySQL', 'Frameworks'],
syllabus: [
{ unit: 'Unidad 1', title: 'Desarrollo web con PHP', desc: 'PHP avanzado, PDO, MVC, sesiones, autenticacion y autorizacion.' },
{ unit: 'Unidad 2', title: 'JavaScript avanzado y DOM', desc: 'ES6+, promesas, async/await, fetch API, manipulacion avanzada del DOM.' },
{ unit: 'Unidad 3', title: 'APIs RESTful', desc: 'Diseno de APIs REST, verbos HTTP, JSON, autenticacion con tokens, documentacion.' },
{ unit: 'Unidad 4', title: 'Frameworks y despliegue', desc: 'Introduccion a Laravel/Django, control de versiones con Git, despliegue basico.' }
]
},
{
id: 'ia-secundaria',
icon: '&#129302;',
title: 'Inteligencia Artificial',
institution: 'Instituto Tecnico Marillac - Secundaria',
desc: 'Conceptos fundamentales de IA, aplicaciones practicas, herramientas y etica de la inteligencia artificial.',
topics: ['IA Generativa', 'Machine Learning', 'Etica IA', 'Chatbots', 'Automatizacion'],
syllabus: [
{ unit: 'Unidad 1', title: 'Que es la Inteligencia Artificial?', desc: 'Historia, conceptos basicos, tipos de IA, ejemplos cotidianos.' },
{ unit: 'Unidad 2', title: 'Aprendizaje automatico', desc: 'Tipos de aprendizaje (supervisado, no supervisado), ejemplos practicos.' },
{ unit: 'Unidad 3', title: 'Herramientas de IA', desc: 'ChatGPT, generadores de imagen, asistentes virtuales, uso responsable.' },
{ unit: 'Unidad 4', title: 'Proyectos con IA', desc: 'Creacion de chatbots simples, clasificadores, y proyectos creativos.' }
]
},
{
id: 'bd-secundaria',
icon: '&#128451;',
title: 'Bases de Datos',
institution: 'Instituto Tecnico Marillac - Secundaria',
desc: 'Modelado de datos, SQL, administracion de bases de datos relacionales.',
topics: ['SQL', 'MySQL', 'ER', 'Normalizacion', 'CRUD'],
syllabus: [
{ unit: 'Unidad 1', title: 'Introduccion a bases de datos', desc: 'Conceptos, modelos de datos, diagrama entidad-relacion.' },
{ unit: 'Unidad 2', title: 'SQL basico', desc: 'CREATE, SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY.' },
{ unit: 'Unidad 3', title: 'SQL avanzado', desc: 'JOINs, subconsultas, funciones de agregacion, GROUP BY.' },
{ unit: 'Unidad 4', title: 'Administracion y optimizacion', desc: 'Indices, normalizacion, respaldos, seguridad de datos.' }
]
}
];
const institutions = [
{
id: 'utp',
name: 'Universidad Tecnologica de Pereira',
type: 'Universidad Publica',
icon: '&#127891;',
iconClass: 'university',
subjects: subjects.filter(s => s.institution.includes('UTP'))
},
{
id: 'marillac',
name: 'Instituto Tecnico Marillac',
type: 'Educacion Secundaria (High School)',
icon: '&#128218;',
iconClass: 'highschool',
subjects: subjects.filter(s => s.institution.includes('Marillac'))
},
{
id: 'ciaf',
name: 'Fundacion Universitaria CIAF',
type: 'Universidad',
icon: '&#127979;',
iconClass: 'ciaf',
subjects: subjects.filter(s => s.institution.includes('CIAF'))
}
];
const teachingContainer = document.getElementById('teachingAccordions');
institutions.forEach(inst => {
const instEl = document.createElement('div');
instEl.className = 'institution-accordion';
instEl.id = 'inst-' + inst.id;
let subjectsHTML = '';
inst.subjects.forEach(s => {
subjectsHTML += `
<div class="subject-accordion" id="subj-${s.id}">
<button class="subject-header" onclick="toggleSubject('${s.id}')">
<div class="subj-icon">${s.icon}</div>
<div class="subj-info">
<div class="subj-name">${s.title}</div>
<div class="subj-desc">${s.desc}</div>
</div>
<div class="subj-chevron">&#9660;</div>
</button>
<div class="subject-body">
<div class="subject-body-inner">
<div class="subject-topics-row">
${s.topics.map(t => `<span class="topic-chip">${t}</span>`).join('')}
</div>
<div class="section-label" style="margin-bottom:0.6rem;font-size:0.68rem;">
<div class="syllabus-list">
${s.syllabus.map(item => `
<div class="syllabus-card">
<div class="syl-unit">${item.unit}</div>
<div class="syl-title">${item.title}</div>
<div class="syl-desc">${item.desc}</div>
</div>
`).join('')}
</div>
</div>
</div>
</div>
`;
});
instEl.innerHTML = `
<button class="institution-header" onclick="toggleInstitution('${inst.id}')">
<div class="inst-icon ${inst.iconClass}">${inst.icon}</div>
<div class="inst-info">
<div class="inst-name">${inst.name}</div>
<div class="inst-type">${inst.type}</div>
</div>
<div class="inst-count">${inst.subjects.length} materia${inst.subjects.length > 1 ? 's' : ''}</div>
<div class="inst-chevron">&#9660;</div>
</button>
<div class="institution-body">
<div class="institution-body-inner">
${subjectsHTML}
</div>
</div>
`;
teachingContainer.appendChild(instEl);
});
teachingContainer.innerHTML += `
<div class="caricature-float">
<img src="${CARICATURE}" alt="David Romero - Docente">
</div>
`;
function toggleInstitution(id) {
const el = document.getElementById('inst-' + id);
const wasOpen = el.classList.contains('open');
document.querySelectorAll('.institution-accordion').forEach(a => a.classList.remove('open'));
document.querySelectorAll('.subject-accordion').forEach(a => a.classList.remove('open'));
if (!wasOpen) {
el.classList.add('open');
}
}
function toggleSubject(id) {
const el = document.getElementById('subj-' + id);
const wasOpen = el.classList.contains('open');
el.closest('.institution-body-inner').querySelectorAll('.subject-accordion').forEach(a => a.classList.remove('open'));
if (!wasOpen) {
el.classList.add('open');
}
}
const courses = [
{
id: 'intro-algoritmos',
icon: '&#129518;',
title: 'Introduccion a los Algoritmos',
desc: 'Aprende a pensar como programador. Domina la logica algoritmica desde cero con ejercicios practicos y pseudocodigo.',
levels: [
{
name: 'Elemental',
key: 'elem',
duration: '3 semanas',
lessons: '10 lecciones',
topics: ['Pseudocodigo', 'Variables', 'Tipos de datos', 'Operadores'],
modules: [
{ num: 'Modulo 1', title: 'Que es un algoritmo', desc: 'Conceptos basicos, problemas del mundo real, descomposicion y abstraccion.' },
{ num: 'Modulo 2', title: 'Variables y tipos de datos', desc: 'Numericos, texto, booleanos, declaracion y asignacion de variables.' },
{ num: 'Modulo 3', title: 'Operadores y expresiones', desc: 'Aritmeticos, logicos, relacionales, precedencia de operadores.' },
{ num: 'Modulo 4', title: 'Diagramas de flujo', desc: 'Simbolos, lectura, creacion de diagramas para problemas simples.' }
]
},
{
name: 'Intermedio',
key: 'inter',
duration: '3 semanas',
lessons: '10 lecciones',
topics: ['Condicionales', 'Ciclos', 'Arreglos', 'Funciones'],
modules: [
{ num: 'Modulo 5', title: 'Estructuras condicionales', desc: 'If/else, switch, condiciones anidadas, toma de decisiones.' },
{ num: 'Modulo 6', title: 'Ciclos y repeticiones', desc: 'For, while, do-while, contadores, acumuladores.' },
{ num: 'Modulo 7', title: 'Arreglos unidimensionales', desc: 'Vectores, recorridos, busqueda lineal, maximos y minimos.' },
{ num: 'Modulo 8', title: 'Funciones y modularidad', desc: 'Declaracion de funciones, parametros, retorno de valores.' }
]
},
{
name: 'Avanzado',
key: 'adv',
duration: '3 semanas',
lessons: '10 lecciones',
topics: ['Matrices', 'Recursion', 'Ordenamiento', 'Complejidad'],
modules: [
{ num: 'Modulo 9', title: 'Matrices y arreglos 2D', desc: 'Operaciones con matrices, recorridos por fila y columna, traspuesta.' },
{ num: 'Modulo 10', title: 'Recursion', desc: 'Concepto recursivo, casos base, factorial, Fibonacci, torres de Hanoi.' },
{ num: 'Modulo 11', title: 'Algoritmos de ordenamiento', desc: 'Burbuja, seleccion, insercion, comparacion de eficiencia.' },
{ num: 'Modulo 12', title: 'Proyecto final integrador', desc: 'Problema complejo resuelto aplicando todos los conceptos aprendidos.' }
]
}
]
},
{
id: 'logica-programacion',
icon: '&#129504;',
title: 'Logica de Programacion',
desc: 'Fortalece tu razonamiento logico-matematico para resolver problemas computacionales. Base para cualquier lenguaje.',
levels: [
{
name: 'Elemental',
key: 'elem',
duration: '3 semanas',
lessons: '8 lecciones',
topics: ['Proposiciones', 'Tablas de verdad', 'Operadores logicos'],
modules: [
{ num: 'Modulo 1', title: 'Pensamiento logico', desc: 'Proposiciones, conectores logicos AND, OR, NOT, tablas de verdad.' },
{ num: 'Modulo 2', title: 'Analisis de problemas', desc: 'Identificacion de entradas, procesos y salidas en problemas cotidianos.' },
{ num: 'Modulo 3', title: 'Diagramas de flujo basicos', desc: 'Simbolos, secuencias lineales, primeros diagramas con decisiones.' }
]
},
{
name: 'Intermedio',
key: 'inter',
duration: '3 semanas',
lessons: '8 lecciones',
topics: ['Pseudocodigo', 'Condicionales', 'Ciclos', 'Patrones'],
modules: [
{ num: 'Modulo 4', title: 'Pseudocodigo estructurado', desc: 'Buenas practicas de escritura, traduccion de problemas a pseudocodigo.' },
{ num: 'Modulo 5', title: 'Decisiones complejas', desc: 'Condicionales anidados, multiples condiciones, arboles de decision.' },
{ num: 'Modulo 6', title: 'Ciclos y patrones', desc: 'Ciclos determinados e indeterminados, patrones de acumulacion y conteo.' }
]
},
{
name: 'Avanzado',
key: 'adv',
duration: '3 semanas',
lessons: '8 lecciones',
topics: ['Funciones', 'Arreglos', 'Matrices', 'Retos logicos'],
modules: [
{ num: 'Modulo 7', title: 'Funciones y subprogramas', desc: 'Modularizacion, parametros, alcance de variables, reutilizacion.' },
{ num: 'Modulo 8', title: 'Estructuras de datos basicas', desc: 'Arreglos, matrices, operaciones de busqueda y ordenamiento.' },
{ num: 'Modulo 9', title: 'Retos y proyecto integrador', desc: '20+ ejercicios de logica aplicada y proyecto final evaluable.' }
]
}
]
},
{
id: 'curso-cpp',
icon: '&#9889;',
title: 'Programacion en C++',
desc: 'Desde los fundamentos hasta POO. Aprende C++ con enfoque practico orientado a resolver problemas reales.',
levels: [
{
name: 'Elemental',
key: 'elem',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['Sintaxis C++', 'I/O', 'Control de flujo', 'Funciones'],
modules: [
{ num: 'Modulo 1', title: 'Configuracion y primeros pasos', desc: 'Instalacion del IDE, compilacion, cout, cin, tipos de datos.' },
{ num: 'Modulo 2', title: 'Operadores y control de flujo', desc: 'If, else, switch, operadores aritmeticos, logicos y relacionales.' },
{ num: 'Modulo 3', title: 'Ciclos', desc: 'For, while, do-while, break, continue, ejercicios intensivos.' },
{ num: 'Modulo 4', title: 'Funciones basicas', desc: 'Declaracion, paso por valor, prototipos, primeras funciones utiles.' }
]
},
{
name: 'Intermedio',
key: 'inter',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['Arreglos', 'Punteros', 'Strings', 'Archivos'],
modules: [
{ num: 'Modulo 5', title: 'Arreglos y matrices', desc: 'Arrays 1D y 2D, recorridos, busqueda, ordenamiento basico.' },
{ num: 'Modulo 6', title: 'Punteros y memoria', desc: 'Punteros, direcciones, new/delete, arreglos dinamicos, referencias.' },
{ num: 'Modulo 7', title: 'Strings y manejo de texto', desc: 'String class, operaciones, parsing, manipulacion de cadenas.' },
{ num: 'Modulo 8', title: 'Archivos y excepciones', desc: 'Lectura/escritura de archivos, manejo de errores, streams.' }
]
},
{
name: 'Avanzado',
key: 'adv',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['POO', 'Herencia', 'STL', 'Patrones'],
modules: [
{ num: 'Modulo 9', title: 'POO completa', desc: 'Clases, objetos, constructores, encapsulamiento, abstraccion.' },
{ num: 'Modulo 10', title: 'Herencia y polimorfismo', desc: 'Herencia simple/multiple, virtual, override, clases abstractas.' },
{ num: 'Modulo 11', title: 'STL y estructuras avanzadas', desc: 'Vectores, maps, sets, algoritmos STL, iteradores.' },
{ num: 'Modulo 12', title: 'Proyecto final', desc: 'Aplicacion completa con POO, archivos y estructuras de datos.' }
]
}
]
},
{
id: 'curso-python',
icon: '&#128013;',
title: 'Programacion en Python',
desc: 'Domina Python desde cero. Automatizacion, scripting y desarrollo web basico con el lenguaje mas demandado.',
levels: [
{
name: 'Elemental',
key: 'elem',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['Sintaxis', 'Variables', 'Listas', 'Funciones'],
modules: [
{ num: 'Modulo 1', title: 'Primeros pasos en Python', desc: 'Instalacion, REPL, variables, tipos de datos, print, input.' },
{ num: 'Modulo 2', title: 'Control de flujo', desc: 'If/elif/else, for, while, range, comprensiones basicas.' },
{ num: 'Modulo 3', title: 'Listas y tuplas', desc: 'Creacion, indexacion, slicing, metodos, iteracion sobre colecciones.' },
{ num: 'Modulo 4', title: 'Funciones', desc: 'Definicion, parametros, retorno, args/kwargs, funciones lambda.' }
]
},
{
name: 'Intermedio',
key: 'inter',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['Diccionarios', 'POO', 'Archivos', 'Modulos'],
modules: [
{ num: 'Modulo 5', title: 'Diccionarios y sets', desc: 'HashMap, operaciones, comprensiones, when to use each.' },
{ num: 'Modulo 6', title: 'POO en Python', desc: 'Clases, herencia, polimorfismo, metodos magicos, dataclasses.' },
{ num: 'Modulo 7', title: 'Archivos y excepciones', desc: 'CSV, JSON, TXT, try/except, context managers.' },
{ num: 'Modulo 8', title: 'Modulos y librerias', desc: 'pip, virtualenv, importaciones, librerias populares.' }
]
},
{
name: 'Avanzado',
key: 'adv',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['APIs', 'Pandas', 'Flask', 'Automatizacion'],
modules: [
{ num: 'Modulo 9', title: 'Consumo de APIs REST', desc: 'Requests, JSON parsing, autenticacion, APIs publicas.' },
{ num: 'Modulo 10', title: 'Analisis de datos con Pandas', desc: 'DataFrames, limpieza, agrupacion, visualizacion basica.' },
{ num: 'Modulo 11', title: 'Desarrollo web con Flask', desc: 'Rutas, templates, formularios, conexion a base de datos.' },
{ num: 'Modulo 12', title: 'Proyecto final', desc: 'Aplicacion completa: API o automatizacion con base de datos.' }
]
}
]
},
{
id: 'curso-java',
icon: '&#9749;',
title: 'Programacion en Java',
desc: 'Aprende Java orientado a objetos con enfoque empresarial. Desde fundamentos hasta Spring Boot.',
levels: [
{
name: 'Elemental',
key: 'elem',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['JDK', 'Sintaxis', 'Control de flujo', 'Metodos'],
modules: [
{ num: 'Modulo 1', title: 'Configuracion y fundamentos', desc: 'JDK, JRE, IDE, tipos primitivos, variables, operadores, I/O.' },
{ num: 'Modulo 2', title: 'Control de flujo', desc: 'If, switch, for, while, break, continue, ejercicios practicos.' },
{ num: 'Modulo 3', title: 'Metodos y arrays', desc: 'Metodos estaticos, sobrecarga, arrays 1D y 2D, strings.' },
{ num: 'Modulo 4', title: 'Introduccion a POO', desc: 'Clases, objetos, constructores, encapsulamiento basico.' }
]
},
{
name: 'Intermedio',
key: 'inter',
duration: '4 semanas',
lessons: '12 lecciones',
topics: ['POO', 'Collections', 'Excepciones', 'Archivos'],
modules: [
{ num: 'Modulo 5', title: 'POO avanzada', desc: 'Herencia, polimorfismo, interfaces, clases abstractas, SOLID.' },
{ num: 'Modulo 6', title: 'Excepciones y archivos', desc: 'Try-catch-finally, excepciones custom, lectura/escritura archivos.' },
{ num: 'Modulo 7', title: 'Collections Framework', desc: 'ArrayList, HashMap, LinkedList, TreeSet, iteradores, generics.' },
{ num: 'Modulo 8', title: 'JDBC y bases de datos', desc: 'Conexion MySQL, CRUD, PreparedStatement, patron DAO.' }
]
},
{
name: 'Avanzado',
key: 'adv',
duration: '5 semanas',
lessons: '14 lecciones',
topics: ['Spring Boot', 'REST API', 'Testing', 'Deploy'],
modules: [
{ num: 'Modulo 9', title: 'Introduccion a Spring Boot', desc: 'Dependencias, controladores REST, servicios, inyeccion.' },
{ num: 'Modulo 10', title: 'API REST completa', desc: 'Endpoints CRUD, validaciones, manejo de errores, documentacion.' },
{ num: 'Modulo 11', title: 'Testing y buenas practicas', desc: 'JUnit, pruebas unitarias, principios SOLID, clean code.' },
{ num: 'Modulo 12', title: 'Proyecto final', desc: 'API REST con Spring Boot, MySQL, testing y despliegue.' }
]
}
]
}
];
const coursesGrid = document.getElementById('coursesGrid');
courses.forEach(c => {
const firstLevel = c.levels[0];
coursesGrid.innerHTML += `
<div class="course-card" id="course-${c.id}">
<div class="course-main-header" onclick="toggleCourseCard('${c.id}')">
<div class="course-main-icon">${c.icon}</div>
<div class="course-main-info">
<div class="course-main-title">${c.title}</div>
<div class="course-main-desc">${c.desc}</div>
</div>
<div class="course-levels-count">
<div class="level-dots">
<div class="level-dot dot-elem"></div>
<div class="level-dot dot-inter"></div>
<div class="level-dot dot-adv"></div>
</div>
</div>
<div class="course-chevron">&#9660;</div>
</div>
<div class="course-expand">
<div class="course-expand-inner">
<div class="level-tabs">
${c.levels.map((lv, i) => {
const activeClass = i === 0 ? 'active-' + lv.key : '';
return `<button class="level-tab ${activeClass}" onclick="switchLevel('${c.id}', ${i}, '${lv.key}')" data-course="${c.id}" data-idx="${i}">
${i === 0 ? '&#127793;' : i === 1 ? '&#128640;' : '&#11088;'} ${lv.name}
<span class="tab-price">$5 USD</span>
</button>`;
}).join('')}
</div>
${c.levels.map((lv, i) => `
<div class="level-panel ${i === 0 ? 'active' : ''}" data-course="${c.id}" data-level="${i}">
<div class="level-panel-header">
<div class="level-panel-meta">
<div class="level-meta-tag"><span class="meta-icon">&#128338;</span> ${lv.duration}</div>
<div class="level-meta-tag"><span class="meta-icon">&#127909;</span> ${lv.lessons}</div>
<div class="level-meta-tag"><span class="meta-icon">&#127897;</span> En vivo + grabaciones</div>
</div>
</div>
<div class="level-topics-row">
${lv.topics.map(t => `<span class="topic-chip">${t}</span>`).join('')}
</div>
<div class="level-modules">
${lv.modules.map(m => `
<div class="level-module">
<div class="mod-number">${m.num}</div>
<div class="mod-title">${m.title}</div>
<div class="mod-desc">${m.desc}</div>
</div>
`).join('')}
</div>
<div class="level-enroll-bar">
<div class="level-price">
<span class="lp-currency">USD</span>
<span class="lp-amount">$5</span>
<span class="lp-label">/ nivel ${lv.name.toLowerCase()}</span>
</div>
<a class="btn-enroll" href="mailto:davidromer25@hotmail.com?subject=Inscripcion: ${encodeURIComponent(c.title)} - Nivel ${lv.name}&body=Hola David, estoy interesado en el curso ${encodeURIComponent(c.title)} (Nivel ${lv.name}). Me gustaria recibir mas informacion.">
&#127891; Inscribirme
</a>
</div>
</div>
`).join('')}
</div>
</div>
</div>
`;
});
coursesGrid.innerHTML += `
<div class="bundle-banner">
<h3>&#127873; Pack Completo - Los 5 Cursos</h3>
<p>Accede a los 5 cursos completos (15 niveles en total) con un descuento especial. Domina algoritmos, logica, C++, Python y Java desde nivel elemental hasta avanzado.</p>
<div class="bundle-price-row">
<span class="bp-old">$75 USD</span>
<span class="bp-new">$60 USD</span>
<span class="bp-label">/ 15 niveles</span>
</div>
<a class="btn-enroll" href="mailto:davidromer25@hotmail.com?subject=Inscripcion: Pack Completo 5 Cursos&body=Hola David, estoy interesado en el Pack Completo de los 5 cursos (15 niveles). Me gustaria recibir mas informacion.">
&#127891; Quiero el Pack Completo
</a>
</div>
`;
function toggleCourseCard(id) {
const card = document.getElementById('course-' + id);
const wasOpen = card.classList.contains('open');
document.querySelectorAll('.course-card').forEach(c => c.classList.remove('open'));
if (!wasOpen) card.classList.add('open');
}
function switchLevel(courseId, idx, key) {
const tabs = document.querySelectorAll(`.level-tab[data-course="${courseId}"]`);
tabs.forEach(t => { t.className = 'level-tab'; });
tabs[idx].classList.add('active-' + key);
const panels = document.querySelectorAll(`.level-panel[data-course="${courseId}"]`);
panels.forEach(p => p.classList.remove('active'));
panels[idx].classList.add('active');
}
const skillCategories = [
{ title: 'Lenguajes de Programacion', items: [
{ name: 'Python', cls: 'primary' }, { name: 'JavaScript', cls: 'primary' }, { name: 'PHP', cls: 'primary' },
{ name: 'C++', cls: 'primary' }, { name: 'SQL', cls: 'primary' }, { name: 'HTML5', cls: '' }, { name: 'CSS3', cls: '' }
]},
{ title: 'Frameworks & Librerias', items: [
{ name: 'React', cls: 'secondary' }, { name: 'Django', cls: 'secondary' }, { name: 'Flask', cls: 'secondary' },
{ name: 'Laravel', cls: 'secondary' }, { name: 'Spring Boot', cls: 'secondary' }, { name: 'Angular', cls: 'secondary' },
{ name: 'Scikit-learn', cls: 'tertiary' }, { name: 'Pandas', cls: 'tertiary' }, { name: 'NumPy', cls: 'tertiary' }
]},
{ title: 'Bases de Datos', items: [
{ name: 'MySQL', cls: 'primary' }, { name: 'PostgreSQL', cls: 'primary' }, { name: 'MongoDB', cls: '' }
]},
{ title: 'Cloud & DevOps', items: [
{ name: 'AWS', cls: 'tertiary' }, { name: 'Azure', cls: 'tertiary' }, { name: 'Docker', cls: 'tertiary' },
{ name: 'Git', cls: '' }, { name: 'CI/CD Pipelines', cls: '' }
]},
{ title: 'IA / Machine Learning', items: [
{ name: 'Aprendizaje Automatico', cls: 'secondary' }, { name: 'Ciencia de Datos', cls: 'secondary' },
{ name: 'Redes Neuronales', cls: 'secondary' }, { name: 'NLP', cls: 'secondary' }
]},
{ title: 'Metodologias', items: [
{ name: 'Scrum', cls: '' }, { name: 'Kanban', cls: '' }, { name: 'REST API', cls: '' },
{ name: 'POO', cls: '' }, { name: 'TDD', cls: '' }
]}
];
const skillsContainer = document.getElementById('skillsContainer');
skillCategories.forEach(cat => {
skillsContainer.innerHTML += `
<div class="skill-category">
<div class="skill-cat-title">${cat.title}</div>
<div class="skills-cloud">
${cat.items.map(i => `<span class="skill-tag ${i.cls}">${i.name}</span>`).join('')}
</div>
</div>
`;
});
const certs = [
{ name: 'Desarrollador Python y React', org: 'Florida Global University / Certiprof (En progreso)' },
{ name: 'Full-Stack con Spring Boot y Angular', org: '2025' },
{ name: 'Python para Ciencia de Datos y Big Data', org: 'LinkedIn Learning, 2021' },
{ name: 'Microsoft 365 Fundamentals MS-900', org: 'Intelligent Training, 2021' },
{ name: 'Estadistica Aplicada al Proceso Empresarial', org: 'Cataluna University, 2021' }
];
const certList = document.getElementById('certList');
certs.forEach(c => {
certList.innerHTML += `
<div class="cert-item">
<div class="cert-dot"></div>
<div>
<div class="cert-name">${c.name}</div>
<div class="cert-org">${c.org}</div>
</div>
</div>
`;
});