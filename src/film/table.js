const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Film = sequelize.define("Film", {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
});

module.exports = Film;
