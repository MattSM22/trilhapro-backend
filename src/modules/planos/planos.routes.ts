import { Router } from "express";
import { planoController } from "./planos.controller";
import { validate } from "../../middlewares/validate";
import { createPlanoSchema, updatePlanoSchema } from "./planos.schema";

const router = Router();

router.post("/", validate(createPlanoSchema), planoController.create);
router.get("/", planoController.getAll);
router.put("/:id", validate(updatePlanoSchema), planoController.update);
router.delete("/:id", planoController.delete);

export default router;