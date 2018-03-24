import {AddCustomerController} from './add.controller';
import template from './add.html';
import './add.scss';

export class AddCustomerComponent {
    template = template;
    controllerAs = 'add';
    controller = AddCustomerController;
}