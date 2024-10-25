import { Request } from "express";
import path from "path";

const getImagesAbsolutePaths = (req: Request) => {
  const images = req.files as Express.Multer.File[] | undefined;

  const imagePaths = images
    ? images.map((image) => path.resolve(image.path))
    : [];

  return imagePaths;
};

export { getImagesAbsolutePaths };
