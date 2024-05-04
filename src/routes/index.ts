import express, { Router } from "express";
import apartmentsRouter from "./apartments";
import authRouter from "./authRouter";
import { protectedRoute } from "controllers/middleware/isAuth";

const router: Router = express.Router();

// router.use(authRouter);
router.use("/apartments", apartmentsRouter);

export default (): Router => {
  return router;
};
