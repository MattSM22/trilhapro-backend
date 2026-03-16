import bcrypt from 'bcrypt';
import { CreateUserDTO } from "./users.dto";
import { UserRepository } from "./users.repository";
import { updateUserDTO } from "./users.schema";

export class UserService {
  private repository = new UserRepository();

  async create(user: CreateUserDTO) {
    const hashedPassword = await bcrypt.hash(user.senha, 10);

    return this.repository.create({
      nome: user.nome,
      email: user.email,
      senha: hashedPassword,
    });
  }

  async list() {
    return this.repository.findAll();
  }

  async update(id: string, data: updateUserDTO) {
    return this.repository.update(id, {
      nome: data.nome,
      email: data.email,
      senha: data.senha
    });
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}