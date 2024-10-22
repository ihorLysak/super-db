const TableName = {
  IMAGES: "images",
  SUPERHEROES: "superheroes",
  SUPERHEROES_TO_IMAGES: "superheroes_to_images",
};

const ColumnName = {
  IMAGE_ID: "image_id",
  CREATED_AT: "created_at",
  ID: "id",
  UPDATED_AT: "updated_at",
  SUPERHERO_ID: "superhero_id",
};

const DELETE_STRATEGY = "CASCADE";

exports.up = function (knex) {
  return knex.schema.createTable(TableName.SUPERHEROES_TO_IMAGES, (table) => {
    table.increments(ColumnName.ID).primary();
    table
      .integer(ColumnName.SUPERHERO_ID)
      .notNullable()
      .references(ColumnName.ID)
      .inTable(TableName.SUPERHEROES)
      .onDelete(DELETE_STRATEGY);
    table
      .integer(ColumnName.IMAGE_ID)
      .notNullable()
      .references(ColumnName.ID)
      .inTable(TableName.IMAGES)
      .onDelete(DELETE_STRATEGY);
    table.timestamp(ColumnName.CREATED_AT).defaultTo(knex.fn.now());
    table.timestamp(ColumnName.UPDATED_AT).defaultTo(knex.fn.now());
    table.unique([ColumnName.SUPERHERO_ID, ColumnName.IMAGE_ID]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(TableName.ONBOARDING_ANSWERS_TO_USERS);
};
