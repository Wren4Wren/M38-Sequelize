const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addFilm } = require("./film/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync({ alter: true });
    if (yargsObj.add) {
      // add something to film table
      await addFilm({ Title: yargsObj.Title, Actor: yargsObj.Actor });
    } else if (yargsObj.list) {
      // list content of film table
    } else if (yargsObj.update) {
      // update one entry in movie table
    } else if (yargsObj.delete) {
      // delete entry from movie table
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
};
app(yargs.argv);
