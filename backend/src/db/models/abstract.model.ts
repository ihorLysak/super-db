import { Knex } from "knex";

class AbstractModel {
  db: Knex<any, unknown[]>;

  constructor(db: Knex<any, unknown[]>) {
    this.db = db;
  }
}

export { AbstractModel };
