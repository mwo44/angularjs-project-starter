import angular from 'angular'
import {EditCustomerComponent} from './edit.component';

export const editCustomerModule = angular
    .module('app.customers.edit', [])
    .component('editCustomer', new EditCustomerComponent());