import { Router } from "express";
const router = Router();
import { userController } from "../controllers/index";

router.post("/users", userController.find);

export default router;
