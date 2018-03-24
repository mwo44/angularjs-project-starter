import {v4 as uuid} from 'uuid';

export class Customer {
    id;
    name;
    company;
    email;
    phone;
    date;

    constructor (
        name,
        company,
        email,
        phone,
        date
        ) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.id = uuid();
    }
}
