export class AddCustomerController {
    id = '';
    name = '';
    company = '';
    email = '';
    phone = '';
    date = '';

    constructor(customersService, $state) {
        this.customersService = customersService;
        this.$state = $state;
    }

    checkPristine = () => {
        const customer_name = document.querySelector('#customer_name');
        const className = 'ng-pristine';
        
        if (customer_name.classList) {
            return customer_name.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(customer_name.className);
        }        
    };

    validatePhone = () => {
        this.phoneInvalid = this.customersService.phoneValidation(this.phone);
    }

    add = () => {
        this.customersService.add(
            this.id,
            this.name,
            this.company,
            this.email,
            this.phone,
            this.date
        );
        this.$state.go('list');
    };

    back = () => this.$state.go('list');
};