const {validationResult} = require('express-validator');
const auth = require('../auth');

const createAboutUs = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not create aboutUs" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getAboutUs = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the requested aboutUs" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getAllAboutUs = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find any aboutUs" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const deleteAboutUs = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the given aboutUs" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    }    
}
 
module.exports = {
    createAboutUs,
    getAboutUs, 
    getAllAboutUs, 
    deleteAboutUs
}