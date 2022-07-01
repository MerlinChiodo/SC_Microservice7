const {validationResult} = require('express-validator');
const auth = require('../auth');
const rMQSend = require('../rabbitMQ/rMQSend.js');


const updateLandingpage = async (req, res) => {
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(422).json({ errors: errors.array()[0] });
     }
    if(auth.auth()){
        console.log(req.header.test);
        var date = new Date();
        var event = {
            event_id: 7001,
            event_name: "Updated About US",
            service_name: "Fitnessstudio",
            date: date.toISOString(),
            url: req.body.url,
            about_us: req.body.aboutus, 
            picture: req.body.imurl
        }
        rMQSend.publish(event);
        return res.status(201).json({ message: "Sent event" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

const deleteLandingpage = async (req, res) => {
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(422).json({ errors: errors.array()[0] });
     }
    if(auth.auth()){
        console.log(req.header.test);
        var date = new Date();
        var event = {
            event_id: 7002,
            event_name: "Delete My Service",
            service_name: "Fitnessstudio",
            date: date.toISOString(),
        }
        rMQSend.publish(event);
        return res.status(201).json({ message: "Sent event" });
    }else{
        return res.status(401).json({ message: "You don't have rights to do this" });
    } 
}

module.exports = {updateLandingpage, deleteLandingpage}