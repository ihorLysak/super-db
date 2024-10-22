const TABLE_NAME = "images";

const ColumnName = {
  ID: "id",
  IMAGE_URL: "image_url",
  CREATED_AT: "created_at",
  UPDATED_AT: "updated_at",
};

exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.IMAGE_URL).notNullable();
    table
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};
