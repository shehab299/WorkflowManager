import DataTypes from "sequelize";
import sequelize from "../utils/db.js";

//Creating the User model
const Workflow = sequelize.define("workflow", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// demo.sync(): Create the table if it doesn't exist and does nothing if it exists.
// demo.sync({ force: true }): Create the table and drop the first if it already exists.
// demo.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.

Workflow.sync({ alter: true }).then(() => {
  console.log("Workflow Model synced");
});

export default Workflow;
