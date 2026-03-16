import { Router } from "express";
import { CategoryController } from "./category.controller";

const categoriesRoutes = Router();
const controller = new CategoryController();

categoriesRoutes.post("/category", controller.create.bind(controller));
categoriesRoutes.get("/category", controller.list.bind(controller));
categoriesRoutes.put("/category/:id", controller.update.bind(controller));
categoriesRoutes.delete("/category/:id", controller.delete.bind(controller));

export default categoriesRoutes;