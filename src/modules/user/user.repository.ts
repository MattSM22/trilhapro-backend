import { prisma } from "../../database/prismaClient";
import { IUser } from "./user.types";

export const userRepository = {
  create: (user: IUser) => {
    return prisma.user.create({ data: user });
  },
  findAll: () => {
    return prisma.user.findMany();
  },
  login: (user: IUser) => {
    return prisma.user.findMany({
      where: {
        AND: {
          email: user.email,
          senha: user.senha
        }
      }
    });
  },
  update: (id: string, user: Partial<IUser>) => {
    return prisma.user.update({
      where: { id },
      data: user
    });
  },
  delete: (id: string) => {
    return prisma.user.delete({
      where: { id },
    });
  }
}