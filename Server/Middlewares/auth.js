import jwt from "jsonwebtoken";
import User from "../models/User.js";
import secret from "../utils/secret.js";

const authMiddleware = async (req, res, next) => {
  try{
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "No token provided" });
    }
  
    const parts = authHeader.split(" ");
  
    if(parts[0] != "Bearer" || parts.length !== 2)
      return res.status(401).json({ error: "Invalid token" });    
  
    const token = parts[1];
    
    const user_id = jwt.verify(token,secret);

    const user = await User.findByPk(user_id);

    if(!user)
      return res.status(401).json({ error: "Invalid token" });    

    req.user = user;
    
    next();
  }catch(err){
    console.log(err);
  }
};


export default authMiddleware;
   