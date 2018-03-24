import {CustomerListController} from './list.controller';
import template from './list.html';
import './list.scss';

export class CustomersListComponent {
    template = template;
    controllerAs = 'list';
    controller = CustomerListController;
}