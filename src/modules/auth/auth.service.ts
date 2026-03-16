import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginDTO } from "./auth.schema";
import { AuthRespository } from "./auth.repository";

export class AuthService {
  private repository = new AuthRespository();

  async login(data: LoginDTO) {
    const user = await this.repository.findByEmail(data.email);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    const passwordMatch = await bcrypt.compare(data.senha, user.senha);

    if (!passwordMatch) {
      throw new Error("Senha inválida.");
    }

    const token = jwt.sign(
      {
        userId: user.id
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return {
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email
      }
    }
  }
}