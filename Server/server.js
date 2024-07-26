require("dotenv").config();
const { where } = require("sequelize");
const server = require("./app");
const sequelize = require("./Config/db");
const User = require("./Models/UserModel.js");
require("./Config/relations.js");

async function startServer(){

    await sequelize.authenticate();
    await sequelize.sync({force: false});

    await User.findOrCreate({
        where: {
            email: "shehab299@outlook.com"
        },

        defaults: {
            name: "Shehab",
            email: "shehab299@outlook.com",
            password: "12345678",
            role: "admin"
        }
    });

    console.log("Database connected successfully!");

    // showAllTables();  uncomment this line to see all tables in the database
    
    const port = process.env.PORT || 3000;

    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    
    });
};


async function showAllTables(){

    sequelize.getQueryInterface().showAllTables()
    .then(tables => {
      console.log('Tables:', tables);
      return Promise.all(tables.map(table => 
        sequelize.getQueryInterface().describeTable(table)
          .then(description => {
            console.log(`Structure of table ${table}:`, description);
          })
          .catch(err => {
            console.error(`Error describing table ${table}:`, err);
          })
      ));
    })
    .catch(err => {
      console.error('Error retrieving tables:', err);
    });
}


startServer();

