import { AbstractService } from "./abstract.service";
import { FullSuperheroDto } from "../../types/full-superhero-dto.type";
import { superheroModel } from "../db/models/superhero.model";

class SuperheroService implements AbstractService<FullSuperheroDto> {
  public async create(heroData: FullSuperheroDto) {
    return await superheroModel.create(heroData);
  }

  public async getAll() {
    return await superheroModel.getAll();
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
