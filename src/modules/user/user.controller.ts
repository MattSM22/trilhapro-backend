import { Request, Response } from "express";
import { userService } from "./user.service";
import { CreateUserDTO, UpdateUserDTO } from "./user.schema";

export const userController = {
  create: async (req: Request<{}, {}, CreateUserDTO>, res: Response) => {
    const user = req.body;
    const newUser = await userService.createUser(user);
    res.status(201).json({message: "Usuário criado com sucesso!", user: newUser});
  },
  getAll: async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  },
  update: async (req: Request<{ id: string }, {}, UpdateUserDTO>, res: Response) => {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.send(201).json(updated);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await userService.deleteUser(id);
    res.send(200).json(deleted);
  }
}