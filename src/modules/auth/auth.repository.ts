import { prisma } from "../../database/prismaClient";

export class AuthRespository {
  async findByEmail(email: string){
    return prisma.user.findUnique({
      where: { email }
    });
  }
}