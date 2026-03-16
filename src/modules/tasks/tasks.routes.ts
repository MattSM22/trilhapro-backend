import { Router } from "express";
import { TaskController } from "./tasks.controller";

const tasksRoutes = Router();
const controller = new TaskController();

tasksRoutes.post("/tasks", controller.create.bind(controller));
tasksRoutes.get("/tasks", controller.list.bind(controller));
tasksRoutes.put("/tasks/:id", controller.update.bind(controller));
tasksRoutes.delete("/tasks/:id", controller.delete.bind(controller));

export default tasksRoutes;