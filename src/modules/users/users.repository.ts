import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../database/prismaClient";
import { updateUserDTO } from "./users.schema";

export class UserRepository {
  async create(data: Prisma.UserCreateInput){
    return prisma.user.create({ data });
  }

  async findAll() {
    return prisma.user.findMany({
      include: {
        tasks: true
      }
    });
  }

  async update(id: string, data: updateUserDTO){
    return prisma.user.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return prisma.user.delete({
      where: { id }
    });
  }
}
