import User from "./user";
import sequelize from "../utils/db.js";
import DataTypes from "sequelize";

//Creating the User model
const Request = sequelize.define("request", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.STRING,
    allowNullL: false,
  },
});

Request.belongsTo(User, { as: "To", foreignKey: "id" });

//to get and set the "to"
// const Request = await Stage.findByPk(requestid);
// const To = await Request.getTo(); // This will fetch the associated workflow
// await Request.setTo(user); // Set the associated workflow

// demo.sync(): Create the table if it doesn't exist and does nothing if it exists.
// demo.sync({ force: true }): Create the table and drop the first if it already exists.
// demo.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.

Request.sync({ alter: true }).then(() => {
  console.log("Request Model synced");
});

export default Request;
