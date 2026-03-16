import { z } from 'zod';

const createTaskSchema = z.object({
  titulo: z.string().max(80, "Titulo muito extensa, por favor use um titulo menor."),
  descricao: z.string().max(255, "Descrição muito extensa, por favor diminua a quantidade de texto."),
  status: z.string("Não pode está vazio"),
  userId: z.string("É necessário ter um userID"),
});

const updateTaskSchema = createTaskSchema.partial();

export type createTaskDTO = z.infer<typeof createTaskSchema>;
export type updateTaskDTO = z.infer<typeof updateTaskSchema>;