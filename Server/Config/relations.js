const User = require('../Models/UserModel.js');
const Workflow = require('../Models/WorkflowModel.js');
const Stage = require('../Models/StageModel.js');


Workflow.hasMany(Stage);

Stage.belongsTo(Workflow, {
    foreignKey: {
        allowNull: false
    }
});





