export class CustomersController {
    constructor($state, customersService){
        this.$state = $state;
        this.customersService = customersService;
        this.customers = customersService.customers;
    }

    showList = () => this.$state.go('list');

    add = () => this.$state.go('add');

    edit = (customer) => {
        this.$state.go('edit', {
            id: customer.id,
        });
    }

    delete = (id) => this.customersService.delete(id);
}