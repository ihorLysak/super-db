import { Knex } from "knex";
import { AbstractModel } from "./abstract.model";
import { ImageDto } from "../../../types/types";
import { TableName } from "../../../libs/enums/enums";
import { db } from "../database";

class SuperheroesToImagesModel extends AbstractModel {
  constructor(db: Knex<any, unknown[]>) {
    super(db);
  }

  public async create(
    image_id: number,
    superhero_id: number
  ): Promise<ImageDto> {
    console.log(image_id, superhero_id);
    const [createdImage] = await this.db(TableName.SUPERHEROES_TO_IMAGES)
      .insert({ image_id, superhero_id })
      .returning("*");

    return createdImage;
  }

  public async getFirstByHeroId(superhero_id: number) {
    return await this.db(TableName.SUPERHEROES_TO_IMAGES)
      .where({ superhero_id })
      .first();
  }

  public async deleteByHeroId(superhero_id: number): Promise<boolean> {
    const rowsDeleted = await this.db(TableName.IMAGES)
      .where("superhero_id", superhero_id)
      .del();

    return Boolean(rowsDeleted);
  }
}

const superheroesToImagesModel = new SuperheroesToImagesModel(db);

export { superheroesToImagesModel };
