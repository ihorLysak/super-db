import express, { Request, Response } from "express";
import { superheroService } from "./services/superhero.service";
import { getImagesAbsolutePaths } from "./helpers/helpers";
import { SUPERHEROES_ENDPOINT } from "../libs/constants/constants";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post(
  SUPERHEROES_ENDPOINT,
  upload.array("images"),
  async (req: Request, res: Response) => {
    const heroData = {
      nickname: req.body.nickname,
      real_name: req.body.real_name,
      origin_description: req.body.origin_description,
      superpowers: req.body.superpowers,
      catch_phrase: req.body.catch_phrase,
    };

    const imagePaths = getImagesAbsolutePaths(req);

    try {
      const newHero = await superheroService.create(heroData, imagePaths);
      res.send(newHero);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }
);

app.get(SUPERHEROES_ENDPOINT, async (req: Request, res: Response) => {
  try {
    const allHeroes = await superheroService.getAllMinimal();
    res.send(allHeroes);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get(`${SUPERHEROES_ENDPOINT}/:id`, async (req: Request, res: Response) => {
  try {
    const targetHero = await superheroService.getById(Number(req.params.id));
    res.send(targetHero);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.patch(
  `${SUPERHEROES_ENDPOINT}/:id`,
  upload.array("images"),
  async (req: Request, res: Response) => {
    const heroId = req.params.id;
    const changes = req.body;

    const imagePaths = getImagesAbsolutePaths(req);

    try {
      const updatedHero = await superheroService.update(
        Number(heroId),
        changes
      );
      res.send(updatedHero);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }
);

app.delete(
  `${SUPERHEROES_ENDPOINT}/:id`,
  async (req: Request, res: Response) => {
    try {
      await superheroService.delete(Number(req.params.id));
      res.send("deleted the hero entry");
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
