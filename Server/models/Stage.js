import DataTypes from "sequelize";
import sequelize from "../utils/db.js";


const Stage = sequelize.define("Stage", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


export default Stage;




