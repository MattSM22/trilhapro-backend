import { z } from 'zod';

const createCategorySchema = z.object({
  titulo: z.string().max(80, "Titulo muito extensa, por favor use um titulo menor."),
});

const updateCategorySchema = createCategorySchema.partial();

export type createCategoryDTO = z.infer<typeof createCategorySchema>;
export type updateCategoryDTO = z.infer<typeof updateCategorySchema>;