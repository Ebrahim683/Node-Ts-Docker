import { Router } from "express";
import movieRouter from "./movie.route";

const router = Router();

router.use("/movie", movieRouter);

export default router;
