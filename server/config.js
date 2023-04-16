require("dotenv").config();
const Config = {
  PORT: 4000,
};

const Database = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "GestioniasLite",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
};

module.exports = {
  Config,
  Database,
};
