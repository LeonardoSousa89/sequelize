const Sequelize = require("sequelize");

const sequelize = new Sequelize("citizix_db", "citizix_user", "S3cret", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
