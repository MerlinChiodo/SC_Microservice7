const {validationResult} = require('express-validator');
const auth = require('../auth');

const createTariff = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not create tariff" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const changeTariff = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not find the given tariff" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getTariff = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
}

const getAllTariffs = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find any tariff" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const deleteTariff = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the given tariff" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    }    
}
 
module.exports = {
    createTariff,
    changeTariff,
    getTariff, 
    getAllTariffs, 
    deleteTariff
}