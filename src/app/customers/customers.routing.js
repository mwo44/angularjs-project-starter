
export const routing = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/customers/list');
    
    $stateProvider.state({
        name: 'list',
        url: '/customers/list',
        component: 'customersList',
    });
    
    $stateProvider.state({
        name: 'add',
        url: '/customers/add',
        component: 'addCustomer',
    });
    
    $stateProvider.state({
        name: 'edit',
        url: '/customers/edit/:id',
        component: 'editCustomer',
    });
}