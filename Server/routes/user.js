import { Router } from "express";


const router = Router();


router.get('/user/', getUsers)

router.get("/user/:userId", getUser);



export default router;

