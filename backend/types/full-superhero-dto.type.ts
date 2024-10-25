import { ImageDto } from "./image-dto.type";

type FullSuperheroDto = {
  id: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: ImageDto[];
};

export { type FullSuperheroDto };
