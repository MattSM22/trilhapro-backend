import { prisma } from "../../database/prismaClient";
import { IPlanos } from "./planos.types";

export const planosRepository =  {
  create: (planos: IPlanos) =>  {
    return prisma.plano.create({ data: planos });
  },
  findAll: () => {
    return prisma.plano.findMany();
  },
  update: (id: string, planos: Partial<IPlanos>) => {
    return prisma.plano.update({
      where: { id },
      data: planos
    });
  },
  delete: (id: string) => {
    return prisma.plano.delete({
      where: { id }
    })
  }
}