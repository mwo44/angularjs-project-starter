export class CustomerListController {
    constructor($state, customersService){
        this.$state = $state;
        this.customersService = customersService;
        this.customers = customersService.customers;
    }

    $onInit = () => {
        const customers = this.customersService.getState();
    }

    edit = (customer) => {
        this.$state.go('edit', {
            id: customer.id,
        });
    };

    delete = (id) => this.customersService.delete(id);
}