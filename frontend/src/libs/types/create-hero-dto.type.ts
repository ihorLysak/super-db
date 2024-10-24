import { FullSuperheroDto } from "./full-superhero-dto.type";

type CreateSuperheroDto = Omit<FullSuperheroDto, "id">;

export { type CreateSuperheroDto };
