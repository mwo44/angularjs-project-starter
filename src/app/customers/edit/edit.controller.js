import {AddCustomerController} from '../add/add.controller';

export class EditCustomerController extends AddCustomerController {
    constructor(customersService, $state, $location, $stateParams, $scope) {
        super(customersService, $state);
        this.$stateParams = $stateParams;
        this.$scope = $scope;        
    }

    $onInit = () => {
        this.id = this.$stateParams.id;
        const customers = this.customersService.getState();
        console.log(this.$stateParams.id);
        this.index = customers.map(customer => customer.id).indexOf(this.id);
        this.backup = customers[this.index];
        this.name = customers[this.index].name;
        this.company = customers[this.index].company;
        this.email = customers[this.index].email;
        this.date = customers[this.index].date;
        this.phone = customers[this.index].phone;
    };

    edit = () => {
        //this.customersService.edit();
        /*this.customersService.customers[this.index].name = this.name;
        this.customersService.customers[this.index].company = this.company;
        this.customersService.customers[this.index].email = this.email;
        this.customersService.customers[this.index].date = this.date;
        this.customersService.customers[this.index].phone = this.phone;*/
        this.$state.go('list');
    };

    reset = () => {
        this.name = this.backup.name;
        this.company = this.backup.company;
        this.email = this.backup.email;
        this.date = this.backup.date;
        this.phone = this.backup.phone;
    };
}