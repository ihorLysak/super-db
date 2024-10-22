import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    database: "superheroes",
    user: "postgres",
    password: "admin",
  },
});

export { db };
