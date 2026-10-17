import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    resumen: z.string().max(160),            // sirve de meta description
    estado: z.enum(["produccion", "en-construccion", "documentado"]),
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
    niveles: z.array(z.object({
      nombre: z.enum(["Elemental", "Intermedio", "Avanzado"]),
      precioUSD: z.number().positive(),
      lecciones: z.number().int().positive(),
      enlaceCompra: z.string().url().optional(),
    })).length(3),
  }),
});

const docencia = defineCollection({
  loader: file("./src/content/datos/docencia.json"),
  schema: z.object({
    id: z.string(),                          // el loader file() exige un id por objeto
    institucion: z.string(),
    cargo: z.string(),
    periodo: z.string(),
    asignaturas: z.array(z.object({ nombre: z.string(), temario: z.array(z.string()) })),
  }),
});

export const collections = { proyectos, cursos, docencia };