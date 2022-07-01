const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addFilm,
  listFilms,
  removeFilm,
  updateTitle,
  updateActor,
  updateRating,
} = require("./film/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync({ alter: true });
    // add something to film table
    if (yargsObj.add) {
      await addFilm(
        {
          title: yargsObj.title,
          actor: yargsObj.actor,
          rating: yargsObj.rating,
        }
        // { userName: yargsObj.userName }
      );
      console.log(`${yargsObj.title} has been added to your list`);

      // list content of film table
    } else if (yargsObj.list) {
      console.log(await listFilms());

      // update an entry in movie table by Title
    } else if (yargsObj.updateT) {
      await updateTitle({ NT: yargsObj.NT, title: yargsObj.title });
      console.log(`${yargsObj.title} has been replaced by ${yargsObj.NT}`);
      // update an entry in movie table by Actor
    } else if (yargsObj.updateA) {
      await updateActor({ NA: yargsObj.NA, title: yargsObj.title });
      console.log(`${yargsObj.actor} has been replaced by ${yargsObj.NA}`);
    }
    // update an entry in movie table by Rating
    else if (yargsObj.updateR) {
      await updateRating({ NR: yargsObj.NR, title: yargsObj.title });
      console.log(
        `Rating: ${yargsObj.rating} has been replaced by Rating: ${yargsObj.NR}`
      );
    }
    // delete entry from movie table
    else if (yargsObj.delete) {
      await removeFilm({ title: yargsObj.title });
      console.log(`${yargsObj.title} has been deleted`);
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

// COMMANDS

// node src / app.js--add--title "" --actor "" --rating-- Adds the movie to the database, if the actor is not specified it'll add "not specifed", if the rating is not specified it'll mark it as 0.

// node src/app.js --list Lists all data entries from both the user table and movie table

// node src/app.js --delete --title "" Delets the record with the associated movie title

// node src/app.js --updateT --NT "" --title "" Updates the title to the newtitle

//node src/app.js --updateA --newactor "" --title "" Updates the actor to the newactor targeted by the title

//node src/app.js --updateR --newrating --title "" Updates the rating to the newrating targeted by the title
