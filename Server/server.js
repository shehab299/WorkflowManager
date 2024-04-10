import app from "./app.js";
import db from "./utils/db.js";


import FlowInstance from './models/flowInstance.js'
import Request from "./models/request.js";
import Stage from "./models/stage.js";
import User from "./models/user.js";
import Workflow from "./models/workflow.js";


FlowInstance.belongsTo(Workflow, {as:"worflow-id",foreignKey: "id" });
FlowInstance.hasOne(Stage, {as: "stage_at",foreignKey: "id" });

Request.belongsTo(User, { as: "To", foreignKey: "id" });

Stage.belongsTo(Stage, { as: "NextStage", foreignKey: "nextStageId" });
Stage.belongsTo(Stage, { as: "Reject", foreignKey: "rejectId" });
Stage.belongsTo(Workflow, { foreignKey: "id" });


const start = async () => {
  try {
    await db.sync({force: true});
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("Error: " + err);
  }
};

//LET THE FUN BEGIN
start();
