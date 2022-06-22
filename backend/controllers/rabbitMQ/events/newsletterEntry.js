import RabbitMQEvent from "./rabbitEvent";

export default class NewsletterEntryEvent extends RabbitMQEvent {

    constructor(title, short_description, long_description, picture_url, date) {
        super('newServicePost', 7000, 'public.fitnessstudio');
        if (typeof title !== 'string' || title.length === 0) {
            throw new Error('Title must be a non-empty string!');
        }
        if (typeof short_description !== 'string' || short_description.length === 0) {
            throw new Error('short_description must be a non-empty string!');
        }
        if (typeof long_description !== 'string' || long_description.length !== 0) {
            throw new Error('long_description must be a string!');
        }
        if (typeof picture_url !== 'string' || picture_url.length !== 0) {
            throw new Error('Picture url must be a string!');
        }
        if (typeof date !== 'string' && date.length !== 0) {
            throw new Error('Date must be a string!');
        }
        this.title = title;
        this.short_description = short_description;
        if(long_description !== "") {
            this.long_description = long_description;
        }
        if(picture_url !== "") {
            this.picture_url = picture_url;
        }
        if(date !== "") {
            this.date = date;
        }
    }
}