import DataTypes from "sequelize";
import sequelize from "../utils/db.js";
import Workflow from "./workflow";

//Creating the User model
const Flow = sequelize.define("flow", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  stage_at: {
    type: DataTypes.DATE,
    allowNullL: false,
  },
});

Flow.belongsTo(Workflow, { foreignKey: "id" });

//to get and set the Workflow
// const Flow = await Flow.findByPk(requestid);
// const Workflow = await Flow.getWorkflow(); // This will fetch the associated workflow
// await Flow.setWorkflow(workflow); // Set the associated workflow

// demo.sync(): Create the table if it doesn't exist and does nothing if it exists.
// demo.sync({ force: true }): Create the table and drop the first if it already exists.
// demo.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.

Flow.sync({ alter: true }).then(() => {
  console.log("Flow Model synced");
});

export default Flow;
