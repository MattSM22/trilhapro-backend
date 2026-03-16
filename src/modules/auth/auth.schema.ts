import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email("E-mail incorreto."),
  senha: z.string().min(6, "A senha digitada não possui 6 caracteres.")
});

export type LoginDTO = z.infer<typeof loginSchema>;