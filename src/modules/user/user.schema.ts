import { z } from 'zod';

export const createUserSchema = z.object({
  nome: z.string().min(2, "Nome muito curto"),
  email: z.string().email("O e-mail precisa ser válido"),
  senha: z.string().min(6, "A senha deve ter no minimo 6 caracteres"),
  data_nasc: z.coerce.date(),
  ocupacao: z.string(),
  nacionalidade: z.string(),
  residencia: z.string()
});

export const loginUserSchema = z.object({
  email: z.string().email("O e-mail precisa ser válido"),
  senha: z.string().min(6, "A senha deve ter no minimo 6 caracteres")
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;