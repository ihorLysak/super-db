module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: "5432",
      database: "superheroes",
      user: "postgres",
      password: "admin",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
