# Portafolio — David Romero

Sitio estático en [Astro](https://astro.build) con colecciones de contenido, filtro de proyectos en Preact y despliegue en GitHub Pages.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run check` | `astro check` (tipos) |
| `npm run build` | Genera `dist/` |
| `npm run preview` | Sirve el build |
| `npm test` | Playwright (construye y abre preview si hace falta) |

## Contenido

- Proyectos: `src/content/proyectos/*.md`
- Docencia: `src/content/datos/docencia.json`
- Cursos: `src/content/cursos/*.md` (opcional; la página admite lista vacía)

## Contacto

Copia `.env.example` a `.env` y pon el id de Formspree en `PUBLIC_FORMSPREE_ID`. Sin esa variable, Contacto muestra GitHub y LinkedIn.

## Requisitos

Node 22 o superior.
