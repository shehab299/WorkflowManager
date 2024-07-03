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
    
    const port = process.env.PORT || 3000;

    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    
    });
};

startServer();

