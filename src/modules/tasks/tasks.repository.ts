import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../database/prismaClient";

// @ts-ignore
export class TasksRepository {
  async create(data: Prisma.TaskCreateInput | Prisma.TaskUncheckedCreateInput){
    return prisma.task.create({ data });
  }

  async findAll() {
    return prisma.task.findMany({
      include: { category: true, user: true }
    });
  }

  async update(id: string, data: Prisma.TaskUpdateInput){
    return prisma.task.update({
      where: { id },
      data
    });
  }

  async delete(id: string){
    return prisma.task.delete({
      where: { id }
    });
  }
}
