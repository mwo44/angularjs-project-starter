import {AddCustomerComponent} from './add.component';

export const addCustomerModule = angular
    .module('app.customers.add', [])
    .component('addCustomer', new AddCustomerComponent());