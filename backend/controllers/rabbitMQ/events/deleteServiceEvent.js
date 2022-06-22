import RabbitMQEvent from "./rabbitEvent";

export default class DeleteServiceEvent extends RabbitMQEvent {

    constructor(date) {
        super('Delete My Service', 7004, 'public.fitnessstudio');
        if (typeof date !== 'string' || date.length === 0) {
            throw new Error('Date must be a non-empty string!');
        }
        this.date = date;
    }
}