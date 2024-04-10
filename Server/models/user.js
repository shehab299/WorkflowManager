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
  },

  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
  
}

const User = sequelize.define("user", UserSchema);

export default User;



// User.sync(): Create the table if it doesn't exist and does nothing if it exists.
// User.sync({ force: true }): Create the table and drop the first if it already exists.
// User.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.
