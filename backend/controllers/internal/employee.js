const {validationResult} = require('express-validator');
const auth = require('../auth');

const createEmployee = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not create employee" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const changeEmployee = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not find the given employee" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getEmployee = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the requested employee" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getAllEmployees = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find any employee" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const deleteEmployee = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the given employee" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    }    
}
 
module.exports = {
    createEmployee,
    changeEmployee,
    getEmployee, 
    getAllEmployees, 
    deleteEmployee
}