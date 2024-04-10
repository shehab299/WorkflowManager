import DataTypes from "sequelize";
import sequelize from "../utils/db.js";

const FlowInstanceSchema = { 

  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

}

const FlowInstance = sequelize.define("flow", FlowInstanceSchema);


export default FlowInstance;


