const {validationResult} = require('express-validator');
const auth = require('../auth');

const createCourse = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not create course" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const changeCourse = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(422).json({ message: "Could not find the given course" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getCourse = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the requested course" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const getAllCourses = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()[0] });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find any course" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const deleteCourse = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    if(auth.auth()){
        return res.status(404).json({ message: "Could not find the given course" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    }    
}
 
module.exports = {
    createCourse,
    changeCourse,
    getCourse, 
    getAllCourses, 
    deleteCourse
}