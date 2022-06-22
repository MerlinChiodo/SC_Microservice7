const {validationResult} = require('express-validator');
const auth = require('../auth');

const createEvent = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not create event" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const changeEvent = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not find the given event" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getEvent = async (req, res) => {
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

const getAllEvents = async (req,res) => {
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

const deleteEvent = async (req, res) => {
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
    createEvent,
    changeEvent,
    getEvent, 
    getAllEvents, 
    deleteEvent
}