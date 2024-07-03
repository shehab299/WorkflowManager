const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../Config/db");
const userValiadtion = require("../Validations/userValidations");

class User extends Model {

    async comparePassword(password){
        return await bcrypt.compare(password, this.password);
    }
}


let UserSchema = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: userValiadtion.idValidator
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: userValiadtion.nameValidator
    },
    
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: userValiadtion.emailValidator
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: userValiadtion.passwordValidator
    },

    role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
        allowNull: false   
    }

}

let options = {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
}

User.init(UserSchema, options);

User.addHook("beforeSave", async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;