import DataTypes from "sequelize";
import sequelize from "../utils/db.js";


const WorkflowSchema = {

  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}

const Workflow = sequelize.define('workflow', WorkflowSchema);

export default Workflow;
