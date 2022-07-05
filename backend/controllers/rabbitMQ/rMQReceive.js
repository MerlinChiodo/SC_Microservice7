const ampq = require('amqplib/callback_api.js');
const Ajv = require('ajv');
const {ajv} = require("./validation")
const { DonationRabbitMQSchema } = require('./events/donationEvent.js');



module.exports = {
    checkQueue: function () {
        amqp.connect(env(RABBITMQ_URL), function (error0, connection) {
        if (error0) {
            return 1;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                return 1;
            }

            console.log('Listening for events')

            channel.consume('fitnessstudio', function (msg) {
                console.log(msg.content.toString())

                let incomingEvent = JSON.parse(msg.content.toString())

                const validateDeleteAnimal = ajv.getSchema("deleteAnimal")
                if(validateDeleteAnimal(incomingEvent)){
                    console.log('animal deleted')
                }

                const validateNewAnimal = ajv.getSchema("newAnimal")
                if(validateNewAnimal(incomingEvent)){
                    console.log('new animal')
                }
            }, {
                noAck: true,
            })
        })
    })
    return 0;
    }
  };