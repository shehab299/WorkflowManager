import DataTypes from "sequelize";
import sequelize from "../utils/db.js";
import Workflow from "./workflow";

const Stage = sequelize.define("Stage", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define self-referencing association for next stage
Stage.belongsTo(Stage, { as: "NextStage", foreignKey: "nextStageId" });

// Define self-referencing association for reject stage
Stage.belongsTo(Stage, { as: "Reject", foreignKey: "rejectId" });

//to get the next stage and the reject stage
// const stage = await Stage.findByPk(stageId);
// const nextStage = await stage.getNextStage();
// const rejectStage = await stage.getReject();

Stage.belongsTo(Workflow, { foreignKey: "id" });

//to get and set the workflow
// const stage = await Stage.findByPk(stageid);
// const workflow = await stage.getWorkflow(); // This will fetch the associated workflow
// await stage.setWorkflow(user); // Set the associated workflow

// demo.sync(): Create the table if it doesn't exist and does nothing if it exists.
// demo.sync({ force: true }): Create the table and drop the first if it already exists.
// demo.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.

Stage.sync({ alter: true }).then(() => {
  console.log("Stage Model synced");
});

export default Stage;
