import { signUp, login, logout } from "controllers/authController";
import { Router } from "express";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

export default router;
