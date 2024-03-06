import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from "./controllers/MovieController";
import { validate } from "./models/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Api working");
});

router.post("/movie", movieCreateValidation(), validate, createMovie);
router.get("/movie/:id", findMovieById);
router.get("/movie", getAllMovies);
router.delete("/movie/:id", removeMovie);
router.patch("/movie/:id", updateMovie)

export default router;
