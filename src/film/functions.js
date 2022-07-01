const yargs = require("yargs");
const Film = require("./table");
// const User = require("./table");

exports.addFilm = async (filmObj, userObj) => {
  try {
    await Film.create(filmObj);
    // await User.create(userObj);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

exports.updateTitle = async (filmObj) => {
  try {
    await Film.update(
      {
        title: filmObj.NT,
      },
      {
        where: {
          title: filmObj.title,
        },
      }
    );
    console.log("Title = Updated");
  } catch (error) {
    console.log(error);
  }
};

exports.updateActor = async (filmObj) => {
  try {
    await Film.update(
      {
        actor: filmObj.NA,
      },
      {
        where: {
          title: filmObj.Title,
        },
      }
    );
    console.log("Actor = Updated");
  } catch (error) {
    console.log(error);
  }
};
exports.updateRating = async (filmObj) => {
  try {
    await Film.update(
      {
        rating: filmObj.NR,
      },
      {
        where: {
          title: filmObj.title,
        },
      }
    );
    console.log("Rating = Updated");
  } catch (error) {
    console.log(error);
  }
};

exports.listFilms = async () => {
  try {
    console.log(await Film.findAll());
  } catch (error) {
    console.log(error);
  }
};

exports.removeFilm = async (filmObj) => {
  try {
    await Film.destroy({
      where: {
        title: filmObj.title,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
