import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/MovieController";
import { validate } from "./models/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Api working");
});

router.post("/movie", movieCreateValidation(), validate, createMovie);

export default router;
