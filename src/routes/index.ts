import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import planoRoutes from "../modules/planos/planos.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/planos", planoRoutes);

export default routes;
