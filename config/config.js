require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "indigo14",
    database: "parents",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "parents",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    use_env_variable: process.env.DB_JAWSDB,
    dialect: "mysql",
  },
};
