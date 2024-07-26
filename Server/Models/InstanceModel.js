const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Config/db");

class Instance extends Model{};

const InstanceSchema = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            isInt: true
        }
    }
}


let InstanceOptions = {
    sequelize,
    modelName: "Instance",
    tableName: "instances",
    timestamps: true
};


Instance.init(InstanceSchema,InstanceOptions);

module.exports = Instance;
