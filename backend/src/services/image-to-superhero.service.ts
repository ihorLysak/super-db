import { ImageDto } from "../../types/types";
import { superheroesToImagesModel } from "../db/models/superheroes-to-images.model";

class ImageToSuperheroService {
  public async create(
    image_id: number,
    superhero_id: number
  ): Promise<ImageDto> {
    return await superheroesToImagesModel.create(image_id, superhero_id);
  }

  public async deleteByHeroId(superhero_id: number) {
    return await superheroesToImagesModel.deleteByHeroId(superhero_id);
  }

  public async GetFirstByHeroId(superhero_id: number) {
    return await superheroesToImagesModel.getFirstByHeroId(superhero_id);
  }
}

const imageToSuperheroService = new ImageToSuperheroService();

export { imageToSuperheroService };
