const TABLE_NAME = "superheroes";

const ColumnName = {
  CREATED_AT: "created_at",
  ID: "id",
  NICKNAME: "nickname",
  REAL_NAME: "real_name",
  ORIGIN_DESCRIPTION: "origin_description",
  SUPERPOWERS: "superpowers",
  CATCH_PHRASE: "catch_phrase",
  UPDATED_AT: "updated_at",
};

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NICKNAME).unique().notNullable();
    table.string(ColumnName.REAL_NAME).unique().notNullable();
    table.string(ColumnName.ORIGIN_DESCRIPTION).notNullable();
    table.string(ColumnName.SUPERPOWERS).notNullable();
    table.string(ColumnName.CATCH_PHRASE).notNullable();
    table
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .dateTime(ColumnName.UPDATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
