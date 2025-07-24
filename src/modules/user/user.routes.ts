import { Router } from "express";
import { userController } from "./user.controller";
import { validate } from "../../middlewares/validate";
import { createUserSchema, loginUserSchema, updateUserSchema } from "./user.schema";

const router = Router();

router.post("/", validate(createUserSchema), userController.create);
router.post("/login", validate(loginUserSchema), userController.login);
router.get("/", userController.getAll);
router.put("/:id", validate(updateUserSchema), userController.update);
router.delete("/:id", userController.delete);

export default router;