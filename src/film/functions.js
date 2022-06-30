const yargs = require("yargs");
const Film = require("./table");

exports.addFilm = async (filmObj) => {
  try {
    const response = await Film.create(filmObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
