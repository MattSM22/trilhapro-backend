import { z } from 'zod';

export const createUserSchema = z.object({
  nome: z.string().min(2, "Nome muito curto."),
  email: z.email("E-mail precisa ser válido."),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export const updateUserSchema = createUserSchema.partial();

export type createUserDTO = z.infer<typeof createUserSchema>;
export type updateUserDTO = z.infer<typeof updateUserSchema>;