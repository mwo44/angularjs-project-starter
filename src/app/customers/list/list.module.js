import angular from 'angular';
import {CustomersListComponent} from './list.component';

export const customersListModule = angular
    .module('app.customers.list', [])
    .component('customersList', new CustomersListComponent());