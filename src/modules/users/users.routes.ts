import { Router } from "express";
import { UserController } from "./users.controller";

const userRoutes = Router();
const controller = new UserController();

userRoutes.post("/users", controller.create.bind(controller));
userRoutes.get("/users", controller.list.bind(controller));
userRoutes.put("/users/:id", controller.update.bind(controller));
userRoutes.delete("/users/:id", controller.delete.bind(controller));

export default userRoutes;