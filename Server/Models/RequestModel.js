const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");
const { tableName } = require("./InstanceModel");
const Stage = require("./StageModel");

class Request extends Model{};

const RequestSchema = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            isInt: true
        }
    },

    state: {
        type: DataTypes.ENUM("PENDING", "SENT", "ACCEPTED", "REJECTED"),
        defaultValue: "PENDING",
        allowNull: false
    },

    message: {
        type: DataTypes.TEXT,
        defaultValue: "",
        allowNull: false
    }
}


const RequestOptions = {
    sequelize,
    modelName: "Request",
    tableName: "requests",
    timestamps: true
}


Request.init(RequestSchema, RequestOptions);

Request.addHook("beforeUpdate", async (request) => {

    if(request.state === "SENT"){

        const stage = await Stage.findByPk(request.stageId);
        const user = await User.findByPk(request.toId);

        if(!stage || !user){
            throw new AppError(400, "Invalid Request");
        }

        if(stage.role !== user.role){
            throw new AppError(400, "The Intended User is not Valid for this Request");
        }
    }

});


module.exports = Request;