import { Request, Response } from 'express';
import { UserService } from './users.service';
import { createUserSchema, updateUserSchema } from './users.schema';

export class UserController {
  private service = new UserService();

  async create(req: Request, res: Response) {
    const data = createUserSchema.parse(req.body);

    const user = await this.service.create(data);
    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const data = updateUserSchema.parse(req.body);
    const user = await this.service.update(id, data);

    return res.json(user);
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const user = await this.service.delete(id);
    return res.json(user);
  }

  async list(req: Request, res: Response) {
    const users = await this.service.list();
    return res.json(users);
  }
}