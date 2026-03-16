import { CreateTaskDTO } from "./tasks.dto";
import { TasksRepository } from "./tasks.repository";
import { updateTaskDTO } from "./tasks.schema";

export class TaskService {
  private repository = new TasksRepository();
  
  async create(task: CreateTaskDTO) {
    return this.repository.create({
      titulo: task.titulo,
      descricao: task.descricao,
      status: task.status,
      userId: task.userId,
      categoryId: task.categoryId
    });
  }

  async list() {
    return this.repository.findAll();
  }

  async update(id: string, data: updateTaskDTO) {
    return this.repository.update(id, {
      ...data
    });
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}