import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../database/prismaClient";

export class CategoryRepository {
  async create(data: Prisma.CategoriesCreateInput) {
    return prisma.categories.create({ data })
  }

  async findAll() {
    return prisma.categories.findMany();
  }

  async update(id: string, data: Prisma.CategoriesUpdateInput){
    return prisma.categories.update({
      where: { id },
      data
    });
  }

  async delete(id: string){
    return prisma.categories.delete({
      where: { id }
    });
  }
}