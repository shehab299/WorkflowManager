import sequelize from "../utils/db.js";
import DataTypes from "sequelize"

const RequestSchema = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Request = sequelize.define("request", RequestSchema);

export default Request;

