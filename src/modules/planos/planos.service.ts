import { planosRepository } from "./planos.repository";
import { IPlanos } from "./planos.types";

export const planoService = {
  createPlano: async (planos: IPlanos) => {
    return planosRepository.create(planos);
  },
  getPlanos: async () => {
    return planosRepository.findAll();
  },
  updatePlano: async (id: string, planos: Partial<IPlanos>) => {
    return planosRepository.update(id, planos);
  },
  deleteUser: async (id: string) => {
    return planosRepository.delete(id);
  } 
}