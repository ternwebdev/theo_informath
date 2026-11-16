import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    temas: z.array(z.enum(['Informática', 'Matemáticas', 'Redes'])), // Tus 3 círculos
    referencias: z.array(z.object({ 
      texto: z.string(), 
      url: z.string().url().optional() 
    })).optional(), // Para el footer
    lecturaMin: z.number().int(), // Reemplaza el "1/10" del carrusel
  }),
});

export const collections = { blog };