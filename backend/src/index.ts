import express, { Request, Response } from "express";
import { superheroService } from "./services/superhero.service";
import { SUPERHEROES_ENDPOINT } from "../constants/constants";

const app = express();
const port = 3000;

app.use(express.json());

app.post(SUPERHEROES_ENDPOINT, async (req: Request, res: Response) => {
  const heroData = req.body;

  try {
    const newHero = superheroService.create(heroData);
    res.send(newHero);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get(SUPERHEROES_ENDPOINT, async (res: Response) => {
  try {
    const allHeroes = await superheroService.getAll();
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
  async (req: Request, res: Response) => {
    const heroId = req.params.id;
    const changes = req.body;

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
