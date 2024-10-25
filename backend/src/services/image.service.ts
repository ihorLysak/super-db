import { ImageDto } from "../../types/types";
import { imageModel } from "../db/models/image.model";

class ImageService {
  public async getById(imageId: number): Promise<ImageDto> {
    return await imageModel.getById(imageId);
  }

  public async create(imageUrl: string): Promise<ImageDto> {
    return await imageModel.create(imageUrl);
  }

  public async delete(imageId: number): Promise<boolean> {
    return await imageModel.delete(imageId);
  }
}

const imageService = new ImageService();

export { imageService };
