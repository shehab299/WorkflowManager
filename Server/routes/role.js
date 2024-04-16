import { Router } from "express";
import Role from "../models/Role.js";

const roleRoutes = Router();

roleRoutes.get('/' , async (req,res) => {

    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (error) {
        console.log(error);
    }
})


roleRoutes.get('/:id', async (req,res) => {

    try {

        const role = await Role.findByPk(req.params.id);
        res.json(role);

    } catch (error) {
        console.log(error);
        
    }

})


export default roleRoutes;