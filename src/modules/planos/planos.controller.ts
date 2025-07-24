import { Request, Response } from "express";
import { planoService } from "./planos.service";
import { CreatePlanoDTO, UpdatePlanoDTO } from "./planos.schema";

export const planoController =  {
  create: async (req: Request<{}, {}, CreatePlanoDTO>, res: Response) => {
    const plano = req.body;
    const newPlano = await planoService.createPlano(plano);
    res.status(201).json({message: "Plano de estudos criado", data: newPlano});
  },
  getAll: async (req: Request,  res: Response) => {
    const planos = await planoService.getPlanos();
    res.status(200).json(planos);
  },
  update: async (req: Request<{ id: string }, {}, UpdatePlanoDTO>, res: Response) => {
    const updated = await planoService.updatePlano(req.params.id, req.body);
    res.status(201).json(updated);
  },
  delete: async (req: Request, res: Response) => {
    const { id }  = req.params;
    const deleted = await planoService.deleteUser(id);
    res.status(200).json(deleted);
  }
}