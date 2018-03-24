import {module} from 'angular';
import {CustomersComponent} from './customers.component';
import {customersListModule} from './list/list.module';
import {routing} from './customers.routing';
import {addCustomerModule} from './add/add.module';
import {editCustomerModule} from './edit/edit.module';
import {CustomersService} from './customers.service';

export const customersModule = module('app.customers', [
    customersListModule.name,
    addCustomerModule.name,
    editCustomerModule.name,
    ])
    .config(routing)
    .component('customers', new CustomersComponent())
    .service('customersService', CustomersService);