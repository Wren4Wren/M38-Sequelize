# M38-Sequelize[^1]

## This week's brief was:

### Build a CLI that allows users to add movies to a MySQL DataBase.

- MySQL DB must have more than 1 table with Primary Key/Foreign Key relationships
- All CRUD operations must be covered
- **_Stretch Goal = Add a User table that is connected to movie enrties to indicate who added the movie_**

### CRUD

> - Create and populate a table within the DB
>   Read
> - Read entries input into the DB
>   Update
> - Update entries already stored in the DB
>   Delete
> - Delete any entry input into th DB

**Below is a list of terminal commands to use the DB**

### COMMANDS

> - `node src/app.js--add --title "" --actor "" --rating `
> - <sub>Adds the movie to the database, if the actor has not specified, the default entry will display as "not specifed", if the rating has not specified the default value will be 0.</sub>
>
> - `node src/app.js --list `
> - <sub>Lists all data entries from the movie table</sub>
>
> - `node src/app.js --delete --title "" `
> - <sub>Delets the entry by the movie title</sub>
>
> - `node src/app.js --updateT --NT "" --title "" `
> - <sub>Updates the title to the new title</sub>
>
> - `node src/app.js --updateA --NA "" --title "" `
> - <sub>Updates the actor to the new actor by finding the title of the film</sub>
>
> - `node src/app.js --updateR --NR --title "" `
> - <sub>Updates the rating to the new rating by finding the title of the film</sub>

<sup> I used [GitHub Markdown Guides](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#paragraphs) to help format my README.</sup>

[^1]: Special thanks to Joshua Foulkes for his lightning talk on READMEs, this wouldn't have been possible without your nudge in the right direction.
