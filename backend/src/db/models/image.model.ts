import { Knex } from "knex";
import { AbstractModel } from "./abstract.model";
import { ImageDto } from "../../../types/types";
import { TableName } from "../../../libs/enums/enums";
import { db } from "../database";

class ImageModel extends AbstractModel {
  constructor(db: Knex<any, unknown[]>) {
    super(db);
  }

  public async getById(imageId: number): Promise<ImageDto> {
    return await this.db(TableName.IMAGES)
      .where({
        id: imageId,
      })
      .first();
  }

  public async create(image_url: string): Promise<ImageDto> {
    const [createdImage] = await this.db(TableName.IMAGES)
      .insert({ image_url })
      .returning("*");

    return createdImage;
  }

  public async delete(imageId: number): Promise<boolean> {
    const rowsDeleted = await this.db(TableName.IMAGES)
      .where("id", imageId)
      .del();

    return Boolean(rowsDeleted);
  }
}

const imageModel = new ImageModel(db);

export { imageModel };
