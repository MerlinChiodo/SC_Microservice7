import RabbitMQEvent from "./rabbitEvent";

export default class UpdateAboutUsEvent extends RabbitMQEvent {

    constructor(text, pictureURL) {
        super('Updated About US', 7003, 'public.fitnessstudio');
        if (typeof text !== 'string' || text.length === 0) {
            throw new Error('Text must be a non-empty string!');
        }
        if (typeof picture_url !== 'string' || picture_url.length === 0) {
            throw new Error('Picture url must be a non-empty string!');
        }
        this.text = text;
        this.picture_url = picture_url;
    }
}