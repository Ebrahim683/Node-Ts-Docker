import { Response } from "express";
class ErrorController {
  static sendError(res: Response, error: any) {
    console.error(error.toString());
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export default ErrorController;
