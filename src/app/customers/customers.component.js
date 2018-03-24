import {CustomersController} from './customers.controller';
import template from './customers.html';
import './customers.scss';

export class CustomersComponent {
    template = template;
    controllerAs = 'customers';
    controller = CustomersController;
}