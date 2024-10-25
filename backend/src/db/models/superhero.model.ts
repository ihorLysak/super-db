import { Knex } from "knex";
import { AbstractModel } from "./abstract.model";
import {
  FullSuperheroDto,
  MinimalSuperheroDto,
  CreateSuperheroDto,
} from "../../../types/types";
import { TableName } from "../../../libs/enums/enums";
import { db } from "../database";

class SuperheroModel extends AbstractModel {
  constructor(db: Knex<any, unknown[]>) {
    super(db);
  }

  public async create(heroData: CreateSuperheroDto): Promise<FullSuperheroDto> {
    const [createdHero] = await this.db(TableName.SUPERHEROES)
      .insert(heroData)
      .returning("*");

    return createdHero;
  }

  public async getAllMinimal() {
    return await this.db(TableName.SUPERHEROES)
      .select("id", "nickname")
      .returning("*");
  }

  public async getById(heroId: number): Promise<FullSuperheroDto> {
    return await this.db(TableName.SUPERHEROES).where({ id: heroId }).first();
  }

  public async update(heroId: number, changes: Partial<FullSuperheroDto>) {
    const [updatedHero] = await this.db(TableName.SUPERHEROES)
      .where({ id: heroId })
      .update(changes)
      .returning("*");

    return updatedHero;
  }

  public async delete(heroId: number): Promise<boolean> {
    const rowsDeleted = await this.db(TableName.SUPERHEROES)
      .where("id", heroId)
      .del();

    return Boolean(rowsDeleted);
  }
}

const superheroModel = new SuperheroModel(db);

export { superheroModel };
