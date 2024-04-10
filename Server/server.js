import app from "./app.js";
import db from "./utils/db.js";
import createDummyUser from "./utils/devUtils.js";


//Models

import FlowInstance from './models/flow.js'
import Request from "./models/request.js";
import Stage from "./models/stage.js";
import User from "./models/user.js";
import Workflow from "./models/workflow.js";


const defineRelations = () => {

  //FLOW INSTANCE RELATIONS

  User.hasMany(FlowInstance , {
    foreignKey: {name: 'userId',allowNull: false}
  });
  FlowInstance.belongsTo(User);

  Workflow.hasMany(FlowInstance, {
    foreignKey: {name: 'workflowId', allowNull: false}
  });
  FlowInstance.belongsTo(Workflow);

  Stage.hasMany(FlowInstance, {foreignKey: 'currentStage'});
  
  //END FLOW INSTANCE RELATIONS

  //Stage Relations

  Stage.hasOne(Stage, {as: "nextStage" , foreignKey: 'nextStageId'});
  Stage.belongsTo(Stage, {as: "prevStage" , foreignKey: 'nextStageId'});
  
  Workflow.hasOne(Stage, {foreignKey: 'workflowId'});
  Stage.belongsTo(Workflow, {foreignKey: 'workflowId'});

  //END Stage Relations

}

const start = async () => {
  try {
    defineRelations()
    await db.sync({force: true});

    //    dev
    await createDummyUser();
    //    dev  

    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("Error: " + err);
  }
};

//LET THE FUN BEGIN
start();
