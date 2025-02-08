import { Router } from "express";
import MovieController from "../controllers/movieController";

const movieRouter = Router();

movieRouter.post("/addMovie", MovieController.addMovies);
movieRouter.get("/getMovies", MovieController.getMovies);

export default movieRouter;
