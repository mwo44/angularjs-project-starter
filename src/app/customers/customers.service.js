import {v4 as uuid} from 'uuid';

export class CustomersService {
    
    $onInit = () => {
        this.getState();
    }

    getApi = () => {
        return api-url;
    }; 

    getHeaders = () => ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-User-ID': 'mwolniak'
    });
    
    getState = () => {
        //const data = localStorage.getItem(CustomersService.STORAGE_KEY);
        let customers = [];
        /*if (data) {
            try {
                customers = JSON.parse(data);
            } catch (e) {}
        }*/
        fetch(`${this.getApi()}/customers`, {
            headers: this.getHeaders(),
            method: 'GET'
        }).then(res => {
            res.json().then(data => {
                if (data.customers) {
                    try {
                        this.customers = data.customers;
                    } catch (e) {}
                }
            });
        });
        return customers;
    };

    keepState = () => {
        localStorage.setItem(
            CustomersService.STORAGE_KEY,
            JSON.stringify(this.customers),
        );
    };
    
    phoneValidation = (phone) => {
        const phonePattern = /^[0-9\+]{9,13}$/;
        this.phoneInvalid = false;
        if (!phonePattern.test(phone)) {
            this.phoneInvalid = true;
        }
        return this.phoneInvalid;
    }

    /*add = (
        id,
        name,
        company,
        email,
        phone,
        date
        ) => {
        this.customers.push({
            id: uuid(),
            name,
            company,
            email,
            phone,
            date: new Date(Date.now()).toLocaleString(),
        });
        this.keepState();
    };*/

    add = (id, name, company, email, phone, date) => {
        var customer = {
            id: uuid(),
            name,
            company,
            email,
            phone,
            date: new Date(Date.now()).toLocaleString(),
        };
        fetch(`${this.getApi()}/add`, {
            headers: this.getHeaders(),
            method: 'POST',
            body: JSON.stringify({customer: customer})
        });
    };

    delete = (id) => {
        const index = this.customers.map(customer => customer.id).indexOf(id);
        this.customers.splice(index, 1);
        this.keepState();
    };
}