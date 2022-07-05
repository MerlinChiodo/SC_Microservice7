const {validationResult} = require('express-validator');
const auth = require('../auth');
const prisma = require('../../prisma/prismaclient')

const createMember = async (req, res) => {
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(422).json({ errors: errors.array()[0] });
     }
    if(auth.auth()){
        console.log(req.header.test);
        const member = await prisma.mitglied.create({
            data: {
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                tarifid: parseInt(req.body.tarif)
            },
          })
        return res.status(201).json({ message: "Created member" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const changeMember = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not find the given member" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getMember = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the requested member" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getAllMembers = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find any member" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const deleteMember = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the given member" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    }    
}
 
module.exports = {
    createMember,
    changeMember,
    getMember, 
    getAllMembers, 
    deleteMember
}