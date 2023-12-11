const Sequelize = require("sequelize");

const db = require("../../db/db");

const user = db.define("clients", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = user;
