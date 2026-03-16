import { Request, Response } from 'express';
import { TaskService } from './tasks.service';

export class TaskController {
  private service = new TaskService();

  async create(req: Request, res: Response){
    const task = await this.service.create(req.body)
    return res.json(task);
  }

  async list(req: Request, res: Response) {
    const tasks = await this.service.list();
    return res.json(tasks);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const data = req.body;
    const task = await this.service.update(id, data);

    return res.json(task);
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const task = await this.service.delete(id);

    return res.json(task);
  }
}