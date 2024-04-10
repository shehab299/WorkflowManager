import User from '../models/user.js';



const userObj = {
    id: 1,
    firstname: "shehab",
    lastname: "khaled",
    email: "shehab299@outlook.com",
    password: "1234",
    isAdmin: false
}


const createDummyUser = async () => {

    const user = await User.findByPk(1);
  
    if(!user){
  
      User.create(userObj);
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

  
