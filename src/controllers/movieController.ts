import ErrorController from "../error/errorController";
import { Request, Response } from "express";
import prisma from "../db/db.config";

class MovieController {
  static async addMovies(req: Request, res: Response): Promise<any> {
    try {
      const { title, author } = req.body;
      const result = await prisma.movie.create({
        data: {
          title: title,
          author: author,
        },
      });
      if (result != null) {
        res.status(200).json({
          success: true,
          message: "Movie added.",
          data: result,
        });
      } else {
        ErrorController.sendError(res, "Fail to add movie");
      }
    } catch (error) {
      ErrorController.sendError(res, error);
    }
  }

  static async getMovies(req: Request, res: Response): Promise<any> {
    try {
      const result = await prisma.movie.findMany();
      if (result != null) {
        res.status(200).json({
          success: true,
          message: "Movie fetch successfully!",
          data: result,
        });
      } else {
        ErrorController.sendError(res, "Fail to get movie");
      }
    } catch (error) {
      ErrorController.sendError(res, error);
    }
  }
}

export default MovieController;
