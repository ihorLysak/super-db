import { FullSuperheroDto } from "./full-superhero-dto.type";

type CreateSuperheroDto = Omit<FullSuperheroDto, "id" | "images">;

export { type CreateSuperheroDto };
