import { CreateCategoryDTO } from "./category.dto";
import { CategoryRepository } from "./category.repository";
import { updateCategoryDTO } from "./category.schema";

export class CategoryService {
  private repository = new CategoryRepository();
  
  async create(task: CreateCategoryDTO) {
    return this.repository.create({
      titulo: task.titulo,
    });
  }

  async list() {
    return this.repository.findAll();
  }

  async update(id: string, data: updateCategoryDTO) {
    return this.repository.update(id, {
      ...data
    });
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}