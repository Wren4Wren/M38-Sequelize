const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Film = sequelize.define("Film", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

//  #Stretch_Goal
// const User = sequelize.define("User", {
//   userName: {
//     type: DataTypes.STRING,
//     required: true,
//     allowNull: false,
//   },
// });

module.exports = Film;
