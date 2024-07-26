const User = require('../Models/UserModel.js');
const Workflow = require('../Models/WorkflowModel.js');
const Stage = require('../Models/StageModel.js');
const Instance = require("../Models/InstanceModel.js");
const Request = require("../Models/RequestModel.js");

// Workflow and Stages
Workflow.hasMany(Stage);
Stage.belongsTo(Workflow, {
    foreignKey: {
        allowNull: false
    }
});

// Instances and Workflows
Workflow.hasMany(Instance);
Instance.belongsTo(Workflow, {
    foreignKey: {
        allowNull: false   
    }
});

// Instances and Stages
Stage.hasMany(Instance);
Instance.belongsTo(Stage, {
    foreignKey: {
        allowNull: false
    }
});

// Instances and Users
User.hasMany(Instance, {
    foreignKey: {
        name: "createdBy",
        allowNull: false
    }
});
Instance.belongsTo(User, {
    foreignKey: {
        name: "createdBy",
        allowNull: false
    }
});

// Requests and Instances
Instance.hasMany(Request);
Request.belongsTo(Instance, {
    foreignKey: {
        allowNull: false
    }
});

// Requests and From User
User.hasMany(Request, {
    foreignKey: {
        name: "fromId",
        allowNull: false
    }
});
Request.belongsTo(User, {
    foreignKey: {
        name: "fromId",
        allowNull: false
    }
});

// Requests and To User
User.hasMany(Request, {
    foreignKey: {
        name: "toId",
        allowNull: false
    }
});
Request.belongsTo(User, {
    foreignKey: {
        name: "toId",
        allowNull: false
    }
});

// Requests and Stages
Stage.hasMany(Request);
Request.belongsTo(Stage, {
    foreignKey: {
        allowNull: false
    }
});
