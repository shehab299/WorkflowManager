import sequelize from "../utils/db.js";
import DataTypes from "sequelize";

const RoleSchema = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

const Role = sequelize.define("role", RoleSchema);

export default Role;


