import { Request, Response } from "express";
import { loginSchema } from "./auth.schema";
import { AuthService } from "./auth.service";

export class AuthController {
  private service = new AuthService();

  async login(req: Request, res: Response) {
    const data = loginSchema.parse(req.body);
    const result = await this.service.login(data);
    return res.json(result);
  }
}