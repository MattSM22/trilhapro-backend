import dotenv from 'dotenv';
import { PrismaClient } from '../generated/prisma'

dotenv.config();

export const prisma = new PrismaClient({
  log: ["query", "error"],
});