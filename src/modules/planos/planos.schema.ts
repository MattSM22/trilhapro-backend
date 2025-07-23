import { z } from "zod";

export const createPlanoSchema = z.object({
  nome_plano: z.string().min(2, "Nome do plano é muito curto"),
  tarefas: z.array(z.string())
});

export const updatePlanoSchema = createPlanoSchema.partial();

export type CreatePlanoDTO = z.infer<typeof createPlanoSchema>;
export type UpdatePlanoDTO = z.infer<typeof updatePlanoSchema>;