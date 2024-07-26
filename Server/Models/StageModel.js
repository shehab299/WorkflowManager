const {DataTypes , Model} = require("sequelize");

const sequelize = require("../Config/db");
const AppError = require("../Utils/AppError");


class Stage extends Model {};


let StageSchema = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            isInt: true
        }
    },

    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        }
    },

    role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
        allowNull: false   
    }

};

let StageOptions = {
    sequelize,
    modelName: "Stage",
    tableName: "stages",
    timestamps: true
};

Stage.init(StageSchema, StageOptions);

Stage.addHook("beforeValidate",validateOrderasync );

async function validateOrderasync(stage){
    
    const stages = await Stage.findAll(
        {
            where: {
                order: stage.order,
                workflowId: stage.WorkflowId
            }
        }
    );

    if(stages.length > 0){
        throw new AppError("Order must be unique");
    }
}

module.exports = Stage;