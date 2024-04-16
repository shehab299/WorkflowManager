import dotenv from "dotenv";
import Sequelize from "sequelize";


dotenv.config();

const connectionString = "postgres://shehab:WiTb22laFbPY3SnMIwVyjUKFFNX9VbSs@dpg-cnjqot0cmk4c739ih6ng-a.oregon-postgres.render.com/flow_manager";

const sequelize = new Sequelize(connectionString, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false// added for self-signed certificates
    },
  },
});

export default sequelize;


