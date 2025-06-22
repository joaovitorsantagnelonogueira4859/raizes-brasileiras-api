const { DataSource } = require("typeorm");
const User = require("../entities/User");
const Reports= require("../entities/Reports");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [User, Reports],
});

module.exports = { AppDataSource };
