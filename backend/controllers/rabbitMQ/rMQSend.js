import amqp from 'amqplib/callback_api.js'

export default class SendRabbitMQ {

    static async publish(event) {
        console.log(`RabbitMQ: attempting to sent event ${event}`);
        amqp.connect(env(RABBITMQ_URL), (connectError, connection) => {
            if (connectError) { throw connectError; }
            connection.createChannel((channelError, channel) => {
                if (channelError) { throw channelError; }
                const routingKey = event.getRoutingKey();
                channel.publish('events', routingKey, Buffer.from(JSON.stringify(event)));
                console.log(`RabbitMQ: sent event ${event}`);
            });
            connection.close();
        });
    }

}
