import sequelize from "../utils/db.js";
import DataTypes from "sequelize";

const UserSchema = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }  
}

const User = sequelize.define("user", UserSchema);

export default User;


