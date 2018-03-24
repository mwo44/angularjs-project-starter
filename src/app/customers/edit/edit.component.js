import {EditCustomerController} from './edit.controller';
import template from './edit.html';
import './edit.scss';

export class EditCustomerComponent {
    template = template;
    controllerAs = 'edit';
    controller = EditCustomerController;
}