import { FullSuperheroDto, CreateSuperheroDto } from "../../types/types";
import { superheroModel } from "../db/models/superhero.model";
import { imageToSuperheroService } from "./image-to-superhero.service";
import { imageService } from "./image.service";

class SuperheroService {
  public async create(
    heroData: CreateSuperheroDto,
    imagePaths: string[]
  ): Promise<FullSuperheroDto> {
    const newHeroDetails = await superheroModel.create(heroData);

    const newImages = await Promise.all(
      imagePaths.map((imagePath) => {
        return imageService.create(imagePath);
      })
    );

    await Promise.all(
      newImages.map((image) => {
        return imageToSuperheroService.create(image.id, newHeroDetails.id);
      })
    );

    const newHero = { ...newHeroDetails, image_path: newImages[0].image_url };
    return { ...newHero };
  }

  public async getAllMinimal() {
    const minimalHeroesData = await superheroModel.getAllMinimal();

    return await Promise.all(
      minimalHeroesData.map(async (minimalHero) => {
        const heroToImage = await imageToSuperheroService.GetFirstByHeroId(
          minimalHero.id
        );

        let image = undefined;

        if (heroToImage)
          image = await imageService.getById(heroToImage.image_id);

        const imagePath = image ? image.image_url : "";
        return { ...minimalHero, imagePath };
      })
    );
  }

  public async getById(id: number) {
    return await superheroModel.getById(id);
  }

  public async update(id: number, changes: Partial<FullSuperheroDto>) {
    return await superheroModel.update(id, changes);
  }

  public async delete(id: number) {
    return await superheroModel.delete(id);
  }
}

const superheroService = new SuperheroService();

export { superheroService };
