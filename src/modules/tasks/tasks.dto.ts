export interface CreateTaskDTO {
  titulo: string;
  descricao: string;
  status: string;
  userId: string;
  categoryId?: string;
}