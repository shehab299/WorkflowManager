import sequelize from "../utils/db.js";
import DataTypes from "sequelize"

const RequestSchema = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Request = sequelize.define("request", RequestSchema);

export default Request;


//to get and set the "to"
// const Request = await Stage.findByPk(requestid);
// const To = await Request.getTo(); // This will fetch the associated workflow
// await Request.setTo(user); // Set the associated workflow

// demo.sync(): Create the table if it doesn't exist and does nothing if it exists.
// demo.sync({ force: true }): Create the table and drop the first if it already exists.
// demo.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.

