const { DataTypes , Model } = require("sequelize");


const sequelize = require("../Config/db");


class Workflow extends Model {};


let WorkflowSchema = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            isInt: true
        }
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 100],
            isAlpha: true
        }
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 500]
        }
    }

};

let WorkflowOptions = {
    sequelize,
    modelName: "Workflow",
    tableName: "workflows",
    timestamps: true
};


Workflow.init(WorkflowSchema, WorkflowOptions);

module.exports = Workflow;