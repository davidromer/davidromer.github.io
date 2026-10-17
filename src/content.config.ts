import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    resumen: z.string().max(160),            // sirve de meta description
    estado: z.enum(["produccion", "en-construccion", "planificado", "documentado"]),
    stack: z.array(z.string()).min(1),
    portada: image().optional(),
    portadaAlt: z.string().optional(),       // describe qué muestra la captura
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(99),
    idioma: z.enum(["es", "en"]).default("es"),
  }),
});

const cursos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    icono: z.string().optional(),
    orden: z.number().default(99),
    niveles: z.array(z.object({
      nombre: z.enum(["Elemental", "Intermedio", "Avanzado"]),
      precioUSD: z.number().positive(),
      lecciones: z.number().int().positive(),
      duracion: z.string(),
      temas: z.array(z.string()),
      modulos: z.array(z.object({ titulo: z.string(), descripcion: z.string() })),
      enlaceCompra: z.string().url().optional(),
    })).length(3),
  }),
});

const docencia = defineCollection({
  loader: file("./src/content/datos/docencia.json"),
  schema: z.object({
    id: z.string(),                          // el loader file() exige un id por objeto
    institucion: z.string(),
    tipo: z.string(),
    cargo: z.string(),
    periodo: z.string(),
    orden: z.number().default(99),
    asignaturas: z.array(z.object({
      nombre: z.string(),
      descripcion: z.string(),
      temas: z.array(z.string()),
      unidades: z.array(z.object({ titulo: z.string(), descripcion: z.string() })),
    })),
  }),
});

export const collections = { proyectos, cursos, docencia };