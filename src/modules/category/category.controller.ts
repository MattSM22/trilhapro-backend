import { Request, Response } from 'express';
import { CategoryService } from './category.service';

export class CategoryController {
  private service = new CategoryService();

  async create(req: Request, res: Response){
    const category = await this.service.create(req.body)
    return res.json(category);
  }

  async list(req: Request, res: Response) {
    const categories = await this.service.list();
    return res.json(categories);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const data = req.body;
    const category = await this.service.update(id, data);

    return res.json(category);
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const category = await this.service.delete(id);

    return res.json(category);
  }
}