import User from '../models/User.js';
import Role from '../models/Role.js';


const userObj = {
    id: 1,
    firstname: "shehab",
    lastname: "khaled",
    email: "shehab299@outlook.com",
    password: "1234",
    roleId: 1
}

const userObj2 = {
    id: 2,
    firstname: "she",
    lastname: "kha",
    email: "shehab@outlook.com",
    password: "1234",
    roleId: 2
}



const role1 = {
    id: 1,
    type: "professor"
}

const role2 = {
    id: 2,
    type: "doctor"
}

const createDummyUser = async () => {

    const user = await User.findByPk(1);
  
    if(!user){
        Role.create(role1);
        Role.create(role2);
        // User.create(userObj);
        // User.create(userObj2);
    }
}


const wfObj = {
    id: 1,
    name: "test workflow"
};

const stage1Obj = {
    id: 1,
    role: "User",
    order: 1
};

const stage2Obj = {
    id: 2,
    role: "User",
    order: 2
}






export default createDummyUser

  
