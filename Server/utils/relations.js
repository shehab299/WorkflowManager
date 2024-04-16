//Models

import FlowInstance from '../models/Flow.js'
import Request from "../models/Request.js";
import Stage from "../models/Stage.js";
import User from "../models/User.js";
import Workflow from "../models/Workflow.js";
import Role from "../models/Role.js";


const defineRelations = () => {

  //Role Relations
  Role.hasMany(User , {
    foreignKey: {name: 'roleId', allowNull: true}
  });
  User.belongsTo(Role);

  Role.hasMany(Stage, {
    foreignKey: {name: 'roleId', allowNull: false}
  });
  Stage.belongsTo(Role);

  //Flows Relations
  User.hasMany(FlowInstance , {
    foreignKey: {name: 'userId',allowNull: false}
  });
  FlowInstance.belongsTo(User);

  Workflow.hasMany(FlowInstance, {
    foreignKey: {name: 'workflowId', allowNull: false}
  });
  FlowInstance.belongsTo(Workflow);

  //Stage Relations
  Stage.hasMany(FlowInstance, {foreignKey: 'currentStage'});
  
  Stage.hasOne(Stage, {as: "nextStage" , foreignKey: 'nextStageId'});
  Stage.belongsTo(Stage, {as: "prevStage" , foreignKey: 'nextStageId'});
  
  Workflow.hasOne(Stage, {foreignKey: 'workflowId'});
  Stage.belongsTo(Workflow, {foreignKey: 'workflowId'});

}



export default defineRelations;