
const userValiadtion = {};

userValiadtion.idValidator = {
    isInt: {
        msg: "ID must be an integer"
    }
};

userValiadtion.nameValidator = {
        len: {
            args: [3, 100],
            msg: "Name must be at least 3 characters long and less than 100 characters long"
        },

        is: {
            args: /^[a-zA-Z\s]*$/,
            msg: "Name must only contain letters and spaces"
        }
};

userValiadtion.emailValidator = {
    isEmail: {
        msg: "Invalid Email"
    }
};

userValiadtion.passwordValidator = {
    len: {
        args: [8, 1000],
        msg: "Password must be at least 8 characters long"
    }
};


module.exports = userValiadtion;