const amqp = require('amqplib/callback_api.js');


    async function publish(event) {
        console.log(`RabbitMQ: attempting to sent event ${event}`);
        amqp.connect(process.env.RABBITMQ_URL, (connectError, connection) => {
            if (connectError) { throw connectError; }
            console.log(`bla`);
            connection.createChannel((channelError, channel) => {
                if (channelError) { throw channelError; }
                console.log(`bla`);
                const routingKey = 'public.fitnessstudio'; //event.getRoutingKey();
                channel.publish('events', routingKey, Buffer.from(JSON.stringify(event)));
                console.log(`RabbitMQ: sent event ${event}`);
            });

        });
    }

    module.exports = {publish}
